(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{383:function(t,s,a){"use strict";a.r(s);var n=a(46),_=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"真寻bot插件基本标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真寻bot插件基本标准"}},[t._v("#")]),t._v(" 真寻Bot插件基本标准")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("统一插件标准，可以自动生成对应的数据和帮助图片以及功能对应的开关")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("普通插件 应该包含：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("__zx_plugin_name__")]),t._v("：插件名")]),t._v(" "),a("li",[a("code",[t._v("__plugin_usage")]),t._v("：用法")]),t._v(" "),a("li",[a("code",[t._v("__plugin_des__")]),t._v("：简介")]),t._v(" "),a("li",[a("code",[t._v("__plugin_cmd__")]),t._v("：命令")]),t._v(" "),a("li",[a("code",[t._v("__plugin_settings__")]),t._v(" ：插件通用设置")])])]),t._v(" "),a("li",[a("p",[t._v("被动插件（不需要命令调用的插件，如定时任务，hook等） 应该包含：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("__plugin_task__")]),t._v("：为你提供一个或多个开关")])])]),t._v(" "),a("li",[a("p",[t._v("以下作为额外添加选项：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("__plugin_type__")]),t._v("：插件帮助分类（被动类插件不需要）")]),t._v(" "),a("li",[a("code",[t._v("__plugin_version__")]),t._v("：插件版本")]),t._v(" "),a("li",[a("code",[t._v("__plugin_author__")]),t._v("：插件作者")])])])]),t._v(" "),a("h2",{attrs:{id:"zx-plugin-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zx-plugin-name"}},[t._v("#")]),t._v(" __zx_plugin_name__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：str")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件名称，为插件普通帮助的展示内容，基本所有模块都必须有 "),a("code",[t._v("__zx_plugin_name__")]),a("br"),t._v("\n通过在__zx_plugin_name__中添加 [Admin] [Superuser] [Hidden] 控制初始化帮助时插件的分类"),a("br"),t._v("\n基本为以下四类：\n"),a("ul",[a("li",[a("code"),t._v("：默认，即没有以下三种分类，作为普通插件")]),t._v(" "),a("li",[a("code",[t._v("[Admin]")]),t._v("： 纯管理员插件")]),t._v(" "),a("li",[a("code",[t._v("[Superuser]")]),t._v("： 纯超级用户插件")]),t._v(" "),a("li",[a("code",[t._v("[Hidden]")]),t._v("： 隐藏的插件，一般是不需要命令调用的插件")])])])]),t._v(" "),a("h2",{attrs:{id:"plugin-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-usage"}},[t._v("#")]),t._v(" __plugin_usage__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：str")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件帮助说明\n示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage:\n    有什么用处？\n    指令：\n        ...\n        示例：...\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-super-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-super-usage"}},[t._v("#")]),t._v(" __plugin_super_usage__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：str")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n当非 "),a("code",[t._v("[Superuser]")]),t._v(" 插件含有超级用户的功能时，在该属性中编写超级用户的额外帮助"),a("br"),t._v("\n帮助写法与 "),a("code",[t._v("__plugin_usage__")]),t._v(" 一致")])]),t._v(" "),a("h2",{attrs:{id:"plugin-des"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-des"}},[t._v("#")]),t._v(" __plugin_des__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：str")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件简介，不建议太长，详细介绍可以写在usage中，主要在"),a("code",[t._v("详细帮助")]),t._v("中显示")])]),t._v(" "),a("h2",{attrs:{id:"plugin-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-cmd"}},[t._v("#")]),t._v(" __plugin_cmd__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：List[str]")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件指令，相同功能的插件指令请使用"),a("code",[t._v("/")]),t._v("分离，如果是超级用户的功能，请在命令后添加"),a("code",[t._v("[_superuser]")]),a("br"),t._v("\n示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发送 ‘我的签到’ 和 ‘好感度’ 效果相同")]),t._v("\n__plugin_cmd__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我的签到/好感度"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"好感度排行"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"清空好感度 [_superuser]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-settings"}},[t._v("#")]),t._v(" __plugin_settings__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：Dict[str, Union[str, int]]")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件的通用设置，普通插件与纯管理员插件会有所不同"),a("br"),t._v("\n示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 普通插件")]),t._v("\n__plugin_settings__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 群权限等级，请不要设置为1或9，若无特殊情况请设置为5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进群时的默认开关状态")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit_superuser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开关插件的限制是否限制超级用户")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b封面"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B封面'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令别名，主要用于帮助和开关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#"cmd"第一个值会被作为功能调用统计的显示选项，开关方面：开启b封面=开关B封面=开启cover')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#"__zx_plugin_name__"不需要额外写入，在bot启动时会自动将"__zx_plugin_name__"导入对应的"cmd"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员插件")]),t._v("\n__plugin_settings__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin_level"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员等级，建议设置在5及以下，敏感操作设置在5以上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-task"}},[t._v("#")]),t._v(" __plugin_task__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：Dict[str, Union[str, str]]")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n为你提供一个或多个开关，主要用于被动类插件的开关"),a("br"),t._v("\n示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义开关")]),t._v("\n__plugin_task__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"开关中文名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"统计开关"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入管理器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" group_manager\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在插件中设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" group_manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("check_group_task_status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" group_manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("check_group_task_status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-type"}},[t._v("#")]),t._v(" __plugin_type__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：Tuple[Union[str, int]]")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n为普通插件分类，当没有"),a("code",[t._v("__plugin_type__")]),t._v("时，将统一放置普通功能分类中"),a("br"),t._v("\n相同分类的插件在帮助图片中将会统合在一起"),a("br"),t._v("\n示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义格式：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 排列：无或0时：横向排列，1：列项排序(当你的__plugin_cmd__指令很多，建议使用 1)")]),t._v("\n__plugin_type__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("分类名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 详细帮助中的排列"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个`工具`的分类")]),t._v("\n__plugin_type__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'工具'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个`原神相关`的分类，并在详细功能中命令以列向排列显示")]),t._v("\n__plugin_type__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'原神相关'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-version"}},[t._v("#")]),t._v(" __plugin_version__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：Union[float, int]")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件版本，将作为插件自动更新的依照")])]),t._v(" "),a("h2",{attrs:{id:"plugin-author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-author"}},[t._v("#")]),t._v(" __plugin_author__")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("：str")]),t._v(" "),a("li",[a("strong",[t._v("说明")]),t._v("："),a("br"),t._v("\n插件作者")])]),t._v(" "),a("h2",{attrs:{id:"普通插件的一个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通插件的一个示例"}},[t._v("#")]),t._v(" 普通插件的一个示例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("__zx_plugin_name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b封面'")]),t._v("\n__plugin_usage__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage：\n    b封面 [链接/av/bv/cv/直播id]\n    示例：b封面 av86863038\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_des__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'快捷的b站视频封面获取方式'")]),t._v("\n__plugin_cmd__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b封面/B封面'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n__plugin_type__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一些工具'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_version__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n__plugin_author__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HibiKier'")]),t._v("\n__plugin_settings__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit_superuser"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b封面"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B封面'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"管理员插件的一个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理员插件的一个示例"}},[t._v("#")]),t._v(" 管理员插件的一个示例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("__zx_plugin_name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新群组成员列表 [Admin]"')]),t._v("\n__plugin_usage__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage：\n    更新群组成员的基本信息\n    指令：\n        更新群组成员列表/更新群组成员信息\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_des__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新群组成员列表'")]),t._v("\n__plugin_cmd__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新群组成员列表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n__plugin_version__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n__plugin_author__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HibiKier'")]),t._v("\n__plugin_settings__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin_level"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"超级用户插件的一个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超级用户插件的一个示例"}},[t._v("#")]),t._v(" 超级用户插件的一个示例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("__zx_plugin_name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"超级用户指令 [Superuser]"')]),t._v("\n__plugin_usage__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage：\n    超级用户集成指令\n    指令：\n        清理临时数据\n        重载插件配置\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_des__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"超级用户集成指令"')]),t._v("\n__plugin_cmd__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"清理临时数据"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"重载插件配置"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n__plugin_version__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n__plugin_author__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HibiKier"')]),t._v("\n")])])]),a("h2",{attrs:{id:"带有超级用户命令的管理插件示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带有超级用户命令的管理插件示例"}},[t._v("#")]),t._v(" 带有超级用户命令的管理插件示例")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("__zx_plugin_name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"封禁Ban用户 [Admin]"')]),t._v("\n__plugin_usage__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage：\n    将用户拉入或拉出黑名单\n    指令:\n        .ban [at] ?[小时] ?[分钟]\n        .unban \n        示例：.ban @user\n        示例：.ban @user 6\n        示例：.ban @user 3 10\n        示例：.unban @user\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_superuser_usage__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nusage：\n    屏蔽用户消息，相当于最上级.ban\n    指令：\n        b了 [at]\n        示例：b了 @user\n"""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n__plugin_des__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你被逮捕了！丢进小黑屋！'")]),t._v("\n__plugin_cmd__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.ban [at] ?[小时] ?[分钟]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.unban [at]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b了 [at] [_superuser]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n__plugin_version__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n__plugin_author__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HibiKier'")]),t._v("\n__plugin_settings__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin_level"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BAN_LEVEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);