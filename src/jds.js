var state = {
    current: 0, //页面索引
    company: 'sdd',  //填表单位
    fillFormUser: 'dsd',  //填表人
    contactNumber: 'sdd',  //联系电话
    workEmail: 'sdd',  //工作邮箱
    curDate: moment('2020-05-12', 'YYYY-MM-DD'),  //填表日期


    name: '',  //纪念馆名称
    createDate: moment('2020-05-12', 'YYYY-MM-DD'),  //成立日期
    place: [],  //馆址
    isIndependLegal_isTrue: 0,  //是否独立法人
    isIndependLegal_msg: '',  //是否独立法人
    contactorName: '',  //联络人姓名
    contactorPosition: '',  //联络人职务
    contactorDetails: '',  //联络人联系方式
    museumType_type: 0,  //纪念馆类型
    museumType_msg: '',
    museumNature: 0,  //纪念馆性质
    fundGuarantee_type: 0,  //经费保障形式
    fundGuarantee_msg: '',
    museumLevel: 0,  //纪念馆等级
    administrative_type: 0,  //行政级别
    administrative_msg: '',
    department_type: 0,  //归口部门
    department_msg: '',
    directLevel_type: 0,  //直管层级
    directLevel_msg: '',
    isFree: 0,  //是否免费开放


    visitorNum: '',  //近三年参观者
    culProtectNum_country: 0,  //文物保护单位数量
    culProtectNum_province: 0,
    culProtectNum_city: 0,
    culProtectNum_region: 0,
    culProtectNum_noLevel: 0,
    eduBase_isEdu: 0,   //是否爱国基地
    eduBase_eduLevel: 0,  //爱国基地层级
    eduBase_msg: '',  //爱国基地层级
    isBeauty: 0,  //是否国家级景区
    isRed: 0,  //是否红色景区
    Alevel: 0,  //A级景区
    summary: '',  //简介


    policy_isPolicy: 0,  //是否争取政策
    policy_policyNum: 0,  //政策数量
    plan_isInplan: 0,  //是否纳入规划
    plan_planNum: 0,  //规划数量
    funding_isGetFunding: 0,  //是否获得经费
    funding_fundingNum: 0,  //经费金额
    thirdPart_isTrue: 0,   //第三方机构合作
    thirdPart_type: [],
    thirdPart_msg: '',
    serviceNum: 0,  //志愿者服务时长
    volType_type: [],  //志愿者类型
    volType_msg: '',
    serviceType_type: [],  //服务类型
    serviceType_msg: '',
    externalExperts_isExternal: 0,  //是否外聘专家
    externalExperts_hire_num: 0,  //外聘专家人数
    isDonate: 0,  //是否社会捐赠
    meeting_country: '',  //全国会议数量
    meeting_province: '',  //省级会议数量
    activity_internation: '',  //国际活动数量
    activity_province: '',  //省际活动数量


    staff: '',  //在编员工
    staff_high: '',  //中高层
    staff_tech: '',  //专业技术人员
    establishment: '',  //额定编制
    est_mgr: '',  //管理岗
    est_tech: '',  //专业技术岗
    est_worker: '',  //工勤岗

    undergraduate: '',  //本科
    master: '',  //硕士
    doctor: '',  //博士
    under_5yr: '',  //从事时间5年以下
    bet_5_10yr: '',  //5-10年
    exc_10yr: '',  //10年以上
    positive: '',  //正高级
    deputySenior: '',  //副高级
    intermediate: '',  //中级
    junior: '',  //初级

    practitioners_2018: 2,  //从业人员
    practitioners_2019: 3,
    practitioners_2020: 5,
    guide_2018: '',  //讲解员
    guide_2019: 4,
    guide_2020: '',
    newGuide_2018: 0,  //新入职讲解员
    newGuide_2019: '',
    newGuide_2020: 5,
    resignGuide_2018: 2,  //离职讲解员
    resignGuide_2019: '',
    resignGuide_2020: '',

};

var stre = JSON.stringify(state)
console.log(stre)