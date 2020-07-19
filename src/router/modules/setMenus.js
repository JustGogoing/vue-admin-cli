import Layout from "@/Layout";

const setMenus = {
  path: "/set",
  component: Layout,
  redirect: "/set/index",
  meta: { title: "设置", icon: "el-icon-setting" },
  children: [
    {
      path: "index",
      name: "set",
      component: () => import(/* webpackChunkName: "set"  */ "@views/Set")
    }
  ]
};

export default setMenus;
