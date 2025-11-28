<script setup lang="ts">
const publicConfig = useRuntimeConfig().public

const name = publicConfig.name || '**璐'
const phone = publicConfig.phone || '133****9192'

useSeoMeta({
	title: `${name} - 游戏测试 & 前端开发实习`,
	description: `${name}的实习简历`,
	robots: 'noindex, nofollow',
})
</script>

<template>
<Builder class="block print:hidden" w="fit" m="is-auto x-1 y-.5" />
<article
	bg="white @dark:slate/10 print:transparent"
	p="6 print:x-2 print:y-0"
	text="3.7"
	tracking="wide"
	rounded="xl print:0"
>
	<h1 text="center" m="be-4">
		{{ name }}
	</h1>

	<ul columns="sm:2" p="is-0">
		<InfoLi icon="ri:smartphone-line" label="电话">
			{{ phone }}
		</InfoLi>

		<InfoLi icon="ri:mail-line" label="邮箱">
			<InfoLink to="mailto:chenshuaige998@foxmail.com" />
		</InfoLi>

		<InfoLi icon="ri:github-line" label="GitHub">
			<InfoLink to="https://github.com/CSBigCaptain">
				CSBigCaptain
			</InfoLink>
		</InfoLi>

		<InfoLi icon="mdi:web" label="个人网站">
			<InfoLink to="https://csbig.top">
				csbig.top
			</InfoLink>
		</InfoLi>

		<!-- <InfoLi icon="ri:men-line" label="性别">
			男
		</InfoLi> -->

		<InfoLi icon="ri:school-line" label="学校">
			山东理工大学 (食品科学与工程)
		</InfoLi>

		<InfoLi icon="ri:graduation-cap-line" label="学历">
			本科在读 (2027 届)
		</InfoLi>
	</ul>

	<InfoSection title="个人技能">
		<ul>
			<li>能够较熟练地使用 Vue 3、Nuxt 4 等 JavaScript 框架；熟悉常用的 UI 库如 Element Plus、Nuxt UI 等。</li>
			<li><strong>良好的沟通能力</strong>，能够跨团队高效协作，清晰表达技术方案与风险，善于倾听与及时反馈，推动项目进展。</li>
			<li><strong>有强烈的自驱力</strong>，主动制定学习与迭代计划、定期复盘；业余时间阅读官方文档了解学习新技术栈、输出技术笔记与博客。</li>
			<li>具有一定的代码能力，对 Python 有一定了解，能够使用 Django 框架构建简易博客后端 & 全栈功能。</li>
			<li>熟练使用 Git 版本控制，拥有良好的代码管理习惯。</li>
			<li>具备敏锐的用户需求感知能力，关注产品的用户体验与可访问性。</li>
			<li>善于运用 AI 工具提升开发效能，注重代码质量与兼容性实践。</li>
			<li>对摄影、视频制作、视频策划、直播导播等有一定的了解，熟练使用 OBS、哔哩哔哩直播姬、直播伴侣等直播软件以及 VoiceMeeter 等虚拟音频软件。</li>
		</ul>
	</InfoSection>

	<InfoSection title="项目经验">
		<Project
			name="CSBigCaptain Blog"
			desc="个人网站"
			role="创建者"
			link="https://github.com/CSBigCaptain/csbigcaptain.github.io"
			from="2024.08"
			:techs="['Nuxt', 'Vue 3', 'Material UI', 'VueUse', 'Less']"
		>
			<ul>
				<li>兼容 GitHub Pages，支持多个云构建平台的 SSR/SSG 功能。</li>
				<li>遵循 Material Design 设计，网站个性配色、深色模式体验、精校文字排版布局、设计风格简单清爽。</li>
				<li>支持 LaTeX 语法，提升数学公式和科学文档的展示效果。</li>
				<li>出色的 SEO 优化，网站经 PageSpeed Insights 评测表现优异，最佳做法和 SEO 部分均为满分。</li>
				<li>对静态资源与路由进行按需加载，首屏加载与交互延迟显著优化。</li>
			</ul>
		</Project>

		<Project
			name="youthol-exhibition"
			desc="山东理工大学辅导员风采栏目"
			role="核心开发者"
			link="https://fdy.youthol.com.cn/"
			from="2024.09"
			:techs="['Vue 3', 'Vite', 'TypeScript', 'VueUse', 'Element Plus']"
		>
			<ul>
				<li>使用 Element Plus UI，页面简洁清爽；智能深浅色模式，提升用户体验。</li>
				<li>前后端分离，前端网页打包体积轻巧，部署灵活；图片懒加载，提升加载效率。</li>
				<li>采用组件化与模块化设计，抽离业务逻辑与通用组件，提升复用性与可维护性。</li>
				<li>项目引入 TypeScript，提升代码质量与开发效率。</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="学生干部经历">
		<Project
			name="山东理工大学新闻网"
			desc="程序部部长"
			from="2025.06"
			to="2026.06 (预计)"
		>
			<ul>
				<li>负责网站的技术支持，使用 WebPlus Pro、博达全媒体平台等进行网站运维工作。</li>
				<li>对接学校多个重要部门及合作企业，为校党委、校发展规划处、计算机学院等单位开发十余个站点。</li>
			</ul>
		</Project>

		<Project
			name="山东理工大学新媒体工作室"
			desc="技术部部长"
			from="2025.06"
			to="2026.06 (预计)"
		>
			<ul>
				<li>拥有微信公众号运营经验，使用 E2 平台进行推文的 SVG 制作，协助学校官微发表十余篇推文。</li>
			</ul>
		</Project>

		<Project
			name="山东理工大学青春在线"
			desc="程序部副主任"
			from="2024.11"
			to="2025.11"
		>
			<ul>
				<li>组织使用 VitePress 整理建设部门培训文档。</li>
			</ul>
		</Project>
		<Project
			name="山东理工大学视频工作室"
			desc="干事"
			from="2023.11"
		>
			<ul>
				<li>协助学校党委宣传部老师录制新闻、校级省级会议、访学活动等。</li>
				<li>对剪映、Adobe Premiere Pro、Davenci Resolve 等视频编辑软件有一定了解。</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="个人证书">
		<ul>
			<li>CET-4</li>
			<li>第十六届蓝桥杯全国软件和信息技术专业人才大赛——山东省赛二等奖（C/C++ 方向 B 组）</li>
			<li>山东理工大学 2024 年度宣传报道先进个人</li>
		</ul>
	</InfoSection>
</article>
</template>
