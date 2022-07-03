"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8036],{57872:e=>{e.exports=JSON.parse('{"functions":[{"name":"lerp","desc":"Interpolates `number` to `goal`, with `alpha` being the multiplier.\\n\\n```lua\\nprint(numberUtil.lerp(2, 5, 0.7)) --\x3e 4.1\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"goal","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":84,"path":"src/numberUtil/init.lua"}},{"name":"quadraticLerp","desc":"Quadratic interpolates `number` to `goal`, with `alpha` being the multiplier.\\n\\n```lua\\nprint(numberUtil.quadraticLerp(2, 5, 0.7)) --\x3e 4.1\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"goal","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":96,"path":"src/numberUtil/init.lua"}},{"name":"inverseLerp","desc":"Inverse Lerp is the inverse operation of the Lerp Node. It can be used to determine what the input to a Lerp was \\nbased on its output. For e.g, the value of a Lerp between `0` and `2` with `alpha` being `1` is `0.5`. Therefore the value of an Inverse Lerp between `0` and `2` with `alpha` being `0.5` is `1`.\\n\\n```lua\\nprint(numberUtil.inverseLerp(2, 5, 0.7)) --\x3e -0.43333333333333335\\n```","params":[{"name":"min","desc":"","lua_type":"number"},{"name":"max","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":109,"path":"src/numberUtil/init.lua"}},{"name":"average","desc":"Returns the average of `...` numbers against `sum`.\\n\\n```lua\\nprint(numberUtil.average(100, 50, 25)) --\x3e 0.75\\n```","params":[{"name":"sum","desc":"","lua_type":"number"},{"name":"...","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":121,"path":"src/numberUtil/init.lua"}},{"name":"format","desc":"Return a string as the formatted version of `number`. \\n\\n:::warning Cannot format extremely large numbers\\nThis method will struggle to format numbers larger than `10^68` approximately. \\n\\n```lua\\nprint(numberUtil.format(10^70)) --\x3e 10 (this is wrong)\\nprint(numberUtil.format(10^68)) --\x3e 100c (this is correct)\\n```\\n:::\\n\\n```lua\\nprint(numberUtil.format(1650)) --\x3e \\"1.65K\\"\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"string\\r\\n"}],"function_type":"static","source":{"line":148,"path":"src/numberUtil/init.lua"}},{"name":"map","desc":"Maps `number` between `inMin` and `inMax`, and `outMin` and `outMax`.\\n\\n```lua\\nprint(numberUtil.map(1,2,3,4,5)) --\x3e 3\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"inMin","desc":"","lua_type":"number"},{"name":"inMax","desc":"","lua_type":"number"},{"name":"outMin","desc":"","lua_type":"number"},{"name":"outMax","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":163,"path":"src/numberUtil/init.lua"}},{"name":"nan","desc":"Returns a boolean indicating if `number` is NaN (Not A Number). \\n\\n```lua\\nprint(numberUtil.nan(0 / 0)) --\x3e true\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":175,"path":"src/numberUtil/init.lua"}},{"name":"close","desc":"Returns a boolean indicating if the difference between `number` and `to` is lower than or equal to `eplsion`.\\n\\n```lua\\nprint(numberUtil.close(0.1 + 0.2, 0.3)) --\x3e true\\nprint(numberUtil.close(0.1 + 0.2, 0.3, 0)) --\x3e false\\n```\\n\\n- If `eplison` is not specified, then it will default to `1e-5`.","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"to","desc":"","lua_type":"number"},{"name":"eplison","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":194,"path":"src/numberUtil/init.lua"}},{"name":"root","desc":"Returns the `root` of `number`.\\n\\n```lua\\nprint(numberUtil.root(2, 3)) --\x3e 1.2599210498948732 (same as cube root of 2)\\nprint(numberUtil.root(2, 2)) --\x3e 1.4142135623730951 (same as square root of 2)\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"root","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":207,"path":"src/numberUtil/init.lua"}},{"name":"factorial","desc":"Returns the factorial of `number`.\\n\\n```lua\\nprint(numberUtil.factorial(3)) --\x3e 6\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":219,"path":"src/numberUtil/init.lua"}},{"name":"factors","desc":"Returns an array of all factors of `number`.\\n\\n```lua\\nprint(numberUtil.factors(2)) --\x3e {1, 2}\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{ number }\\r\\n"}],"function_type":"static","source":{"line":235,"path":"src/numberUtil/init.lua"}},{"name":"clampTo","desc":"Clamps `number` to `clamp`, if `number` is greater than `max` or lower than `min`.\\n\\n```lua\\nprint(numberUtil.clampTo(1, 2, 5, 150)) --\x3e 150\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"min","desc":"","lua_type":"number"},{"name":"max","desc":"","lua_type":"number"},{"name":"clamp","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":259,"path":"src/numberUtil/init.lua"}}],"properties":[{"name":"e","desc":" \\n\\nA mathematical constant, also known as Euler\'s number. ","lua_type":"number <2.7182818284590>","readonly":true,"source":{"line":19,"path":"src/numberUtil/init.lua"}},{"name":"phi","desc":" \\n\\nA mathematical constant, also known as the golden ratio.","lua_type":"number <1.618033988749895>","readonly":true,"source":{"line":27,"path":"src/numberUtil/init.lua"}},{"name":"tau","desc":" \\n\\nA mathematical constant, it is the circle constant representing the ratio between circumference and radius.","lua_type":"number <6.283185307179586>","readonly":true,"source":{"line":35,"path":"src/numberUtil/init.lua"}},{"name":"g","desc":" \\n\\nA mathematical constant, used in calculating the gravitational attraction between two objects.","lua_type":"number <6.6743e-11>","readonly":true,"source":{"line":43,"path":"src/numberUtil/init.lua"}}],"types":[],"name":"numberUtil","desc":" \\n\\nA utility module for working with numbers.\\n \\n```lua\\nprint(numberUtil.e) --\x3e 2.7182818284590\\nprint(numberUtil.nan(3)) --\x3e false\\n```","source":{"line":11,"path":"src/numberUtil/init.lua"}}')}}]);