"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3525],{65865:function(e){e.exports=JSON.parse('{"functions":[{"name":"lerp","desc":"Interpolates `number` to `goal`, with `alpha` being the multiplier.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nlocal num = 2\\nlocal goal = 5\\n\\nnum = NumberUtil.lerp(num, goal, 0.7)\\nprint(num) --\x3e 4.1\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"goal","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":93,"path":"src/NumberUtil/init.lua"}},{"name":"quadraticLerp","desc":"Quadraticly interpolates `number` to `goal`, with `alpha` being the multiplier.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nlocal num = 2\\nlocal goal = 5\\n\\nnum = NumberUtil.quadraticLerp(num, goal, 0.7)\\nprint(num) --\x3e 4.1\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"goal","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":111,"path":"src/NumberUtil/init.lua"}},{"name":"inverseLerp","desc":"Inverse Lerp is the inverse operation of the Lerp Node. It can be used to determine what the input to a Lerp was \\nbased on its output. For e.g, the value of a Lerp between `0` and `2` with `alpha` being `1` is `0.5`. Therefore the value of an Inverse Lerp between `0` and `2` with `alpha` being `0.5` is `1`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nlocal num = 2\\nlocal goal = 5\\n\\nnum = NumberUtil.inverseLerp(num, goal, 0.7)\\nprint(num) --\x3e -0.43333333333333335\\n```","params":[{"name":"min","desc":"","lua_type":"number"},{"name":"max","desc":"","lua_type":"number"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":130,"path":"src/NumberUtil/init.lua"}},{"name":"average","desc":"Returns the average of `...` numbers against `sum`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.inverseLerp(100, 50, 25)) --\x3e 0.75\\n```","params":[{"name":"sum","desc":"","lua_type":"number"},{"name":"...","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":144,"path":"src/NumberUtil/init.lua"}},{"name":"format","desc":"Return a string as the formatted version of `number`. \\n\\n:::warning\\nThis method will struggle to format numbers larger than `10^66`.\\n:::\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.format(1650)) --\x3e \\"1.65K\\"\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"string\\r\\n"}],"function_type":"static","source":{"line":168,"path":"src/NumberUtil/init.lua"}},{"name":"map","desc":"Maps `number` between `inMin` and `inMax`, and `outMin` and `outMax`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.map(1,2,3,4,5)) --\x3e 3\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"inMin","desc":"","lua_type":"number"},{"name":"inMax","desc":"","lua_type":"number"},{"name":"outMin","desc":"","lua_type":"number"},{"name":"outMax","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":185,"path":"src/NumberUtil/init.lua"}},{"name":"nan","desc":"Returns a boolean indicating if `number` is NaN (Not A Number). \\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.nan(0 / 0)) --\x3e true\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":199,"path":"src/NumberUtil/init.lua"}},{"name":"close","desc":"Returns a boolean indicating if the difference between `number` and `to` is lower than or equal to `eplsion`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.close(0.1 + 0.2, 0.3)) --\x3e true\\nprint(NumberUtil.close(0.1 + 0.2, 0.3, 0)) --\x3e false\\n```\\n\\n- If `eplison` is not specified, then it will default to `1e-5`.","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"to","desc":"","lua_type":"number"},{"name":"eplison","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":218,"path":"src/NumberUtil/init.lua"}},{"name":"root","desc":"Returns the `root` of `number`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.root(2, 3)) --\x3e 1.2599210498948732 (same as cube root of 2)\\nprint(NumberUtil.root(2, 2)) --\x3e 1.4142135623730951 (same as square root of 2)\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"root","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":233,"path":"src/NumberUtil/init.lua"}},{"name":"factorial","desc":"Returns the factorial of `number`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.factorial(3)) --\x3e 6\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":247,"path":"src/NumberUtil/init.lua"}},{"name":"factors","desc":"Returns an array of all factors of `number`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.factors(2)) --\x3e {1, 2}\\n```","params":[{"name":"number","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{ number }\\r\\n"}],"function_type":"static","source":{"line":265,"path":"src/NumberUtil/init.lua"}},{"name":"clampTo","desc":"Clamps `number` to `clamp`, if `number` is greater than `max` or lower than `min`.\\n\\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.clampTo(1, 2, 5, 150)) --\x3e 150\\n```","params":[{"name":"number","desc":"","lua_type":"number"},{"name":"min","desc":"","lua_type":"number"},{"name":"max","desc":"","lua_type":"number"},{"name":"clamp","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","source":{"line":291,"path":"src/NumberUtil/init.lua"}}],"properties":[{"name":"e","desc":" \\n\\nA mathematical constant, also known as Euler\'s number. ","lua_type":"number <2.7182818284590>","readonly":true,"source":{"line":21,"path":"src/NumberUtil/init.lua"}},{"name":"Phi","desc":" \\n\\nA mathematical constant, also known as the golden ratio.","lua_type":"number <1.618033988749895>","readonly":true,"source":{"line":29,"path":"src/NumberUtil/init.lua"}},{"name":"Tau","desc":" \\n\\nA mathematical constant, it is the circle constant representing the ratio between circumference and radius.","lua_type":"number <6.283185307179586>","readonly":true,"source":{"line":37,"path":"src/NumberUtil/init.lua"}},{"name":"G","desc":" \\n\\nA mathematical constant, used in calculating the gravitational attraction between two objects.","lua_type":"number <6.6743e-11>","readonly":true,"source":{"line":45,"path":"src/NumberUtil/init.lua"}}],"types":[],"name":"NumberUtil","desc":" \\n\\nA utility module for working with numbers.\\n \\n```lua\\nlocal NumberUtil = require(...)\\n\\nprint(NumberUtil.e) --\x3e 2.7182818284590\\nprint(NumberUtil.nan(3)) --\x3e false\\n```","source":{"line":13,"path":"src/NumberUtil/init.lua"}}')}}]);