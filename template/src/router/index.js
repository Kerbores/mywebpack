import Home from "@/components/Home.vue";
import Dashboard from '@/views/dashboard/Dashboard.vue'
export default [{
    path: "/",
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: "/",
    component: Home,
    name: "主页",
    leaf: true,
    iconCls: "el-icon-fa-dashboard", //图标样式class
    children: [{
      path: "/dashboard",
      iconCls: "el-icon-fa-dashboard",
      component: Dashboard,
      name: "Dashboard"
    }]
  }
]
