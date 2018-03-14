import Vue from 'vue'
import Router from 'vue-router'
const App = () => import ('@/App.vue')

const Index = () => import ('@/vuepage/index.vue')
// 登录
const Login = () => import('@/vuepage/login/login.vue')
// 收入分析
const IncomeList = () => import('@/vuepage/income_analysics/income_list.vue')
// 接单端管理
const CourierList = () => import('@/vuepage/take_order_manage/courier_list.vue')
const CourierApplyList = () => import('@/vuepage/take_order_manage/courier_apply_list.vue')
const CourierInfo = () => import('@/vuepage/take_order_manage/courier_info.vue')


// 商家端管理
const MerchantList = () => import('@/vuepage/merchant_manage/merchant_list.vue')
const RechargeRecord = () => import('@/vuepage/merchant_manage/recharge_record.vue')
const CheckDetail = () => import('@/vuepage/merchant_manage/check_detail.vue')
const ApplyList = () => import('@/vuepage/merchant_manage/apply_list.vue')
const ApplyDetail = () => import('@/vuepage/merchant_manage/apply_detail.vue')

// 订单管理
const OrderList = () => import('@/vuepage/order_manage/order_list.vue')
const UntakeOrder = () => import('@/vuepage/order_manage/untake_order.vue')
const AbnormalOrder = () => import('@/vuepage/order_manage/abnormal_order.vue')
const OrderDetail = () => import('@/vuepage/order_manage/order_detail.vue')

// 提现管理
const WithdrawManage = () => import('@/vuepage/withdraw_manage/withdraw_manage.vue')
const WithdrawDetail = () => import('@/vuepage/withdraw_manage/withdraw_detail.vue')

// 内容管理
const CommonQuestion = () => import('@/vuepage/content_manage/common_question.vue')
const AboutUs = () => import('@/vuepage/content_manage/about_us.vue')
const RuleManage = () => import('@/vuepage/content_manage/rule_manage.vue')

// 内容管理
const Server = () => import('@/vuepage/server/server.vue')

// 意见反馈
const ComplainList = () => import('@/vuepage/opinion_feedback/complain_list.vue')
const ComplainDetail = () => import('@/vuepage/opinion_feedback/complain_detail.vue')
const CommentDetail = () => import('@/vuepage/opinion_feedback/comment_detail.vue')

// 权限管理
const Authority = () => import('@/vuepage/authority/authority.vue')
// 计价规则
const CaculateRule = () => import('@/vuepage/caculate_rule/caculate_rule.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:App,
      children:[
        {
          path: '',
          redirect: '/Login'
        },
        {
          path: '/Login',
          component: Login
        },
        {
          path: '/Index',
          component: Index,
          children:[
            {
              path:'',
              redirect:'/IncomeList'
            },
            {
              path: '/IncomeList',
              component: IncomeList,
              meta: [{name:'收入分析',url:'IncomeList'},{name:'平台收入流水',url:'IncomeList'}]
            },
            {
              path: '/OrderDetail',
              component: OrderDetail
            },
            {
              path: '/OrderList',
              component: OrderList,
              meta: [{name:'订单管理',url:''},{name:'订单列表',url:''}]
            },
            {
              path: '/AbnormalOrder',
              component: AbnormalOrder,
              meta: [{name:'订单管理',url:''},{name:'异常订单',url:''}]
            },
            {
              path: '/UntakeOrder',
              component: UntakeOrder,
              meta: [{name:'订单管理',url:''},{name:'待接单订单',url:''}]
            },
            {
              path: '/CaculateRule',
              component: CaculateRule,
              meta: [{name:'计价规则',url:''},{name:'计价规则',url:''}]
            },
            {
              path: '/Server',
              component: Server,
              meta: [{name:'服务管理',url:''},{name:'服务类目管理',url:''}]
            },
            {
              path: '/WithdrawDetail',
              component: WithdrawDetail
            },
            {
              path: '/WithdrawManage',
              component: WithdrawManage,
              meta: [{name:'提现管理',url:''},{name:'小哥提现管理',url:''}]
            },
            {
              path: '/RuleManage',
              component: RuleManage,
              meta: [{name:'内容管理',url:''},{name:'规则管理',url:''}]
            },
            {
              path: '/CommonQuestion',
              component: CommonQuestion,
              meta: [{name:'内容管理',url:''},{name:'常见问题',url:''}]
            },
            {
              path: '/AboutUs',
              component: AboutUs,
              meta: [{name:'内容管理',url:''},{name:'关于我们管理',url:''}]
            },
            {
              path: '/CourierInfo',
              component: CourierInfo
            },
            {
              path: '/Authority',
              component: Authority,
              meta: [{name:'权限管理',url:''}]
            },

            {
              path: '/CourierApplyList',
              component: CourierApplyList,
              meta: [{name:'接单端管理',url:''},{name:'小哥申请列表',url:''}]
            },
            {
              path: '/CourierList',
              component: CourierList,
              meta: [{name:'接单端管理',url:''},{name:'小哥列表',url:''}]
            },
            {
              path: '/ApplyDetail',
              component: ApplyDetail
            },
            {
              path: '/ApplyList',
              component: ApplyList,
              meta: [{name:'商家端管理',url:''},{name:'申请列表',url:''}]
            },
            {
              path: '/ComplainDetail',
              component: ComplainDetail
            },
            {
              path: '/MerchantList',
              component: MerchantList,
              meta: [{name:'商家端管理',url:''},{name:'商家列表',url:''}]
            },
            {
              path: '/RechargeRecord',
              component: RechargeRecord
            },
            {
              path: '/ComplainList',
              component: ComplainList,
              meta: [{name:'意见反馈',url:''},{name:'投诉列表',url:''}]
            },
            {
              path: '/CommentDetail',
              component: CommentDetail
            },
            {
              path: '/CheckDetail',
              component: CheckDetail
            }
          ]
        }
      ]
    }


  ]
})
