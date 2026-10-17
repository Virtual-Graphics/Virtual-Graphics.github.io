export interface Project {
	name: string;
	url: string;
	description: string;
	tags: string[];
}

export const orgUrl = "https://github.com/Virtual-Graphics";
export const tdsgUrl = "https://github.com/TDS-Graphics";

export const projects: Project[] = [
	{
		name: "MiniEngine",
		url: "https://github.com/Virtual-Graphics/MiniEngine",
		description:
			"一个非常 Mini 的游戏引擎。基于 OpenGL 4.6 构建，架构轻量、系统精简，将持续长期演进。",
		tags: ["C++", "OpenGL 4.6", "CMake", "MIT"],
	},
];
