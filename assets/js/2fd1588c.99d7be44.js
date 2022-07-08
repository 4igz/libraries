"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[563],{58448:e=>{e.exports=JSON.parse('{"functions":[{"name":"allFromParent","desc":"Returns an array of *all* networks dispatched to `parent`.\\n\\n```lua\\n-- Server\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal Network1 = network.Server.new(\\"Test1\\", workspace)\\nNetwork1:append(\\"status\\", \\"not good mate\\")\\nNetwork1:dispatch(Workspace)\\n\\nlocal Network2 = network.Server.new(\\"Test2\\", workspace)\\nNetwork2:append(\\"status\\", \\"good mate!\\")\\nNetwork2:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nfor _, networkObject in Network.client.allFromParent(Workspace) do\\n\\tprint(networkObject.status) \\nend\\n\\n--\x3e \\"not good mate\\"\\n--\x3e \\"good mate!\\"\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"{ [string]: { [string]: any } }\\r\\n"}],"function_type":"static","source":{"line":100,"path":"src/network/client/init.lua"}},{"name":"fromParent","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved once a network with the \\nname of `name`, is dispatched to `parent`. If a network with the name of `name` is already dispatched to\\n`parent`, the promise will immediately resolve.\\n\\nFor e.g:\\n\\n```lua\\n-- Server\\nlocal ReplicatedStorage = game:GetService(\\"ReplicatedStorage\\")\\n\\nlocal network = require(ReplicatedStorage.Packages.network) \\n\\nlocal testNetwork = Network.Server.new(\\"Test\\")\\ntestNetwork:append(\\"method\\", function(player)\\n\\treturn (\\"hi, %s!\\"):format(player.Name)\\nend)\\n\\n-- Dispatch the network to workspace:\\ntestNetwork:dispatch(workspace) \\n\\n-- Client\\n-- Get the network of name \\"Test\\", dispatched to workspace\\nlocal testNetwork = network.client.fromParent(\\"Test\\", workspace)\\nprint(testNetwork.method()) --\x3e \\"hi, bubshayz!\\"\\n```","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Promise<DispatchedNetwork: {[string]: any}>"}],"function_type":"static","source":{"line":140,"path":"src/network/client/init.lua"}}],"properties":[{"name":"ClientRemoteProperty","desc":" ","lua_type":"ClientRemoteProperty","readonly":true,"source":{"line":13,"path":"src/network/client/init.lua"}},{"name":"ClientRemoteSignal","desc":" ","lua_type":"ClientRemoteSignal","readonly":true,"source":{"line":19,"path":"src/network/client/init.lua"}}],"types":[],"name":"networkClient","desc":"The client counterpart of the [network] module.","realm":["Client"],"source":{"line":7,"path":"src/network/client/init.lua"}}')}}]);