"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[475],{82957:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Server","desc":" \\n\\nA reference to the [NetworkServer] module.","lua_type":"NetworkServer","readonly":true,"source":{"line":32,"path":"src/network/init.lua"}},{"name":"client","desc":" \\n\\nA reference to the [networkClient] module.","lua_type":"networkClient","readonly":true,"source":{"line":40,"path":"src/network/init.lua"}}],"types":[],"name":"network","desc":"An advanced network module for easy server-client communication. The module consists of \\n[NetworkServer] and a [NetworkClient] module.\\n\\n```lua\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\n-- Server\\nlocal TestNetwork = Network.Server.new(\\"Test\\")\\nTestNetwork:append(\\"method\\", function(player)\\n\\treturn (\\"hi, %s!\\"):format(player.Name)\\nend)\\nTestNetwork:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.client.fromParent(\\"Test\\", Workspace)\\nprint(testNetwork.method()) --\x3e \\"hi, bubshayz!\\"\\n```","source":{"line":24,"path":"src/network/init.lua"}}')}}]);