"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[106],{26673:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates and returns a new remote signal.","params":[{"name":"middleware","desc":"","lua_type":"Middleware?"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"static","source":{"line":148,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"is","desc":"Returns a boolean indicating if `self` is a remote signal or not.","params":[{"name":"self","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":171,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"connectOnce","desc":"Works almost the same as [RemoteSignal:connectOnce], except the connection returned \\nis disconnected automatically once `callback` is called.","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"SignalConnection"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":183,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"connect","desc":"Connects `callback` to the remote signal so that it is called whenever the client\\nfires the remote signal. Additionally, `callback` will be passed to all the arguments sent \\nby the client.","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"SignalConnection"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":196,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"fireClient","desc":"Fires the arguments `...` to `client`.","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":206,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"fireAllClients","desc":"Calls [remoteSignal:fireClient] on every player in the game.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":216,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"fireForClients","desc":"Calls [remoteSignal:fireClient] on every player in the `clients` table only.","params":[{"name":"clients","desc":"","lua_type":"{ Player }"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":226,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"disconnectAll","desc":"Disconnects all connections connected via [RemoteSignal:connect] or [RemoteSignal:connectOnce].","params":[],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":238,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"destroy","desc":"Destroys the remote signal and renders it unusable.","params":[],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":248,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"dispatch","desc":"","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","private":true,"source":{"line":256,"path":"src/network/Server/RemoteSignal.lua"}}],"properties":[{"name":"RemoteSignal","desc":" \\n\\nAn exported Luau type of remote signal.","lua_type":"Type","readonly":true,"source":{"line":16,"path":"src/network/Server/RemoteSignal.lua"}}],"types":[{"name":"SignalConnection","desc":"","fields":[{"name":"Disconnect","lua_type":"() -> ()","desc":""},{"name":"Connected","lua_type":"boolean","desc":""}],"source":{"line":24,"path":"src/network/Server/RemoteSignal.lua"}},{"name":"Middleware","desc":"`serverEvent` must be array of callbacks, if specified.\\n\\n### `serverEvent` \\n\\nCallbacks in `serverEvent` are called whenever the client fires off the remote signal.\\n\\nThe first and *only* argument passed to each callback is just an array of arguments sent by the client. \\n\\n```lua\\nlocal serverEventCallbacks = {\\n    function (arguments)\\n        print(client:IsA(\\"Player\\")) --\x3e true (First argument is always the client!)\\n    end\\n}\\n---\\n```\\n\\n:::warning Yielding is not allowed\\nMiddleware callbacks aren\'t allowed to yield, if they do so, an error will be outputted!\\n:::\\n\\n:::tip More control\\n- If any of the callbacks return an **explicit** false value, then the remote signal\\nwill not be fired. For e.g:\\n\\n```lua\\n-- Server\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.Server.new(\\"Test\\")\\nlocal TestRemoteSignal = network.Server.RemoteSignal.new({\\n    clientServer = {function() return false end}\\n})\\n\\nTestRemoteSignal:connect(function()\\n    print(\\"Fired\\") --\x3e never prints\\nend)\\n\\ntestNetwork:append(\\"signal\\", TestRemoteSignal)\\ntestNetwork:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.client.fromParent(\\"Test\\", Workspace)\\nprint(testNetwork.signal:fire()) \\n```\\n\\n- Additionally, you can modify the `arguments` table, for e.g:\\n\\n```lua\\n-- Server\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.Server.new(\\"Test\\")\\nlocal TestRemoteSignal = network.Server.RemoteSignal.new({\\n    clientServer = {\\n        function(arguments) \\n            arguments[2] = 1 \\n            arguments[3] = \\"test\\"\\n        end\\n    }\\n})\\n\\nTestRemoteSignal:connect(function(client, a, b)\\n    print(a, b) --\x3e 1, \\"test\\" (a and b ought to be 24, but they were modified through the middleware)\\nend)\\n\\ntestNetwork:append(\\"signal\\", TestRemoteSignal)\\ntestNetwork:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.client.fromParent(\\"Test\\", Workspace)\\nprint(testNetwork.signal:fire(24, 24)) \\n```\\n:::","fields":[{"name":"serverEvent","lua_type":"{ (client: Player, args: {any}) -> any }?,","desc":""}],"source":{"line":109,"path":"src/network/Server/RemoteSignal.lua"}}],"name":"RemoteSignal","desc":"A remote signal in layman\'s terms is simply an object which dispatches data\\nto a client (who can listen to this data through a client remote signal) and \\nlistens to data dispatched to itself by a client (through a client remote signal).","source":{"line":8,"path":"src/network/Server/RemoteSignal.lua"}}')}}]);