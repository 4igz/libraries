--[=[
	@class networkClient
	@client

	The client counterpart of the [network] module.
]=]

--[=[ 
	@prop ClientRemoteProperty ClientRemoteProperty
	@within networkClient
	@readonly
]=]

--[=[ 
	@prop ClientRemoteSignal ClientRemoteSignal
	@within networkClient
	@readonly
]=]

local packages = script.Parent.Parent

local Promise = require(packages.Promise)
local sharedEnums = require(script.Parent.sharedEnums)

local networkClient = {
	ClientRemoteProperty = require(script.ClientRemoteProperty),
	ClientRemoteSignal = require(script.ClientRemoteSignal),
}

local function getAbstractOfNetworkFolder(networkFolder): { [string]: any }
	local abstract = {}

	for _, descendant in networkFolder:GetChildren() do
		if descendant:GetAttribute(sharedEnums.Attribute.boundToRemoteSignal) then
			abstract[descendant.Name] = networkClient.ClientRemoteSignal.new(descendant)
			continue
		elseif descendant:GetAttribute(sharedEnums.Attribute.boundToRemoteProperty) then
			abstract[descendant.Name] = networkClient.ClientRemoteProperty.new(descendant)
			continue
		end

		if descendant:GetAttribute("valueType") == "function" then
			abstract[descendant.Name] = function(...)
				local args = { ... }
				local index = table.find(args, abstract)

				if index then
					table.remove(args, index)
				end

				return descendant:InvokeServer(table.unpack(args))
			end
		else
			abstract[descendant.Name] = descendant:InvokeServer()
		end
	end

	return table.freeze(abstract)
end

local function getNetworkFoldersFromParent(parent: Instance): { Folder }
	local networkFolders = {}

	for _, networkFolder in parent:GetChildren() do
		if not networkFolder:GetAttribute(sharedEnums.Attribute.networkFolder) then
			continue
		end

		table.insert(networkFolders, networkFolder)
	end

	return networkFolders
end
--[=[
	Returns an array of *all* networks dispatched to `parent`.

	```lua
	-- Server
	local Workspace = game:GetService("Workspace")

	local Network1 = network.Server.new("Test1", workspace)
	Network1:append("status", "not good mate")
	Network1:dispatch(Workspace)

	local Network2 = network.Server.new("Test2", workspace)
	Network2:append("status", "good mate!")
	Network2:dispatch(Workspace)

	-- Client
	local Workspace = game:GetService("Workspace")

	for _, networkObject in Network.client.allFromParent(Workspace) do
		print(networkObject.status) 
	end

	--> "not good mate"
	--> "good mate!"
	```
]=]

function networkClient.allFromParent(parent: Instance): { [string]: { [string]: any } }
	local networks = {}

	for _, networkFolder in getNetworkFoldersFromParent(parent) do
		networks[networkFolder.Name] = getAbstractOfNetworkFolder(networkFolder)
	end

	return table.freeze(networks)
end

--[=[
	@return Promise<DispatchedNetwork: {[string]: any}>

	Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved once a network with the 
	name of `name`, is dispatched to `parent`. If a network with the name of `name` is already dispatched to
	`parent`, the promise will immediately resolve.

	For e.g:

	```lua
	-- Server
	local ReplicatedStorage = game:GetService("ReplicatedStorage")

	local network = require(ReplicatedStorage.Packages.network) 

	local testNetwork = Network.Server.new("Test")
	testNetwork:append("method", function(player)
		return ("hi, %s!"):format(player.Name)
	end)

	-- Dispatch the network to workspace:
	testNetwork:dispatch(workspace) 

	-- Client
	-- Get the network of name "Test", dispatched to workspace
	local testNetwork = network.client.fromParent("Test", workspace)
	print(testNetwork.method()) --> "hi, bubshayz!"
	```
]=]

function networkClient.fromParent(name: string, parent: Instance): any
	return Promise.new(function(resolve)
		resolve(getAbstractOfNetworkFolder(parent:WaitForChild(name)))
	end)
end

return table.freeze(networkClient)
