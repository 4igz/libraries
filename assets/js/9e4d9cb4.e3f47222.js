"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{65719:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"","params":[{"name":"remoteEvent","desc":"","lua_type":"RemoteEvent"}],"returns":[],"function_type":"static","private":true,"source":{"line":44,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"is","desc":"Returns a boolean indicating if `self` is a client remote signal or not.","params":[{"name":"self","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":59,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"connect","desc":"Connects `callback` to the client remote signal so that it is called whenever \\nthe serverside remote signal (to which the client remote signal is connected to) \\ndispatches some data to the client remote signal. The connected callback is called \\nwith the data dispatched to the client remote signal.","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"SignalConnection"}],"function_type":"method","tags":["ClientRemoteSignal instance"],"source":{"line":73,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"connectOnce","desc":"Works almost exactly the same as [ClientRemoteSignal:connect], except the \\nconnection returned is  disconnected immediately upon `callback` being called.","params":[{"name":"callback","desc":"","lua_type":"(...any) -> ()"}],"returns":[{"desc":"","lua_type":"SignalConnection"}],"function_type":"method","tags":["ClientRemoteSignal instance"],"source":{"line":85,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"disconnectAll","desc":"Disconnects all connections connected via [ClientRemoteSignal:connect] \\nor [ClientRemoteSignal:connectOnce].","params":[],"returns":[],"function_type":"method","tags":["ClientRemoteSignal instance"],"source":{"line":96,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"fireServer","desc":"Fires `...` arguments to the serverside remote signal (to which the client\\nremote signal is connected to).","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["ClientRemoteSignal instance"],"source":{"line":107,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"wait","desc":"Yields the thread until the serverside remote signal (to which the client \\nremote signal is connected to) dispatches some data to this client \\nremote signal.\\n\\n```lua`\\n-- Server\\nremoteSignal:fireAllClients(\\"Hi\\")\\n\\n-- Client\\nprint(clientRemoteSignal:wait()) --\x3e \\"Hi\\"\\n```","params":[],"returns":[{"desc":"","lua_type":"any\\r\\n"}],"function_type":"method","tags":["ClientRemoteSignal instance","yields"],"source":{"line":128,"path":"src/network/client/ClientRemoteSignal.lua"}},{"name":"destroy","desc":"Destroys the client remote signal and renders it unusable.","params":[],"returns":[],"function_type":"method","tags":["ClientRemoteSignal instance"],"source":{"line":138,"path":"src/network/client/ClientRemoteSignal.lua"}}],"properties":[{"name":"ClientRemoteSignal","desc":" \\n\\n\\nAn exported Luau type of a client remote signal object.","lua_type":"Type","readonly":true,"source":{"line":24,"path":"src/network/client/ClientRemoteSignal.lua"}}],"types":[{"name":"SignalConnection","desc":"","fields":[{"name":"Disconnect","lua_type":"() -> ()","desc":""},{"name":"Connected","lua_type":"boolean","desc":""}],"source":{"line":15,"path":"src/network/client/ClientRemoteSignal.lua"}}],"name":"ClientRemoteSignal","desc":"The clientside counterpart of [RemoteSignal]. A client remote signal in \\nlayman\'s terms is just an object connected to a serverside remote signal.","source":{"line":7,"path":"src/network/client/ClientRemoteSignal.lua"}}')}}]);