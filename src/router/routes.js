import StartPage from "../views/StartPage";
import MainPage from "../views/MainPage";
import FinalPage from "../views/FinalPage";

export const routes = [
	{
		path: "",
		name: "startPage",
		component: StartPage,
	},
	{
		path: "/main",
		name: "mainPage",
		component: MainPage,
	},
	{
		path: "/final",
		name: "finalPage",
		component: FinalPage,
	},
];
