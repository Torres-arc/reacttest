import './App.css';
import moment from 'moment';
import React, { useState } from 'react';
import getState from './modal'
import options from "./pro"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    Switch,
    Steps,
    Divider,
    Space,
    Row,
    Col,
    Checkbox,
    Anchor,
    InputNumber,
} from 'antd';

const { Step } = Steps;
const { Link } = Anchor;
const { TextArea } = Input;
class Demo extends React.Component {
    state = getState()

    name_arr = ['北京鲁迅博物馆（北京新文化运动纪念馆）', '香山革命纪念馆', '中国人民革命军事博物馆', '中国人民抗日战争纪念馆', '平津战役纪念馆', '周恩来邓颖超纪念馆', '八路军一二九师纪念馆', '乐亭县李大钊纪念馆', '晋察冀边区革命纪念馆', '唐山地震博物馆', '唐山抗震纪念馆', '西柏坡纪念馆', '中国人民抗日军政大学陈列馆', '八路军太行纪念馆', '大同红色记忆馆（大同市博物馆分馆）', '红军东征纪念馆', '梁思成纪念馆（大同市博物馆分馆）', '吕梁市晋绥边区革命纪念馆', '彭真生平暨中共太原支部旧址纪念馆', '魏碑书法家张霭堂故居纪念馆（大同市博物馆分馆）', '抚顺市雷锋纪念馆', '抗美援朝纪念馆', '辽沈战役纪念馆', '旅顺日俄监狱旧址博物馆', '沈阳“九·一八”历史博物馆', '东北抗日联军纪念馆（吉林省博物院）', '四平战役纪念馆', '伪满皇宫博物院', '北安市庆华军工遗址博物馆', '大庆铁人王进喜纪念馆', '东北烈士纪念馆（东北抗联博物馆、中共黑龙江历史纪念馆、革命领袖视察黑龙江纪念馆、东北抗联精神陈列馆）', '哈尔滨市侵华日军第七三一部队罪证陈列馆', '黑河旅俄华侨纪念馆', '黑河市瑷珲历史陈列馆', '侵华日军虎头要塞博物馆', '陈云纪念馆（青浦革命历史纪念馆）', '钱学森图书馆', '上海鲁迅纪念馆', '上海市龙华烈士纪念馆', '上海淞沪抗战纪念馆', '上海宋庆龄故居纪念馆', '上海孙中山故居纪念馆', '中共一大纪念馆', '渡江胜利纪念馆（南京市博物馆总馆分馆）', '淮海战役纪念馆', '江阴市刘氏兄弟故居陈列馆（隶属江阴市博物馆）', '茅山新四军纪念馆', '侵华日军南京大屠杀遇难同胞纪念馆', '太平天国历史博物馆（南京市博物总馆分馆）', '新四军纪念馆', '雨花台烈士纪念馆', '中共代表团梅园新村纪念馆（南京市博物总馆分馆）', '周恩来纪念馆', '南湖革命纪念馆（红船精神研究院）', '绍兴鲁迅纪念馆', '桐乡市茅盾纪念馆', '安庆市革命文物陈列馆（安庆博物馆）', '渡江战役纪念馆（安徽名人馆）管理处', '金寨县革命博物馆', '新四军军部旧址纪念馆（泾县云岭新四军军部旧址纪念馆）', '福建省革命历史纪念馆', '福州市林则徐纪念馆', '古田会议纪念馆', '毛泽东才溪乡调查纪念馆', '中央苏区（闽西）历史博物馆', '安源路矿工人运动纪念馆', '八大山人纪念馆', '方志敏纪念馆', '抚州市汤显祖纪念馆', '江西省革命烈士纪念堂', '井冈山革命博物馆', '九江市周敦颐纪念馆', '庐山会议旧址纪念馆', '南昌八一起义纪念馆', '南昌新四军军部旧址陈列馆', '瑞金中央革命根据地纪念馆', '上饶集中营革命烈士纪念馆', '修水县黄庭坚纪念馆', '于都中央红军长征出发地历史博物馆（原于都县博物馆（中央红军长征出发地纪念馆））', '中央苏区反“围剿”战争纪念馆', '华东革命烈士陵园', '华东野战军总部旧址暨新四军军部旧址纪念馆', '冀鲁豫边区革命纪念馆', '孔繁森同志纪念馆', '孔子博物馆', '孟良崮战役纪念馆', '蒲松龄纪念馆', '台儿庄大战纪念馆', '烟台市福山区王懿荣纪念馆', '沂蒙革命纪念馆', '沂蒙红嫂纪念馆', '沂蒙六姐妹纪念馆', '中国甲午战争博物院', '八路军驻洛办事处纪念馆', '鄂豫皖革命纪念馆', '鄂豫皖苏区首府革命博物馆', '兰考县焦裕禄纪念馆', '清丰县冀鲁豫边区革命根据地旧址纪念馆', '确山竹沟革命纪念馆', '郑州二七纪念馆', '东湖毛泽东故居陈列馆', '黄麻起义和鄂豫皖苏区革命纪念馆', '江汉关博物馆（武汉国民政府旧址纪念馆、詹天佑故居博物馆）', '空降兵军史馆', '彭德怀纪念馆', '屈原纪念馆', '武汉革命博物馆', '武汉市中山舰博物馆', '辛亥革命博物馆', '辛亥革命武昌起义纪念馆（辛亥革命研究所）', '“半条被子的温暖”专题陈列馆', '常德市丁玲纪念馆', '湖南党史陈列馆', '胡耀邦同志纪念馆', '刘少奇同志纪念馆', '毛泽东考察湖南农民运动纪念馆（醴陵市博物馆）', '秋收起义文家市会师纪念馆', '任弼时纪念馆', '韶山毛泽东同志纪念馆', '通道转兵纪念馆', '中国人民抗日战争胜利受降纪念馆', '东莞市鸦片战争博物馆', '广东革命历史博物馆(广州近代史博物馆)', '广州鲁迅纪念馆', '毛泽东同志主办农民运动讲习所旧址纪念馆', '孙中山大元帅府纪念馆', '孙中山故居纪念馆', '辛亥革命纪念馆', '叶挺独立团团部旧址纪念馆（肇庆市博物馆）', '百色起义纪念馆', '重庆红岩革命历史博物馆', '重庆三峡移民纪念馆（重庆市万州区博物馆）', '聂荣臻元帅陈列馆', '杨闇公杨尚昆旧居陈列馆', '陈毅纪念馆', '川陕苏区将帅碑林纪念馆', '邓小平故居陈列馆', '红四方面军总指挥部旧址纪念馆', '江油市李白纪念馆', '况场朱德旧居陈列馆（隶属泸州市博物馆）', '眉山三苏祠博物馆（眉山三苏纪念馆）', '内江市张大千纪念馆', '四川省建川博物馆', '“5·12”汶川特大地震映秀震中纪念馆', '5·12汶川特大地震纪念馆', '朱德同志故居纪念馆', '四渡赤水纪念馆', '遵义会议纪念馆', '艾思奇纪念馆', '玉溪市聂耳纪念馆（玉溪市博物馆）', '八路军西安办事处纪念馆', '交大西迁博物馆', '陕甘边革命根据地照金纪念馆', '西安事变纪念馆', '薛家寨革命旧址', '延安革命纪念馆', '延安杨家岭革命旧址管理处', '红军长征胜利纪念馆', '中国酒泉卫星发射中心历史展览馆', '南梁革命纪念馆', '中国工农红军西路军纪念馆', '将台堡红军长征会师纪念园']

    selectItem = () => {
        const ele = []
        for (const value of this.name_arr) {
            ele.push(<Option value={value}>{value}</Option>)
        }
        return (<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.selectChange}
            value={this.state.name}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >{ele}</Select>)
    }

    // state = {
    //     current: 0, //页面索引
    //     company: '',  //填表单位
    //     fillFormUser: '',  //填表人
    //     contactNumber: '',  //联系电话
    //     fixedNumber: '',  //固定电话
    //     workEmail: '',  //工作邮箱
    //     curDate: '',  //填表日期


    //     name: '',  //纪念馆名称
    //     createDate: '',  //成立日期
    //     place: [],  //馆址
    //     isIndependLegal_isTrue: 0,  //是否独立法人
    //     isIndependLegal_msg: '',  //是否独立法人
    //     contactorName: '',  //联络人姓名
    //     contactorPosition: '',  //联络人职务
    //     contactorDetails: '',  //联络人联系方式
    //     museumType_type: 0,  //纪念馆类型
    //     museumType_msg: '',
    //     museumNature: 0,  //纪念馆性质
    //     fundGuarantee_type: 0,  //经费保障形式
    //     fundGuarantee_msg: '',
    //     museumLevel: 0,  //纪念馆等级
    //     administrative_type: 0,  //行政级别
    //     administrative_msg: '',
    //     department_type: 0,  //归口部门
    //     department_msg: '',
    //     directLevel_type: 0,  //直管层级
    //     directLevel_msg: '',
    //     isFree: 0,  //是否免费开放


    //     visitorNum: '',  //近三年参观者
    //     culProtectNum_country: '',  //文物保护单位数量
    //     culProtectNum_province: '',
    //     culProtectNum_city: '',
    //     culProtectNum_region: '',
    //     culProtectNum_noLevel: '',
    //     eduBase_isEdu: 0,   //是否爱国基地
    //     eduBase_eduLevel: 0,  //爱国基地层级
    //     eduBase_msg: '',  //爱国基地层级
    //     isBeauty: 0,  //是否国家级景区
    //     isRed: 0,  //是否红色景区
    //     Alevel: 0,  //A级景区
    //     summary: '',  //简介


    //     policy_isPolicy: 0,  //是否争取政策
    //     policy_policyNum: '',  //政策数量
    //     plan_isInplan: 0,  //是否纳入规划
    //     plan_planNum: '',  //规划数量
    //     funding_isGetFunding: 0,  //是否获得经费
    //     funding_fundingNum: 0,  //经费金额
    //     thirdPart_isTrue: 0,   //第三方机构合作
    //     thirdPart_type: [],
    //     thirdPart_msg: '',
    //     serviceNum: 0,  //志愿者服务时长
    //     volType_type: [],  //志愿者类型
    //     volType_msg: '',
    //     serviceType_type: [],  //服务类型
    //     serviceType_msg: '',
    //     externalExperts_isExternal: 0,  //是否外聘专家
    //     externalExperts_hire_num: 0,  //外聘专家人数
    //     isDonate: 0,  //是否社会捐赠
    //     meeting_country: '',  //全国会议数量
    //     meeting_province: '',  //省级会议数量
    //     activity_internation: '',  //国际活动数量
    //     activity_province: '',  //省际活动数量
    //     staff: '',  //在编员工
    //     staff_high: '',  //中高层
    //     staff_tech: '',  //专业技术人员
    //     establishment: '',  //额定编制
    //     est_mgr: '',  //管理岗
    //     est_tech: '',  //专业技术岗
    //     est_worker: '',  //工勤岗

    //     undergraduate: '',  //本科
    //     master: '',  //硕士
    //     doctor: '',  //博士
    //     under_5yr: '',  //从事时间5年以下
    //     bet_5_10yr: '',  //5-10年
    //     exc_10yr: '',  //10年以上
    //     positive: '',  //正高级
    //     deputySenior: '',  //副高级
    //     intermediate: '',  //中级
    //     junior: '',  //初级
    //     practitioners_2018: '',  //从业人员
    //     practitioners_2019: '',
    //     practitioners_2020: '',
    //     guide_2018: '',  //讲解员
    //     guide_2019: '',
    //     guide_2020: '',
    //     newGuide_2018: '',  //新入职讲解员
    //     newGuide_2019: '',
    //     newGuide_2020: '',
    //     resignGuide_2018: '',  //离职讲解员
    //     resignGuide_2019: '',
    //     resignGuide_2020: '',
    //     isGuidStudy: 0,  //讲解员是否学习
    //     studyTimes: 0,  //年学习次数
    //     storageArea: '',  //库房面积
    //     storageFacility: [],  //库房设施
    //     storageFacility_msg: '',
    //     isInMgr: 0,  //是否专人管理
    //     showroomArea: '',  //展厅面积
    //     isAlarm: 0,  //是否有报警
    //     isSuitable: 0,  //是否适宜展品保护
    //     isFix: 0,  //是否有修复场所
    //     isFixFacility: 0,  //是否有修复设施
    //     securityType: 0,  //安防手段
    //     serviceFac: [],  //开放服务设施
    //     serviceFac_msg: '',  //开放服务设施
    //     isCulProduction: 0,  //是否文创产品
    //     CulProduction_num: '',
    //     perBusinessFund: 0,  //人均事业经费
    //     annualFund_2018: '',  //年度经费总额
    //     annualFund_2019: '',
    //     annualFund_2020: '',
    //     financialAllocation_2018: '',  //财政拨款收入
    //     superiorDubsidy_2018: '',  //上级补助收入
    //     handedInByAffiliatedUnits_2018: '',  //附属单位上缴
    //     bussinessIncome_2018: '',  //事业收入
    //     financialAllocation_2019: '',
    //     superiorDubsidy_2019: '',
    //     handedInByAffiliatedUnits_2019: '',
    //     bussinessIncome_2019: '',
    //     financialAllocation_2020: '',
    //     superiorDubsidy_2020: '',
    //     handedInByAffiliatedUnits_2020: '',
    //     bussinessIncome_2020: '',
    //     fundChannel: 0,  //经费来源渠道
    //     fundChannel_msg: '',
    //     isIntellectual: 0,  //是否智慧化建设
    //     intellectualSys: 0,  //智慧化系统
    //     intellectualDegree: 0,  //智慧化建设程度
    //     isDataCenter: 0,  //是否信息资料中心
    //     dataCenterNum: '',  //馆藏资料册数
    //     isDataBase: 0,  //是否数据库
    //     dataBasePlatform: [],  //数据库平台
    //     dataBasePlatform_msg: '',

    //     isLearnPublic: 0,  //是否定期组织学习党和国家领导人的重要指示批示
    //     partyMemberNum: '',  //党员人数
    //     isthird_one: 0,  //是否积极落实三会一课制度
    //     isCulAct: 0,  //是否定期开展组织文化活动
    //     culActTimes: 0,  //开展频率
    //     isActiveService: 0,  //是否积极主动服务党和国家重大决策部署
    //     departmentNum: '',  //中层部门数量
    //     isDepartRelics: 0,  //是否有专门的文物保管部
    //     isDepartExhbi: 0,  //是否有专门的陈列展览部
    //     isDepartSocial: 0,  //是否有专门的社会教育部
    //     isDepartStudy: 0,  //是否有专门的学术研究部
    //     isBylaws: '',  //纪念馆章程 
    //     isStandardFile: 0,  //纪念馆场馆运行标准化文件
    //     isAnnualPlan: 0,  //纪念馆年度工作计划
    //     isAnnualSummary: 0,  //纪念馆年度工作总结
    //     isLongPlan: 0,  //纪念馆中长期发展规划
    //     isAnnualPromote: 0,  //纪念馆年度宣传推广计划
    //     isAssessment: 0,  //纪念馆考核评价相关制度
    //     isServiceStandard: 0,  //纪念馆服务规范相关文件
    //     isFundManage: 0,  //纪念馆经费管理相关文件
    //     isHireSys: 0,  //纪念馆人员招聘、引进制度
    //     isEncourageSys: 0,  //纪念馆人员考核激励制度
    //     isTrain: 0,  //纪念馆人员培训制度  
    //     isRelicsSave: 0,  //纪念馆藏品安全管理制度
    //     isPublicSave: 0,  //纪念馆公共安全管理制度
    //     isRiskPlan: 0,  //纪念馆风险防控预案
    //     isPerformanceAppraisal: 0,  //纪念馆绩效考核制度
    //     isInfoOpen: 0,  //纪念馆信息公开制度
    //     isDepartCooperation: 0,  //纪念馆跨部门协作相关制度
    //     isRelicsManage: 0,  //文物管理相关制度
    //     isRelicsRange: 0,  //文物收藏范围相关文件
    //     isStoreManage: 0,  //库房管理制度
    //     isStoreSave: 0,  //库房安全制度
    //     isTechPlan: 0,  //科研计划
    //     isStudyReward: 0,  //科研成果奖励制度
    //     isStudyConfirm: 0,  //科研成果认定办法
    //     isExhibition: 0,  //策展工作相关规定
    //     isHallSave: 0,  //展厅维护工作规定
    //     isSocialEdu: 0,  //社会教育工作计划与方案
    //     isExplain: 0,  //讲解服务相关制度
    //     isLoveCountry: 0,  //爱国主义教育活动计划与方案
    //     isVolunteer: 0,  //志愿者招募、管理相关制度

    //     isLongTermPlan: 0,  //编制了符合自身定位的中长期发展规划
    //     planName: 0,  //规划名称
    //     isOpenToPublic: 0,  //发展规划向社会公布
    //     isAnnualRepot: 0,  //编制年度工作计划、年度报告
    //     isReportOpen: 0,  //工作计划、年度报告向社会公布
    //     isTrainPlan: 0,  //制定了系统完整的人才培训培养计划
    //     isTrainFund: 0,  //有稳定的培养经费
    //     isOrganizeStaffStudy: 0,  //定期组织工作人员进行学习
    //     isTalentIntroduction: 0,  //制定人才引进计划
    //     talentNum: '',  //近三年共引进人才数量
    //     introDoctor: '',  //博士学历
    //     introMaster: '',  //硕士学历
    //     introHigh: '',  //高级职称
    //     introProvince: '',  //拥有省级（含）以上荣誉称号的人才
    //     isHallLevel: 0,  //获得厅级人才称号或荣誉
    //     hallLevelNum: '',  //
    //     isProvinceLevel: 0,  //获得省级人才称号或荣誉
    //     provinceNum: '',  //
    //     isCountryLevel: 0,  //获得国家级人才称号或荣誉
    //     countryNum: '',  //
    //     isSatisfactionSurve: 0,  //定期开展观众满意度调查
    //     isSurveyReport: 0,  //形成观众满意度调查报告
    //     isSurveyReportOpen: 0,  //满意度调查报告及时向社会公开


    //     relicsNum: '',  //文物藏品数量
    //     relicsMoveableNum: '',  //可移动文物数量总数
    //     relicsMoveOne: '',  //可移动文物数量-一级文物
    //     relicsMoveTwo: '',  //可移动文物数量-二级文物
    //     relicsMoveThree: '',  //: 0,  //可移动文物数量-三级文物
    //     relicsUnmove: '',  //不可移动文物数量-总数
    //     relicsUnmoveCountry: '',  //不可移动文物数量-国家级文物
    //     relicsUnmoveProvince: '',  //不可移动文物数量-省级文物
    //     relicsUnmoveCity: '',  //不可移动文物数量-市级文物
    //     relicsOrigin: '',  //藏品原件数量
    //     relicsCopy: '',  //复制品数量
    //     isClassify: 0,  //是否分类保护
    //     isDivideByRoom: 0,  //是否分库保护
    //     isFixPeople: 0,  //是否有藏品保护修复资质的人员
    //     isFixEquip: 0,  //是否有专门的文物修复场所、设施设备
    //     isRelicsCollect: 0,  //是否有藏品征集计划
    //     relicsCollectName: '',  //藏品征集计划名称
    //     annualRelicsAdd_2018: '',  //年度新增藏品
    //     annualRelicsFix_2018: '',  //年度修复文物
    //     annualRelicsCollect_2018: '',  //年度征集藏品
    //     annualRelicsAdd_2019: '',  //
    //     annualRelicsFix_2019: '',  //
    //     annualRelicsCollect_2019: '',  //
    //     annualRelicsAdd_2020: '',  //
    //     annualRelicsFix_2020: '',  //
    //     annualRelicsCollect_2020: '',  //
    //     isrelicsDatabase: 0,  //是否建设文物藏品数据库
    //     relicsDatabaseName: '',  //数据库名称
    //     infoInDatabase: '',  //藏品信息采集比例
    //     databaseFunction: [],  //数据库功能
    //     databaseFunction_msg: '',  //
    //     isDatabaseOpen: 0,  //文物藏品数据库是否对外开放
    //     annualAudience: '',  //近三年年平均参观人数
    //     hallAllArea: '',  //展厅总面积
    //     basicName: '',  //名称
    //     basicArea: '',  //展陈面积
    //     basicLine: '',  //展线长度
    //     isInteractive: 0,  //是否具有互动功能
    //     isExperience: 0,  //是否具有观众体验区
    //     isExhiAct: 0,  //是否开展展演活动
    //     recentChange: 0,  //基本陈列最近一次改陈距今
    //     isBasicNew: 0,  //陈列展览是否体系新时代内容
    //     temporaryExhi: '',  //临时展览总数
    //     tempAudience: '',  //临时展览参观者总数
    //     representExhiName: '',  //代表性临时展览名称
    //     isCloudExhi: 0,  //是否举办了云展览
    //     cloudExhiNum: '',  //云展览数量
    //     recentCloudUpdateTime: 0,  //云展览最近一次更新
    //     isBuildInternetHall: 0,  //是否建设了网络展厅
    //     internetHallNum: '',  //网络展厅数量
    //     recentInternetUpdateTime: '',  //网络展厅最近一次更新
    //     explainServiceType: [],  //讲解服务形式
    //     isStudyParty: 0,  //是否建设了学术委员会或部门
    //     studyPartyName: '',  //学术委员会或部门名称
    //     isStudyOrgnize: 0,  //是否建设了学术组织
    //     studyOrgnizeName: '',  //学术组织名称
    //     isNewClever: 0,  //是否建设了新型智库、决策咨询服务部门
    //     newCleverName: '',  //新型智库、决策咨询服务部门名称
    //     resultBooks: '',  //近三年研究成果-图书
    //     resultC: '',  //近三年研究成果-C刊论文
    //     resultCExpand: '',  //近三年研究成果-C扩论文
    //     resultCommonPaper: '',  //近三年研究成果-普通报刊论文
    //     resultNewspaper: '',  //近三年研究成果-日报报刊论文
    //     resultPatent: '',  //近三年研究成果-国家专利数量
    //     studyCSSCI: '',  //学术活动与刊物-CSSCI
    //     studyNormal: '',  //学术活动与刊物-普通刊物
    //     studyInner: '',  //学术活动与刊物-内部刊物
    //     studyInternationalMeet: '',  //学术活动与刊物-国际学术会议
    //     studyCountryMeet: '',  //学术活动与刊物-全国性学术会议
    //     studyProvinceMeet: '',  //学术活动与刊物-省级学术会议

    //     EduAct: 0,  //近三年各类教育活动
    //     isCombineSchool: 0,  //是否结合学校有关课程的教学内容，制订教育活动计划
    //     isPartyMemebrTrain: 0,  //是否开设党员干部培训班
    //     isLeadSchool: 0,  //是否开设干部学院
    //     isSpecialEdu: 0,  //是否为视障、听障等特殊群体提供专门教育服务
    //     isLongTermShare: [],  //是否与以下单位建立了共建共享长效机制
    //     isLongTermShare_msg: '',  //
    //     isPropagandaTeam: 0,  //是否建立专门的宣传团队
    //     propagandaTeamName: '',  //
    //     isBrand: 0,  //是否注册纪念馆品牌标识
    //     isOfficalWeb: 0,  //建设官方网站
    //     officalWebUrl: '',  //官方网站地址
    //     officalWebUpdateTime: 0,  //最近一次更新时间
    //     officalWebLanguage: [],  //网站支持语言
    //     officalWebLanguage_msg: 0,  //
    //     weibo_name: '',  //微博账号名称
    //     thePublic_name: '',  //公众号
    //     douyin_name: '',  //抖音
    //     op1_plat: '',
    //     op1_name: '',
    //     op1_date: '',
    //     op1_fans: '',
    //     op1_isOffical: '',
    //     op2_plat: '',
    //     op2_name: '',
    //     op2_date: '',
    //     op2_fans: '',
    //     op2_isOffical: '',
    //     op3_plat: '',
    //     op3_name: '',
    //     op3_date: '',
    //     op3_fans: '',
    //     op3_isOffical: 0,
    //     bili_name: '',  //B站
    //     weibo_date: '',  //开通日期
    //     thePublic_date: '',  //
    //     douyin_date: '',  //
    //     bili_date: '',  //
    //     weibo_fans: '',  //粉丝数量
    //     thePublic_fans: '',  //
    //     douyin_fans: '',  //
    //     bili_fans: '',  //
    //     weibo_isOffical: '',  //是否官方认证
    //     thePublic_isOffical: '',  //
    //     douyin_isOffical: '',  //
    //     bili_isOffical: '',  //    
    //     isRelicsService: 0,  //是否提供藏品利用与科研服务
    //     provideService: [],  //提供服务
    //     provideService_msg: '',  //
    //     objectOriented: [],  //面向对象包括
    //     objectOriented_msg: '',  //
    //     provideForAct: 0,  //为其他单位开展活动提供空间场所或平台
    //     perYearOpen: '',  //每年开放天数
    //     isNight: 0,  //是否开放夜场
    //     perWeekClose: '',  //每周闭馆日
    //     isCloseDiffer: 0,  //闭馆时间是否与其他馆错开


    //     isProvinceOrg: '',  //纪念馆是否为省级行业组织理事单位、主任单位
    //     provinceOrgName: '',  //
    //     isLeaderInProvince: 0,  //纪念馆专家或领导在省级行业组织中担任重要职务或成为专家委员会成员
    //     leaderName1: '',  //
    //     orgName1: '',  //
    //     leaderName2: '',  //
    //     orgName2: '',  //
    //     leaderName3: '',  //
    //     orgName3: '',  //
    //     isProvinceVisit: 0,  //近三年纪念馆接受省部级领导调研参观
    //     isCountryVisit: 0,  //近三年纪念馆接受国家领导调研参观
    //     provinceRewardsNum: '',  //近三年获得省级荣誉
    //     provinceRewardsName: '',  //
    //     countryRewardsNum: '',  //近三年获得国家级荣誉
    //     countryRewardsName: '',  //
    //     audience_2018: '',  //近三年参观人数
    //     teen_2018: '',  //近三年免费接待青少年人数
    //     party_2018: '',  //近三年免费接待党员干部人数
    //     audience_2019: '',  //
    //     teen_2019: '',  //
    //     party_2019: '',  //
    //     audience_2020: '',  //
    //     teen_2020: '',  //
    //     party_2020: '',  //
    //     provinceMedia: '',  //近三年受到省主流媒体宣传
    //     provinceMediaName: '',  //
    //     centerMedia: '',  //近三年受到中央主流媒体宣传
    //     centerMediaName: '',  //

    // };

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
        window.scrollTo(0, 0)
    };
    ondevalueChange = e => {
        console.log('radio checked', e, e.target.value);

        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    checkboxChange = (e, key) => {
        console.log('box checked', e, key);
        this.setState({
            [key]: e,
        });
    };
    nextChange = () => {
        console.log('nextChange:');
        this.setState({ current: (this.state.current + 1) })
        window.scrollTo(0, 0)
    }
    completeChange = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/set_state",
            data: { data: JSON.stringify(this.state) },
            dataType: "JSON",
            contentType: "application/x-www-form-urlencoded",
        });
        alert('已保存成功，请将文件夹中的state.json文件发送至中心邮箱：ctti.nju.edu.cn')
    }

    debounce(fn, wait) {
        var timer = null;
        return function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(fn, wait);
        }
    }

    onDeepChange = e => {
        console.log('deep', e)
        var key = e.target.name
        var value = e.target.value
        var dic = { [key]: value }
        if (e.target.nodeName === "INPUT") {
            this.onFormLayoutChange(dic, true)
        }
        else {
            this.onFormLayoutChange(dic)
        }

    }
    selectChange = e => {
        console.log('deep', e)
        var dic = { ['name']: e }

        this.onFormLayoutChange(dic)
    }

    timeoutflag = null;
    onFormLayoutChange = (e, tyoe = false) => {
        console.log('onFormLayoutChange:', e, tyoe);
        for (var key in e) {
            var value = e[key]
            console.log('22', key, value)
            this.setState(
                {
                    [key]: value
                },
            )
        }
        if (tyoe === true) {
            console.log('123')

            if (this.timeoutflag != null) {
                console.log('timeout', this.timeoutflag)
                clearTimeout(this.timeoutflag);
            }
            this.timeoutflag = setTimeout(function () {
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/set_state",
                    data: { data: JSON.stringify(e) },
                    dataType: "JSON",
                    contentType: "application/x-www-form-urlencoded",
                });
            }, 500);
        }
        else {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/set_state",
                data: { data: JSON.stringify(e) },
                dataType: "JSON",
                contentType: "application/x-www-form-urlencoded",
            });
        }
    };

    setLabel = (title, msg) => {
        return (
            <>
                <span>
                    {title}
                </span><br />
                <span style={{ color: 'grey', fontWeight: '400', fontSize: '15px' }}>{msg}</span>
            </>
        )
    }

    addItem = (name, ) => {
        return (
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    fieldKey={[fieldKey, 'first']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    fieldKey={[fieldKey, 'last']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                >
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        )
    }

    render() {
        // console.log(JSON.stringify(this.state))
        const current = this.state.current;
        if (current === 0) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="form">
                        <Form
                            validateMessages={this.validateMessages}
                            colon="true"
                            ref={this.formRef}
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <Form.Item name="company" label="填表单位：">
                                <span></span><Input name="company" onChange={this.onDeepChange} value={this.state.company} />
                            </Form.Item><Divider />
                            <Form.Item name="fillFormUser" label="填表人：">
                                <span></span><Input name="fillFormUser" onChange={this.onDeepChange} value={this.state.fillFormUser} />
                            </Form.Item><Divider />
                            <Form.Item name="contactNumber" label="联系电话：" rules={[{ pattern: new RegExp('^[1][3,4,5,7,8][0-9]{9}$'), message: '请输入正确的手机号码!' }]}>
                                <Input name="contactNumber" onChange={this.onDeepChange} value={this.state.contactNumber} />
                            </Form.Item><Divider />
                            <Form.Item name="fixedNumber" label="固定电话：" rules={[{ pattern: new RegExp('^0[0-9]{2,3}-?[0-9]{8}$'), message: '请输入正确的固定电话号码! 例：025-88888888' }]}>
                                <Input name="fixedNumber" onChange={this.onDeepChange} value={this.state.fixedNumber} />
                            </Form.Item><Divider />
                            <Form.Item name="workEmail" label="工作邮箱：">
                                <span></span><Input name="workEmail" onChange={this.onDeepChange} value={this.state.workEmail} />
                            </Form.Item><Divider />
                            <Form.Item id="filldate" name="curDate" label="填表日期：" format="YYYY-MM-DD">
                                <DatePicker defaultValue={moment()} placeholder="请选择日期" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>

                </>
            );

        }
        else if (this.state.current === 1) {

            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="form">
                        <Form
                            labelCol={{
                                span: 32,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={
                                this.state
                            }
                            onValuesChange={this.onFormLayoutChange}
                            size="large"
                        >
                            <div id="memoryname" />
                            <Form.Item name="name" label={this.setLabel('1.纪念馆全称：', '应规范填写纪念馆全称')}>
                                <this.selectItem />
                            </Form.Item><Divider />
                            <Form.Item name="createDate" label="2.成立时间：">
                                <DatePicker picker="month" defaultValue={moment()} placeholder="请选择日期" />
                            </Form.Item><Divider />
                            <Form.Item name="place" label="3.馆址：">
                                <Cascader
                                    placeholder="请选择省市"
                                    options={options}
                                />
                            </Form.Item><Divider />
                            <Form.Item name="isIndependLegal_isTrue" label="4.是否为独立法人单位：">
                                <Radio.Group name="isIndependLegal_isTrue"
                                    value={this.state.isIndependLegal_isTrue} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>否</Radio>
                                    <Radio value={2}>
                                        是
                                        {this.state.isIndependLegal_isTrue === 2 ? <Input name="isIndependLegal_msg" onChange={this.onDeepChange} value={this.state.isIndependLegal_msg}
                                            placeholder="请输入法人代表" style={{
                                                width: 100,
                                                marginLeft: 10
                                            }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            {/* <Form.Item label="5.联络人：">
                                <Row>
                                    <Col span={8}>姓名：<Input style={{ width: 150 }} name="contactorName" onChange={this.onDeepChange} value={this.state.contactorName} placeholder="请输入姓名" /></Col>
                                    <Col span={8}>职务：<Input style={{ width: 150 }} name="contactorPosition" onChange={this.onDeepChange} value={this.state.contactorPosition} placeholder="请输入职务" /></Col>
                                    <Col span={8}>联系方式：<Input style={{ width: 150 }} name="contactorDetails" onChange={this.onDeepChange} value={this.state.contactorDetails} placeholder="请输入联系方式" /></Col>
                                </Row>
                            </Form.Item><Divider /> */}
                            <div id="memorytype" />
                            <Form.Item name="museumType_type" label="6.纪念馆类型（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">名人纪念馆</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">革命纪念馆</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">遗址型纪念馆（旧址、故居）</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">事件纪念馆</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">历史纪念馆</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">陵园墓地型纪念馆</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="7">其他</Checkbox>
                                            {this.state.museumType_type.includes('7') ?
                                                <Input name="museumType_msg" onChange={this.onDeepChange} value={this.state.museumType_msg} placeholder="请输入"
                                                    style={{ width: 120, height: 30, marginLeft: 10 }} />
                                                : null}</Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="museumNature_type" label="7.纪念馆性质：">
                                <Radio.Group name="museumNature_type" value={this.state.museumNature_type} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>公益一类</Radio>
                                    <Radio value={2}>公益二类</Radio>
                                    <Radio value={3}>国有</Radio>
                                    <Radio value={4}>非国有</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="fundGuarantee_type" label="8.经费保障形式：">
                                <Radio.Group name="fundGuarantee_type"
                                    value={this.state.fundGuarantee_type} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>全额拨款</Radio>
                                    <Radio value={2}>差额拨款</Radio>
                                    <Radio value={3}>自收自支</Radio>
                                    <Radio value={4}>
                                        其他
                                        {this.state.fundGuarantee_type === 4 ? <Input name="fundGuarantee_msg" onChange={this.onDeepChange} value={this.state.fundGuarantee_msg} placeholder="请输入" style={{
                                            width: 120,
                                            height: 30,
                                            marginLeft: 10
                                        }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="museumLevel" label="9.纪念馆级别：">
                                <Radio.Group name="museumLevel"
                                    value={this.state.museumLevel} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>一级馆</Radio>
                                    <Radio value={2}>二级馆</Radio>
                                    <Radio value={3}>三级馆</Radio>
                                    <Radio value={4}>无级别</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="administrative_type" label="10.行政级别：">
                                <Radio.Group name="administrative_type"
                                    value={this.state.administrative_type} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>副部级</Radio>
                                    <Radio value={2}>正局（厅）级</Radio>
                                    <Radio value={3}>副局（厅）级</Radio>
                                    <Radio value={4}>正处级</Radio>
                                    <Radio value={5}>副处级</Radio>
                                    <Radio value={6}>科级</Radio>
                                    <Radio value={7}>无行政级别</Radio>
                                    <Radio value={8}>高校系统</Radio>
                                    <Radio value={9}>
                                        其他
                                        {this.state.administrative_type === 8 ? <Input name="administrative_msg" onChange={this.onDeepChange} value={this.state.administrative_msg} placeholder="请输入" style={{
                                            width: 120,
                                            height: 30,
                                            marginLeft: 10
                                        }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="department_type" label="11.归口部门：">
                                <Radio.Group name="department_type"
                                    value={this.state.department_type} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>宣传部门</Radio>
                                    <Radio value={2}>文旅部门</Radio>
                                    <Radio value={3}>退役军人事务部门</Radio>
                                    <Radio value={4}>民政部门</Radio>
                                    <Radio value={5}>园林部门</Radio>
                                    <Radio value={6}>建设部门</Radio>
                                    <Radio value={7}>部队系统</Radio>
                                    <Radio value={8}>市政府直属事业单位</Radio>
                                    <Radio value={9}>
                                        其他
                                        {this.state.department_type === 9 ? <Input name="department_msg" onChange={this.onDeepChange} value={this.state.department_msg} placeholder="请输入" style={{
                                            width: 120,
                                            height: 30,
                                            marginLeft: 10
                                        }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            {/* <Form.Item name="directLevel_type" label="12.直管层级：">
                                <Radio.Group name="directLevel_type"
                                    value={this.state.directLevel_type} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>中央直属</Radio>
                                    <Radio value={2}>省级管理</Radio>
                                    <Radio value={3}>地市级管理</Radio>
                                    <Radio value={4}>区县级管理</Radio>
                                    <Radio value={5}>
                                        其他
                                        {this.state.directLevel_type === 5 ? <Input name="directLevel_msg" onChange={this.onDeepChange} value={this.state.directLevel_msg} placeholder="请输入" style={{
                                            width: 120,
                                            height: 30,
                                            marginLeft: 10
                                        }} /> : null}
                                    </Radio>
                                </Radio.Group>
                            </Form.Item><Divider /> */}
                            <div id="isfree" />
                            <Form.Item name="isFree" label="12.是否免费开放：">
                                <Radio.Group name="isFree" value={this.state.isFree}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            {/* <Form.Item label="14.参观者人次：">
                                <Space direction="horizontal" align="baseline">近三年累计接待参观者人次(万人次)：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="visitorNum"><Input name="visitorNum" value={this.state.visitorNum} onChange={this.onDeepChange} style={{ width: 160 }} /></Form.Item></Space>
                            </Form.Item><Divider /> */}
                            <Form.Item label={this.setLabel("13.文物保护单位数量：", '请根据纪念馆实际情况填写阿拉伯数字。文物保护单位包括全国重点文物保护单位、省级文物保护单位和市县级文物保护单位')}><Space direction="horizontal" align="baseline">
                                <span>国家级：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="culProtectNum_country"><Input name="culProtectNum_country" value={this.state.culProtectNum_country} onChange={this.onDeepChange}
                                    style={{ width: 80 }} /></Form.Item><span> 处</span>
                                <span>省级：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="culProtectNum_province"><Input name="culProtectNum_province" value={this.state.culProtectNum_country} onChange={this.onDeepChange}
                                    style={{ width: 80 }} /></Form.Item><span> 处</span>
                                <span>市级：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="culProtectNum_city"><Input name="culProtectNum_city" value={this.state.culProtectNum_country} onChange={this.onDeepChange}
                                    style={{ width: 80 }} /></Form.Item><span> 处</span>
                            </Space><Space direction="horizontal" align="baseline">
                                    <span>县区级：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="culProtectNum_region"><Input name="culProtectNum_region" value={this.state.culProtectNum_country} onChange={this.onDeepChange}
                                        style={{ width: 80 }} /></Form.Item><span> 处</span>
                                    <span>无级别：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="culProtectNum_noLevel"><Input name="culProtectNum_noLevel" value={this.state.culProtectNum_country} onChange={this.onDeepChange}
                                        style={{ width: 80 }} /></Form.Item><span> 处</span>

                                </Space>
                            </Form.Item><Divider />
                            <Form.Item name="eduBase_isEdu" label={this.setLabel("14.爱国主义教育基地：", '请根据纪念馆实际情况选择，若填表单位是“县（区）级及以上爱国主义教育基地的，需要填写“爱国主义教育基地层级”栏目')}>
                                <Radio.Group name="eduBase_isEdu" value={this.state.eduBase_isEdu}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.eduBase_isEdu === 1 ?
                                <Form.Item name="eduBase_eduLevel" label="14.1.爱国主义教育基地层级（选择最高层级）：">
                                    <Radio.Group name="eduBase_eduLevel" value={this.state.eduBase_eduLevel} style={{ marginLeft: 10 }}>
                                        <Radio value={1}>全国示范基地</Radio>
                                        <Radio value={2}>省级基地</Radio>
                                        <Radio value={3}>市级基地</Radio>
                                        <Radio value={4}>市级基地</Radio>
                                        <Radio value={5}>县（区）级基地</Radio>
                                        <Radio value={6}>
                                            其他
                                            {this.state.eduBase_eduLevel === 6 ? <Input name="eduBase_msg" value={this.state.eduBase_msg} onChange={this.onDeepChange} placeholder="请输入" style={{
                                                width: 120,
                                                height: 30,
                                                marginLeft: 10
                                            }} /> : null}
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item> : null}<Divider />
                            <Form.Item name="isbeauty" label="15.国家级风景名胜区：">
                                <Radio.Group
                                    value={this.state.isbeauty} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isred" label="16.红色旅游经典景区：">
                                <Radio.Group value={this.state.isred}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="Alevel" label="17.A级旅游景区：">
                                <Radio.Group value={this.state.Alevel}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>AAAAA级旅游景区</Radio>
                                    <Radio value={2}>AAAA级旅游景区</Radio>
                                    <Radio value={3}>AAA级旅游景区</Radio>
                                    <Radio value={4}>AA级旅游景区</Radio>
                                    <Radio value={5}>A级旅游景区</Radio>
                                    <Radio value={6}>无</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="summary" label="简介：">
                                <span className="show">后期将会用于纪念馆百佳榜小传介绍，宜突出地方特色和工作亮点，具体内容可参照如下要求填写：<br />
                                    第一部分：管理运行情况，包括但不仅限于党建、组织文化、组织架构、制度建设等方面。简述本馆如何贯彻落实党和国家领导人的指示批示和重要文件精神，进行自身组织文化和团队氛围建设，在实际工作中践行使命担当。<br />
                                    第二部分：业务活动情况，包括但不仅限于展陈、社会教育、宣传、文创等方面。简述本馆的特色业务活动及擅长的领域。<br />
                                    第三部分：社会影响和社会效益情况，包括但不仅限于本馆特色、现状、取得成就等方面。简述纪念馆在行业内部产生示范与引领作用的情况，包括获得相关荣誉奖项、在网络平台的传播情况和受主流媒体的宣传推荐情况。</span>
                                <TextArea name="summary" value={this.state.summary} onChange={this.onDeepChange} autoSize={{ minRows: 2, maxRows: 18 }} showCount maxLength={1000} />
                            </Form.Item>
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>
                </>
            );
        }
        else if (this.state.current === 2) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="form">
                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <Form.Item name="policy_isPolicy" label="1.主动争取上级部门为本馆建设发展出台的相关政策文件：">
                                <span className="show">指纪念馆主动争取上级部门为本馆建设发展出台的相关政策文件和本馆建设发展被列入上级部门工作计划、规划的文件<br /></span>
                                <Radio.Group name="policy_isPolicy" onChange={this.onDeepChange}
                                    value={this.state.policy_isPolicy} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.policy_isPolicy === 1 ? <Form.Item name="policy_policyNum" label="1.1.政策数量：">
                                <Radio.Group
                                    value={this.state.policy_policyNum} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>5个以下</Radio>
                                    <Radio value={2}>5-10个</Radio>
                                    <Radio value={3}>11-15个</Radio>
                                    <Radio value={4}>15以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="plan_isInplan" label="2.本馆建设发展是否被列入上级部门工作计划、规划：">
                                <Radio.Group
                                    value={this.state.plan_isInplan} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.plan_isInplan === 1 ? <Form.Item name="plan_planNum" label="2.1.规划数量：">
                                <Radio.Group
                                    value={this.state.plan_planNum} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>5个以下</Radio>
                                    <Radio value={2}>5-10个</Radio>
                                    <Radio value={3}>11-15个</Radio>
                                    <Radio value={4}>15以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="funding_isGetFunding" label={this.setLabel('3.2018-2020年积极申请各类专项经费用于场馆建设与发展：', '指2018-2020年纪念馆向财政部门、主管部门、上级单位、归属的独立核算单位申请到的各类建设、发展经费')}>
                                <Radio.Group
                                    value={this.state.funding_isGetFunding} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.funding_isGetFunding === 1 ? <Form.Item name="funding_fundingNum" label="3.1经费金额：">
                                <Radio.Group
                                    value={this.state.funding_fundingNum} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>50（含）万以下</Radio>
                                    <Radio value={2}>50-100万</Radio>
                                    <Radio value={3}>100万以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="thirdPart_isTrue" label={this.setLabel("4.是否与第三方机构建立长效合作机制：", '指纪念馆与高校、科研院所、新闻媒体、科技公司、专业艺术机构、后勤服务企业等建立长期友好合作关系')}>
                                <Radio.Group
                                    value={this.state.thirdPart_isTrue} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.thirdPart_isTrue === 1 ? <Form.Item name="thirdPart_type" label="4.1.与第三方机构建立长效合作机制情况（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">科研院所</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">高校</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">新闻媒体</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">科技公司</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">专业艺术机构</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">后勤服务企业</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="7">其他</Checkbox>

                                            {this.state.thirdPart_type.includes('7') ?
                                                <Input name="thirdPart_msg" onChange={this.onDeepChange} value={this.state.thirdPart_msg} placeholder="请输入"
                                                    style={{ width: 120, height: 30, marginLeft: 10 }} />
                                                : null}</Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="serviceNum" label="5.每位志愿者提供年平均服务时长：">
                                <Radio.Group
                                    value={this.state.serviceNum} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>30小时以下</Radio>
                                    <Radio value={2}>30-50小时</Radio>
                                    <Radio value={3}>50小时以上</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="volType_type" label="6.志愿者队伍构成（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="A">学生</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="B">在职或已离退休地方党政领导同志</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="C">知名企业家</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="D">社会公众人物</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="E">其他</Checkbox>
                                        </Col>
                                        {this.state.volType_type.includes('E') ?
                                            <Col span={8}> <Input name="volType_msg" onChange={this.onDeepChange} value={this.state.volType_msg} placeholder="请输入" style={{ width: 150 }} />
                                            </Col> : null}
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="serviceType_type" label="7.志愿服务类型（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">场馆讲解</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">文物保护</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">文化宣讲</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">其他</Checkbox>
                                        </Col>
                                        {this.state.serviceType_type.includes('4') ?
                                            <Col span={8}> <Input name="serviceType_msg" onChange={this.onDeepChange} value={this.state.serviceType_msg} placeholder="请输入" style={{ width: 150 }} />
                                            </Col> : null}
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="externalExperts_isExternal" label={this.setLabel("8.是否外聘专家：", '指纪念馆长期聘用的、为本馆建设发展提供顾问咨询服务和指导建议的相关领域资深专家')}>
                                <Radio.Group value={this.state.externalExperts_isExternal}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.externalExperts_isExternal === 1 ? <Form.Item name="externalExperts_hire_num" label="8.1.外聘专家人数">
                                <Radio.Group
                                    value={this.state.externalExperts_hire_num} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>50（含）万以下</Radio>
                                    <Radio value={2}>50-100万</Radio>
                                    <Radio value={3}>100万以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="isDonate" label={this.setLabel("9.是否接受社会捐赠：", '指纪念馆实际收到包括自然人、法人或其他社会团体无偿赠送的物资（含文物）数量与赠款的金额。“稳定的社会捐赠”指纪念馆至少三年内有定期收到捐赠的记录')}>
                                <Radio.Group name="isDonate" onChange={this.onDeepChange}
                                    value={this.state.isDonate} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>有稳定的社会捐赠</Radio>
                                    <Radio value={2}>不定期获得社会捐赠</Radio>
                                    <Radio value={3}>无社会捐赠</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item label="10.近三年参与的行业会议："><Space direction="horizontal" align="baseline">
                                <span style={{ width: 50, marginLeft: 10 }}>全国性行业会议数量：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="meeting_country"><Input
                                    name="meeting_country" onChange={this.onDeepChange} value={this.state.meeting_country} style={{ width: 160 }} /></Form.Item></Space><Space direction="horizontal" align="baseline">
                                    <span style={{ width: 50, marginLeft: 10 }}>省级行业会议数量：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="meeting_province"><Input
                                        name="meeting_province" onChange={this.onDeepChange} value={this.state.meeting_province} style={{ width: 160 }} /></Form.Item>
                                </Space>
                            </Form.Item><Divider />
                            <Form.Item label="11.近三年组织参与的人才、藏品、教育、展览等合作交流活动："><Space direction="horizontal" align="baseline">
                                <span style={{ width: 50, marginLeft: 10 }}>省际交流活动数量：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="activity_province"><Input
                                    name="activity_province" onChange={this.onDeepChange} value={this.state.activity_province} style={{ width: 160 }} /></Form.Item></Space><Space direction="horizontal" align="baseline">
                                    <span style={{ width: 50, marginLeft: 10 }}>国际交流活动数量：</span><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="activity_internation"><Input
                                        name="activity_internation" onChange={this.onDeepChange} value={this.state.activity_internation} style={{ width: 160 }} /></Form.Item>
                                </Space>
                            </Form.Item>
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>

                </>
            );
        }
        else if (this.state.current === 3) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="anchor">
                        <Anchor>
                            <Link href="#top" title="标题" />
                            <Link href="#hallandstore" title="展厅与库房" />
                            <Link href="#infosys" title="信息系统与智慧化">

                            </Link>
                        </Anchor>
                    </div>
                    <div id="form">
                        <Form
                            labelCol={{
                                span: 8,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <div id="top" />
                            <Form.Item label="在编员工："><Space direction="horizontal" align="baseline">
                                目前共有在编员工：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="staff"><Input name="staff" onChange={this.onDeepChange} value={this.state.staff}
                                    style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名，
                                中高层管理人员：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="staff_high"><Input name="staff_high" onChange={this.onDeepChange} value={this.state.staff_high}
                                    style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名，</Space><Space direction="horizontal" align="baseline">
                                    专业技术人员：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="staff_tech"><Input name="staff_tech" onChange={this.onDeepChange} value={this.state.staff_tech}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名；
                                </Space>
                            </Form.Item><Divider />
                            <Form.Item label="额定编制："><Space direction="horizontal" align="baseline">
                                目前共有额定编制：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="establishment"><Input name="establishment" onChange={this.onDeepChange} value={this.state.establishment}
                                    style={{ width: 100 }} /></Form.Item> 个，
                                管理岗：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="est_mgr"><Input name="est_mgr" onChange={this.onDeepChange} value={this.state.est_mgr}
                                    style={{ width: 100 }} /></Form.Item> 个，</Space><Space direction="horizontal" align="baseline">
                                    专业技术岗：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="est_tech"><Input name="est_tech" onChange={this.onDeepChange} value={this.state.est_tech}
                                        style={{ width: 100 }} /></Form.Item> 个，
                                    工勤岗：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="est_worker"><Input name="est_worker" onChange={this.onDeepChange} value={this.state.est_worker}
                                        style={{ width: 100 }} /></Form.Item> 个；</Space>
                            </Form.Item><Divider />
                            <Form.Item label="中高层管理人员：">
                                <Row gutter={[0, 32]}>
                                    <Col ><Space direction="horizontal" align="baseline">本科学历：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="undergraduate"><Input name="undergraduate" onChange={this.onDeepChange} value={this.state.undergraduate}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名，
                                        硕士学历：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="master"><Input name="master" onChange={this.onDeepChange} value={this.state.master}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名，
                                        博士学历：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="doctor"><Input name="doctor" onChange={this.onDeepChange} value={this.state.doctor}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 名；</Space></Col>

                                    <Col ><Space direction="horizontal" align="baseline">
                                        从事纪念馆行业时间：5年以下：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="under_5yr"><Input name="under_5yr" onChange={this.onDeepChange} value={this.state.under_5yr}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人，
                                        5-10年：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="bet_5_10yr"><Input name="bet_5_10yr" onChange={this.onDeepChange} value={this.state.bet_5_10yr}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人，
                                        10年以上：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="exc_10yr"><Input name="exc_10yr" onChange={this.onDeepChange} value={this.state.exc_10yr}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人；</Space></Col>

                                    <Col><Space direction="horizontal" align="baseline">
                                        职称信息：正高级：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="positive"><Input name="positive" onChange={this.onDeepChange} value={this.state.positive}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人，
                                        副高级：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="deputySenior"><Input name="deputySenior" onChange={this.onDeepChange} value={this.state.deputySenior}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人，</Space><Space direction="horizontal" align="baseline">
                                            中级：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="intermediate"><Input name="intermediate" onChange={this.onDeepChange} value={this.state.intermediate}
                                                style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人；
                                            初级：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="junior"><Input name="junior" onChange={this.onDeepChange} value={this.state.junior}
                                                style={{ width: 100, marginLeft: 10 }} /></Form.Item> 人；</Space></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item label="年度从业人员统计：">
                                <Row gutter={[8, 8]} >
                                    <Col span={7} />
                                    <Col span={5}>2018年</Col>
                                    <Col span={5}>2019年</Col>
                                    <Col span={5}>2020年</Col>

                                    <Col span={7}>年度从业人员总数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="practitioners_2018"><Input name="practitioners_2018" onChange={this.onDeepChange} value={this.state.practitioners_2018}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="practitioners_2019"><Input name="practitioners_2019" onChange={this.onDeepChange} value={this.state.practitioners_2019}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="practitioners_2020"><Input name="practitioners_2020" onChange={this.onDeepChange} value={this.state.practitioners_2020}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>年度讲解员总数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="guide_2018"><Input name="guide_2018" onChange={this.onDeepChange} value={this.state.guide_2018}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="guide_2019"><Input name="guide_2019" onChange={this.onDeepChange} value={this.state.guide_2019}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="guide_2020"><Input name="guide_2020" onChange={this.onDeepChange} value={this.state.guide_2020}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>年度新入职讲解员总数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="newGuide_2018"><Input name="newGuide_2018" onChange={this.onDeepChange} value={this.state.newGuide_2018}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="newGuide_2019"><Input name="newGuide_2019" onChange={this.onDeepChange} value={this.state.newGuide_2019}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="newGuide_2020"><Input name="newGuide_2020" onChange={this.onDeepChange} value={this.state.newGuide_2020}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>年度离职讲解员总数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resignGuide_2018"><Input name="resignGuide_2018" onChange={this.onDeepChange} value={this.state.resignGuide_2018}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resignGuide_2019"><Input name="resignGuide_2019" onChange={this.onDeepChange} value={this.state.resignGuide_2019}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resignGuide_2020"><Input name="resignGuide_2020" onChange={this.onDeepChange} value={this.state.resignGuide_2020}
                                        style={{ width: 80, marginLeft: 10 }} /></Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item name="isGuidStudy" label="讲解员定期参加专业学习或培训：">
                                <Radio.Group
                                    value={this.state.isGuidStudy} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isGuidStudy === 1 ? <Form.Item name="studyTimes" label="年内培训次数：">
                                <Radio.Group
                                    value={this.state.studyTimes} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>1-3次</Radio>
                                    <Radio value={2}>4-6次</Radio>
                                    <Radio value={3}>6次以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <div id="hallandstore" />
                            <Form.Item name="storageArea" label="藏品库房："><Space direction="horizontal" align="baseline">
                                藏品库房面积为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="storageArea">
                                    <Input name="storageArea" onChange={this.onDeepChange} value={this.state.storageArea} style={{ width: 160 }} /></Form.Item> 平方米
                            </Space>
                            </Form.Item><Divider />
                            <Form.Item name="storageFacility" label="库房有以下设施（可多选）：">
                                <Checkbox.Group direction="vertical" style={{ width: '100%' }}>
                                    <Row gutter={[0, 16]}>
                                        <Col span={8}>
                                            <Checkbox value="1">出入口控制装置</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">报警设施</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">恒温</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">恒湿</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">防腐蚀</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">防霉变</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="7">除氧</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="8">防火</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="9">防盗</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="10">监控</Checkbox>
                                        </Col>
                                        <Col span={12}>
                                            <Checkbox value="11">其他</Checkbox>

                                            {this.state.storageFacility.includes('11') ?
                                                <Input name="storageFacility_msg" onChange={this.onDeepChange} value={this.state.storageFacility_msg} placeholder="请输入" style={{ width: 150 }} />
                                                : null}</Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isInMgr" label="库房是否专人管理：">
                                <Radio.Group
                                    value={this.state.isInMgr} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="showroomArea" label="展厅："><Space direction="horizontal" align="baseline">
                                展厅面积为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="showroomArea">
                                    <Input name="showroomArea" onChange={this.onDeepChange} value={this.state.showroomArea} style={{ width: 80 }} /></Form.Item> 平方米
                            </Space></Form.Item><Divider />
                            <Form.Item name="isAlarm" label="展柜安装防弹玻璃或设置报警装置：">
                                <Radio.Group value={this.state.isAlarm}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isSuitable" label="展柜微环境适宜展品保护：">
                                <Radio.Group value={this.state.isSuitable}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isFix" label="是否有藏品保护修复场所：">
                                <Radio.Group value={this.state.isFix}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isFixFacility" label="是否有藏品保护修复基本的设备：">
                                <Radio.Group value={this.state.isFixFacility}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="securityType" label="安防手段（可多选）：">
                                <Checkbox.Group value={this.state.securityType}
                                    style={{ marginLeft: 10 }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">人防</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">物防</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">技防</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="serviceFac" label="开放服务设施（可多选）：">
                                <Checkbox.Group direction="vertical" style={{ width: '100%' }}>
                                    <Row gutter={[0, 16]}>
                                        <Col span={8}>
                                            <Checkbox value="1">无障碍服务</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">餐饮设施</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">停车场</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">游客服务中心</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">文创产品销售</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">其他</Checkbox>
                                            {this.state.serviceFac.includes('6') ?
                                                <Input name="serviceFac_msg" onChange={this.onDeepChange} value={this.state.serviceFac_msg} placeholder="请输入" style={{ width: 150 }} />
                                                : null}</Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item name="isCulProduction" label="是否开发文创产品：">
                                <Radio.Group
                                    value={this.state.isCulProduction} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isCulProduction === 1 ?
                                <Space>数量为：<Input name="CulProduction_num" onChange={this.onDeepChange} value={this.state.CulProduction_num} placeholder="请输入" style={{ width: 80 }} /></Space>
                                : null}<Divider />
                            <Form.Item name="perBusinessFund" label="人均事业经费：">
                                <Radio.Group
                                    value={this.state.perBusinessFund} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>20万元（含）以上</Radio>
                                    <Radio value={2}>15万元（含）以上</Radio>
                                    <Radio value={3}>10万元（含）以上</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item label="年度经费统计（单位：万元）：">
                                <span className="show">经费收入总额按照实际总额填写，可以不是表格内数据的算数和。<br />
                                    “财政拨款收入”是指单位本年度从本级财政部门取得的财政拨款。<br />
                                    “上级补助收入”是指事业单位从主观部门和上级单位取得的非财政补助收入。<br />
                                    “附属单位上缴收入”是指事业单位附属独立核算单位按有关规定上缴的收入。<br />
                                    “事业收入”是指事业单位开展专业业务活动及其辅助活动取得的收入。</span>
                                <Row gutter={[8, 8]} >
                                    <Col span={7} />
                                    <Col span={5}>2018年</Col>
                                    <Col span={5}>2019年</Col>
                                    <Col span={5}>2020年</Col>

                                    <Col span={7}>年度经费总额</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualFund_2018"><Input name="annualFund_2018" onChange={this.onDeepChange} value={this.state.annualFund_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualFund_2019"><Input name="annualFund_2019" onChange={this.onDeepChange} value={this.state.annualFund_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualFund_2020"><Input name="annualFund_2020" onChange={this.onDeepChange} value={this.state.annualFund_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>财政拨款收入</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="financialAllocation_2018"><Input name="financialAllocation_2018" onChange={this.onDeepChange} value={this.state.financialAllocation_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="financialAllocation_2019"><Input name="financialAllocation_2019" onChange={this.onDeepChange} value={this.state.financialAllocation_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="financialAllocation_2020"><Input name="financialAllocation_2020" onChange={this.onDeepChange} value={this.state.financialAllocation_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>上级补助收入</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="superiorDubsidy_2018"><Input name="superiorDubsidy_2018" onChange={this.onDeepChange} value={this.state.superiorDubsidy_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="superiorDubsidy_2019"><Input name="superiorDubsidy_2019" onChange={this.onDeepChange} value={this.state.superiorDubsidy_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="superiorDubsidy_2020"><Input name="superiorDubsidy_2020" onChange={this.onDeepChange} value={this.state.superiorDubsidy_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>附属单位上缴收入</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="handedInByAffiliatedUnits_2018"><Input name="handedInByAffiliatedUnits_2018" onChange={this.onDeepChange} value={this.state.handedInByAffiliatedUnits_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="handedInByAffiliatedUnits_2019"><Input name="handedInByAffiliatedUnits_2019" onChange={this.onDeepChange} value={this.state.handedInByAffiliatedUnits_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="handedInByAffiliatedUnits_2020"><Input name="handedInByAffiliatedUnits_2020" onChange={this.onDeepChange} value={this.state.handedInByAffiliatedUnits_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>事业收入</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="bussinessIncome_2018"><Input name="bussinessIncome_2018" onChange={this.onDeepChange} value={this.state.bussinessIncome_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="bussinessIncome_2019"><Input name="bussinessIncome_2019" onChange={this.onDeepChange} value={this.state.bussinessIncome_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="bussinessIncome_2020"><Input name="bussinessIncome_2020" onChange={this.onDeepChange} value={this.state.bussinessIncome_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item name="fundChannel" label="经费来源渠道：">
                                <Checkbox.Group name="fundChannel"
                                    value={this.state.fundChannel} style={{ marginLeft: 10 }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">拨款</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">捐款</Checkbox>
                                        </Col>

                                        <Col span={8}>
                                            <Checkbox value="3">其他</Checkbox>
                                            {this.state.fundChannel.includes('3') ?
                                                <Input name="fundChannel_msg" onChange={this.onDeepChange} value={this.state.fundChannel_msg} placeholder="请输入"
                                                    style={{ width: 120, height: 30, marginLeft: 10 }} />
                                                : null}</Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <div id="infosys" />
                            <Form.Item name="isIntellectual" label="是否开展智慧化建设：">
                                <Radio.Group
                                    value={this.state.isIntellectual} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isIntellectual === 1 ? <Form.Item name="intellectualSys" label="智慧化管理系统（可多选）：">
                                <Checkbox.Group direction="vertical" style={{ width: '100%' }}>
                                    <Row gutter={[0, 16]}>
                                        <Col span={8}>
                                            <Checkbox value="1">智慧管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">安全和环境监测管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">办公自动化系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">建设文档、多媒体管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">文物保护修复管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">藏品综合管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="7">文物数据库管理系统</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="8">游客服务系统</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="intellectualDegree" label="智慧化建设程度：">
                                <Radio.Group
                                    value={this.state.intellectualDegree} style={{ marginLeft: 10 }}>
                                    <Space direction="vertical">
                                        <Radio value={1}>智慧化业务系统能够支持纪念馆管理、运行全流程</Radio>
                                        <Radio value={2}>初步搭建了智慧化业务系统，部分业务实现智慧化</Radio>
                                        <Radio value={3}>未开展业务、管理系统智慧化建设</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isDataCenter" label="是否建设图书馆资料室或信息资料中心：">
                                <Radio.Group
                                    value={this.state.isDataCenter} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isDataCenter === 1 ?
                                <Space>馆藏资料：<Input name="dataCenterNum" onChange={this.onDeepChange} value={this.state.dataCenterNum} placeholder="请输入" style={{ width: 80 }} /> 册</Space>
                                : null}<Divider />
                            <Form.Item name="isDataBase" label="是否使用电子数据库：">
                                <Radio.Group name="isDataBase" value={this.state.isDataBase}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isDataBase === 1 ?
                                <Form.Item name="dataBasePlatform" label="数据库平台（可多选）：">
                                    <Checkbox.Group direction="vertical" style={{ width: '100%' }}>
                                        <Row gutter={[0, 16]}>
                                            <Col span={8}>
                                                <Checkbox value="1">知网</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="2">维普</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="3">万方</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="4">其他</Checkbox>
                                                {this.state.dataBasePlatform.includes('4') ?
                                                    <Input name="dataBasePlatform_msg" onChange={this.onDeepChange}
                                                        value={this.state.dataBasePlatform_msg} placeholder="请输入" style={{ width: 150 }} />
                                                    : null}
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item> : null}<Divider />
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>

                </>
            );
        }
        else if (this.state.current === 4) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="anchor">
                        <Anchor>
                            <Link href="#top" title="标题" />
                            <Link href="#managerule" title="综合管理制度" />
                            <Link href="#workrule" title="业务工作制度" />
                            <Link href="#plan" title="发展规划" />

                        </Anchor>
                    </div>
                    <div id="form">
                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <div id="top" />
                            <Form.Item name="isLearnPublic" label="是否定期组织学习党和国家领导人的重要指示批示：">
                                <Radio.Group
                                    value={this.state.isLearnPublic} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="partyMemberNum"><Space direction="horizontal" align="baseline">
                                本馆党员人数为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="partyMemberNum">
                                    <Input name="partyMemberNum" onChange={this.onDeepChange} value={this.state.partyMemberNum} style={{ width: 80 }} /></Form.Item> 人；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isthird_one" label="是否积极落实三会一课制度：">
                                <Radio.Group
                                    value={this.state.isthird_one} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isCulAct" label="是否定期开展组织文化活动（例如文体比赛、组织团建等）：">
                                <Radio.Group
                                    value={this.state.isCulAct} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isCulAct === 1 ? <Form.Item name="culActTimes" label="开展频率：">
                                <Radio.Group
                                    value={this.state.culActTimes} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>每年1-3次</Radio>
                                    <Radio value={2}>每年4-6次</Radio>
                                    <Radio value={3}>每年7-9次</Radio>
                                    <Radio value={4}>每年10次及以上</Radio>
                                </Radio.Group>
                            </Form.Item> : null}<Divider />
                            <Form.Item name="isActiveService" label="是否积极主动服务党和国家重大决策部署（如主动配合党史学习、干部教育等活动开展）：">
                                <Radio.Group
                                    value={this.state.isActiveService} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="departmentNum" label="中层部门："><Space direction="horizontal" align="baseline">
                                中层部门数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="departmentNum">
                                    <Input name="departmentNum" onChange={this.onDeepChange} value={this.state.departmentNum} style={{ width: 80 }} /></Form.Item> 个；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isDepartRelics" label="是否有专门的文物保管部：">
                                <Radio.Group
                                    value={this.state.isDepartRelics} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isDepartExhbi" label="是否有专门的陈列展览部：">
                                <Radio.Group
                                    value={this.state.isDepartExhbi} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isDepartSocial" label="是否有专门的社会教育部：">
                                <Radio.Group
                                    value={this.state.isDepartSocial} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isDepartStudy" label="是否有专门的学术研究部：">
                                <Radio.Group value={this.state.isDepartStudy}
                                    style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <div id="managerule" />
                            <Form.Item label="综合管理制度">
                                <Row gutter={[8, 8]}>
                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有章程：</Col>
                                    <Col span={12}><Form.Item name="isBylaws">
                                        <Switch defaultChecked={this.state.isBylaws} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有场馆运行标准化文件：</Col>
                                    <Col span={12}><Form.Item name="isStandardFile">
                                        <Switch defaultChecked={this.state.isStandardFile} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有年度工作计划：</Col>
                                    <Col span={12}><Form.Item name="isAnnualPlan">
                                        <Switch defaultChecked={this.state.isAnnualPlan} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有年度工作总结：</Col>
                                    <Col span={12}><Form.Item name="isAnnualSummary">
                                        <Switch defaultChecked={this.state.isAnnualSummary} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有中长期发展规划：</Col>
                                    <Col span={12}><Form.Item name="isLongPlan">
                                        <Switch defaultChecked={this.state.isLongPlan} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有年度宣传推广计划：</Col>
                                    <Col span={12}><Form.Item name="isAnnualPromote">
                                        <Switch defaultChecked={this.state.isAnnualPromote} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有考核评价相关制度：</Col>
                                    <Col span={12}><Form.Item name="isAssessment">
                                        <Switch defaultChecked={this.state.isAssessment} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有服务规范相关文件：</Col>
                                    <Col span={12}><Form.Item name="isServiceStandard">
                                        <Switch defaultChecked={this.state.isServiceStandard} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有经费管理相关文件：</Col>
                                    <Col span={12}><Form.Item name="isFundManage">
                                        <Switch defaultChecked={this.state.isFundManage} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有人员招聘、引进制度：</Col>
                                    <Col span={12}><Form.Item name="isHireSys">
                                        <Switch defaultChecked={this.state.isHireSys} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有人员考核激励制度：</Col>
                                    <Col span={12}><Form.Item name="isEncourageSys">
                                        <Switch defaultChecked={this.state.isEncourageSys} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有人员培训制度：</Col>
                                    <Col span={12}><Form.Item name="isTrain">
                                        <Switch defaultChecked={this.state.isTrain} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有藏品安全管理制度：</Col>
                                    <Col span={12}><Form.Item name="isRelicsSave">
                                        <Switch defaultChecked={this.state.isRelicsSave} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有公共安全管理制度：</Col>
                                    <Col span={12}><Form.Item name="isPublicSave">
                                        <Switch defaultChecked={this.state.isPublicSave} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有风险防控预案：</Col>
                                    <Col span={12}><Form.Item name="isRiskPlan">
                                        <Switch defaultChecked={this.state.isRiskPlan} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有绩效考核制度：</Col>
                                    <Col span={12}><Form.Item name="isPerformanceAppraisal">
                                        <Switch defaultChecked={this.state.isPerformanceAppraisal} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有信息公开制度：</Col>
                                    <Col span={12}><Form.Item name="isInfoOpen">
                                        <Switch defaultChecked={this.state.isInfoOpen} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有跨部门协作相关制度：</Col>
                                    <Col span={12}><Form.Item name="isDepartCooperation">
                                        <Switch defaultChecked={this.state.isDepartCooperation} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <div id="workrule" />
                            <Form.Item label="业务工作制度">
                                <Row gutter={[8, 8]}>
                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有文物管理相关制度：</Col>
                                    <Col span={12}><Form.Item name="isRelicsManage">
                                        <Switch defaultChecked={this.state.isRelicsManage} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有文物收藏范围相关文件：</Col>
                                    <Col span={12}><Form.Item name="isRelicsRange">
                                        <Switch defaultChecked={this.state.isRelicsRange} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有库房管理制度：</Col>
                                    <Col span={12}><Form.Item name="isStoreManage">
                                        <Switch defaultChecked={this.state.isStoreManage} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有库房安全制度：</Col>
                                    <Col span={12}><Form.Item name="isStoreSave">
                                        <Switch defaultChecked={this.state.isStoreSave} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有科研计划：</Col>
                                    <Col span={12}><Form.Item name="isTechPlan">
                                        <Switch defaultChecked={this.state.isTechPlan} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有科研成果奖励制度：</Col>
                                    <Col span={12}><Form.Item name="isStudyReward">
                                        <Switch defaultChecked={this.state.isStudyReward} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有科研成果认定办法：</Col>
                                    <Col span={12}><Form.Item name="isStudyConfirm">
                                        <Switch defaultChecked={this.state.isStudyConfirm} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有策展工作相关规定：</Col>
                                    <Col span={12}><Form.Item name="isExhibition">
                                        <Switch defaultChecked={this.state.isExhibition} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有展厅维护工作规定：</Col>
                                    <Col span={12}><Form.Item name="isHallSave">
                                        <Switch defaultChecked={this.state.isHallSave} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有社会教育工作计划与方案：</Col>
                                    <Col span={12}><Form.Item name="isSocialEdu">
                                        <Switch defaultChecked={this.state.isSocialEdu} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有讲解服务相关制度：</Col>
                                    <Col span={12}><Form.Item name="isExplain">
                                        <Switch defaultChecked={this.state.isExplain} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有爱国主义教育活动计划与方案：</Col>
                                    <Col span={12}><Form.Item name="isLoveCountry">
                                        <Switch defaultChecked={this.state.isLoveCountry} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}></Col>
                                    <Col span={8}>纪念馆是否有志愿者招募、管理相关制度：</Col>
                                    <Col span={12}><Form.Item name="isVolunteer">
                                        <Switch defaultChecked={this.state.isVolunteer} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                </Row>
                            </Form.Item><Divider />
                            <div id="plan" />
                            <Form.Item name="isLongTermPlan" label="编制了符合自身定位的中长期发展规划：">
                                <Radio.Group
                                    value={this.state.isLongTermPlan} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isLongTermPlan === 1 ?
                                <Space>规划名称为：<Input name="planName" onChange={this.onDeepChange} value={this.state.planName} placeholder="请输入" style={{ width: 80 }} /></Space>
                                : null}<Divider />
                            <Form.Item name="isOpenToPublic" label="发展规划向社会公布：">
                                <Radio.Group
                                    value={this.state.isOpenToPublic} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isReportOpen" label="工作计划、年度报告向社会公布：">
                                <Radio.Group
                                    value={this.state.isReportOpen} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isTrainPlan" label="制定了系统完整的人才培训培养计划：">
                                <Radio.Group
                                    value={this.state.isTrainPlan} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isTrainFund" label="有稳定的培养经费：">
                                <Radio.Group
                                    value={this.state.isTrainFund} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isOrganizeStaffStudy" label="定期组织工作人员进行学习：">
                                <Radio.Group
                                    value={this.state.isOrganizeStaffStudy} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isTalentIntroduction" label="制定人才引进计划：">
                                <Radio.Group
                                    value={this.state.isTalentIntroduction} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isTalentIntroduction === 1 ? <Form.Item label="人才引进："><Space direction="horizontal" align="baseline">
                                近三年共引进人才数量：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="talentNum"><Input name="talentNum" onChange={this.onDeepChange} value={this.state.talentNum}
                                    style={{ width: 60, marginLeft: 10 }} /></Form.Item> 人，
                                博士学历：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="introDoctor"><Input name="introDoctor" onChange={this.onDeepChange} value={this.state.introDoctor}
                                    style={{ width: 60, marginLeft: 10 }} /></Form.Item> 人，
                                硕士学历：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="introMaster"><Input name="introMaster" onChange={this.onDeepChange} value={this.state.introMaster}
                                    style={{ width: 60, marginLeft: 10 }} /></Form.Item> 人，</Space><Space direction="horizontal" align="baseline">
                                    高级职称：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="introHigh"><Input name="introHigh" onChange={this.onDeepChange} value={this.state.introHigh}
                                        style={{ width: 60, marginLeft: 10 }} /></Form.Item> 人，
                                    有省级（含）以上荣誉称号的人才：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="introProvince"><Input name="introProvince" onChange={this.onDeepChange} value={this.state.introProvince}
                                        style={{ width: 60, marginLeft: 10 }} /></Form.Item> 人，</Space>
                            </Form.Item> : null}
                            <Divider />
                            <Form.Item name="isSatisfactionSurve" label="定期开展观众满意度调查：">
                                <Radio.Group
                                    value={this.state.isSatisfactionSurve} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Divider />
                            <Form.Item name="isSurveyReport" label="形成观众满意度调查报告：">
                                <Radio.Group
                                    value={this.state.isSurveyReport} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isSurveyReportOpen" label="满意度调查报告及时向社会公开：">
                                <Radio.Group
                                    value={this.state.isSurveyReportOpen} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isHallLevel" label="获得厅级人才称号或荣誉：">
                                <Radio.Group
                                    value={this.state.isHallLevel} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isHallLevel === 1 ?
                                <Space direction="horizontal" align="baseline">数量为：
                                    <Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="hallLevelNum">
                                        <Input name="hallLevelNum" onChange={this.onDeepChange} value={this.state.hallLevelNum} placeholder="请输入" style={{ width: 80 }} /></Form.Item>
                                    位；</Space>
                                : null}<Divider />
                            <Form.Item name="isProvinceLevel" label="获得省级人才称号或荣誉：">
                                <Radio.Group
                                    value={this.state.isProvinceLevel} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isProvinceLevel === 1 ?
                                <Space direction="horizontal" align="baseline">数量为：
                                    <Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="provinceNum">
                                        <Input name="provinceNum" onChange={this.onDeepChange} value={this.state.provinceNum} placeholder="请输入" style={{ width: 80 }} /></Form.Item> 位；</Space>
                                : null}<Divider />
                            <Form.Item name="isCountryLevel" label="获得国家级人才称号或荣誉：">
                                <Radio.Group
                                    value={this.state.isCountryLevel} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isCountryLevel === 1 ?
                                <Space direction="horizontal" align="baseline">
                                    数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="countryNum">
                                        <Input name="countryNum" onChange={this.onDeepChange} value={this.state.countryNum} placeholder="请输入" style={{ width: 80 }} /></Form.Item> 位；</Space>
                                : null}<Divider />
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>

                </>
            );
        }
        else if (this.state.current === 5) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>
                    <div id="anchor">
                        <Anchor>
                            <Link href="#top" title="标题" />
                            <Link href="#annualrelics" title="年度藏品统计" />
                            <Link href="#cloud" title="云展览与网络展厅" />
                            <Link href="#offical" title="官方网站" />
                            <Link href="#service" title="提供服务" />

                        </Anchor>
                    </div>
                    <div id="form">
                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <div id="top" />
                            <Form.Item name="relicsNum" label="文物藏品："><Space direction="horizontal" align="baseline">
                                文物藏品数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsNum">
                                    <Input name="relicsNum" onChange={this.onDeepChange} value={this.state.relicsNum} style={{ width: 80 }} /></Form.Item> 件/套；
                            </Space></Form.Item><Divider />
                            <Form.Item label="可移动文物："><Space direction="horizontal" align="baseline">
                                可移动文物总数为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsMoveableNum">
                                    <Input name="relicsMoveableNum" onChange={this.onDeepChange} value={this.state.relicsMoveableNum} style={{ width: 80 }} /></Form.Item> 件/套；
                                可移动文物-一级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsMoveOne">
                                    <Input name="relicsMoveOne" onChange={this.onDeepChange} value={this.state.relicsMoveOne} style={{ width: 80 }} /></Form.Item> 件/套；
                            </Space><Space direction="horizontal" align="baseline">
                                    可移动文物-二级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsMoveTwo">
                                        <Input name="relicsMoveTwo" onChange={this.onDeepChange} value={this.state.relicsMoveTwo} style={{ width: 80 }} /></Form.Item> 件/套；
                                    可移动文物-三级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsMoveThree">
                                        <Input name="relicsMoveThree" onChange={this.onDeepChange} value={this.state.relicsMoveThree} style={{ width: 80 }} /></Form.Item> 件/套；
                                </Space></Form.Item><Divider />
                            <Form.Item label="不可移动文物："><Space direction="horizontal" align="baseline">
                                不可移动文物总数为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsUnmove">
                                    <Input name="relicsUnmove" onChange={this.onDeepChange} value={this.state.relicsUnmove} style={{ width: 80 }} /></Form.Item> 件/套；
                                不可移动文物-国家级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsUnmoveCountry">
                                    <Input name="relicsUnmoveCountry" onChange={this.onDeepChange} value={this.state.relicsUnmoveCountry} style={{ width: 80 }} /></Form.Item> 件/套；
                            </Space><Space direction="horizontal" align="baseline">
                                    不可移动文物-省级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsUnmoveProvince">
                                        <Input name="relicsUnmoveProvince" onChange={this.onDeepChange} value={this.state.relicsUnmoveProvince} style={{ width: 80 }} /></Form.Item> 件/套；
                                    不可移动文物-市级文物数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsUnmoveCity">
                                        <Input name="relicsUnmoveCity" onChange={this.onDeepChange} value={this.state.relicsUnmoveCity} style={{ width: 80 }} /></Form.Item> 件/套；
                                </Space></Form.Item><Divider />
                            <Form.Item name="relicsOrigin" label="藏品原件："><Space direction="horizontal" align="baseline">
                                藏品原件数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsOrigin">
                                    <Input name="relicsOrigin" onChange={this.onDeepChange} value={this.state.relicsOrigin} style={{ width: 80 }} /></Form.Item> 件/套；
                            </Space></Form.Item><Divider />
                            <Form.Item name="relicsCopy" label="复制品/仿制品："><Space direction="horizontal" align="baseline">
                                复制品/仿制品数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="relicsCopy">
                                    <Input name="relicsCopy" onChange={this.onDeepChange} value={this.state.relicsCopy} style={{ width: 80 }} /></Form.Item> 件/套；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isClassify" label="是否分类保护：">
                                <Radio.Group
                                    value={this.state.isClassify} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isDivideByRoom" label="是否分库保护：">
                                <Radio.Group
                                    value={this.state.isDivideByRoom} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isFixPeople" label="是否有藏品保护修复资质的人员：">
                                <Radio.Group
                                    value={this.state.isFixPeople} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isFixEquip" label="是否有专门的文物修复场所、设施设备：">
                                <Radio.Group
                                    value={this.state.isFixEquip} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isRelicsCollect" label="是否有藏品征集计划：">
                                <Radio.Group
                                    value={this.state.isRelicsCollect} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isRelicsCollect === 1 ?
                                <Space>名称为：<Input name="relicsCollectName" onChange={this.onDeepChange} value={this.state.relicsCollectName} placeholder="请输入" style={{ width: 80 }} /></Space>
                                : null}<Divider />
                            <div id="annualrelics" />
                            <Form.Item label="年度藏品统计：">
                                <Row gutter={[8, 8]} >
                                    <Col span={7} />
                                    <Col span={5}>2018年</Col>
                                    <Col span={5}>2019年</Col>
                                    <Col span={5}>2020年</Col>

                                    <Col span={7}>年度新增藏品数量（件/套）</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsAdd_2018"><Input name="annualRelicsAdd_2018" onChange={this.onDeepChange} value={this.state.annualRelicsAdd_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsAdd_2019"><Input name="annualRelicsAdd_2019" onChange={this.onDeepChange} value={this.state.annualRelicsAdd_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsAdd_2020"><Input name="annualRelicsAdd_2020" onChange={this.onDeepChange} value={this.state.annualRelicsAdd_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>年度修复文物数量（件/套）</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsFix_2018"><Input name="annualRelicsFix_2018" onChange={this.onDeepChange} value={this.state.annualRelicsFix_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsFix_2019"><Input name="annualRelicsFix_2019" onChange={this.onDeepChange} value={this.state.annualRelicsFix_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="annualRelicsFix_2020"><Input name="annualRelicsFix_2020" onChange={this.onDeepChange} value={this.state.annualRelicsFix_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>年度征集藏品经费（万元）</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualRelicsCollect_2018"><Input name="annualRelicsCollect_2018" onChange={this.onDeepChange} value={this.state.annualRelicsCollect_2018}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualRelicsCollect_2019"><Input name="annualRelicsCollect_2019" onChange={this.onDeepChange} value={this.state.annualRelicsCollect_2019}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualRelicsCollect_2020"><Input name="annualRelicsCollect_2020" onChange={this.onDeepChange} value={this.state.annualRelicsCollect_2020}
                                        style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item name="isrelicsDatabase" label="是否建设文物藏品数据库：">
                                <Radio.Group
                                    value={this.state.isrelicsDatabase} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isrelicsDatabase === 1 ? <><Form.Item name="relicsDatabaseName" label="文物藏品数据库：">
                                数据库名称为：<Input name="relicsDatabaseName" onChange={this.onDeepChange} value={this.state.relicsDatabaseName} style={{ width: 80 }} /> ；
                                藏品信息采集比例达<Input name="infoInDatabase" onChange={this.onDeepChange} value={this.state.infoInDatabase} style={{ width: 80 }} /> %；
                            </Form.Item>
                                <Form.Item name="databaseFunction" label="功能包括：">
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        <Row>
                                            <Col span={8}>
                                                <Checkbox value="1">藏品管理功能</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="2">检索功能</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="3">查询功能</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="4">其他</Checkbox>
                                                {this.state.databaseFunction.includes('4') ?
                                                    <Input name="databaseFunction_msg" onChange={this.onDeepChange} value={this.state.databaseFunction_msg} placeholder="请输入"
                                                        style={{ width: 120, height: 30, marginLeft: 10 }} />
                                                    : null}</Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item name="isDatabaseOpen" label="文物藏品数据库是否对外开放：">
                                    <Radio.Group
                                        value={this.state.isDatabaseOpen} style={{ marginLeft: 10 }}>
                                        <Radio value={1}>是</Radio>
                                        <Radio value={2}>否</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </> : null}<Divider />
                            <Form.Item name="annualAudience" label="参观人数："><Space direction="horizontal" align="baseline">
                                近三年年平均参观人数为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="annualAudience">
                                    <Input name="annualAudience" onChange={this.onDeepChange} value={this.state.annualAudience} style={{ width: 80 }} /></Form.Item> 万人次；
                            </Space></Form.Item><Divider />
                            <Form.Item name="hallAllArea" label="展厅面积："><Space direction="horizontal" align="baseline">
                                展厅总面积为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="hallAllArea">
                                    <Input name="hallAllArea" onChange={this.onDeepChange} value={this.state.hallAllArea} style={{ width: 80 }} /></Form.Item> 平方米；
                            </Space></Form.Item><Divider />
                            <Form.Item label="基本陈列："><Space direction="horizontal" align="baseline">
                                名称为：<Input name="basicName" onChange={this.onDeepChange} value={this.state.basicName} style={{ width: 80 }} /> ；
                                展陈面积为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="basicArea">
                                    <Input name="basicArea" onChange={this.onDeepChange} value={this.state.basicArea} style={{ width: 80 }} /></Form.Item> 平方米；
                                展线长度为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="basicLine">
                                    <Input name="basicLine" onChange={this.onDeepChange} value={this.state.basicLine} style={{ width: 80 }} /></Form.Item> 米；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isInteractive" label="基本陈列是否具有互动功能：">
                                <Radio.Group
                                    value={this.state.isInteractive} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isExperience" label="基本陈列是否具有观众体验区：">
                                <Radio.Group
                                    value={this.state.isExperience} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isExhiAct" label="基本陈列是否开展展演活动：">
                                <Radio.Group
                                    value={this.state.isExhiAct} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>定期开展</Radio>
                                    <Radio value={2}>不定期开展</Radio>
                                    <Radio value={3}>不开展</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="recentChange" label="基本陈列最近一次改陈距今：">
                                <Radio.Group
                                    value={this.state.recentChange} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>三年内</Radio>
                                    <Radio value={2}>五年内</Radio>
                                    <Radio value={3}>十年内</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isBasicNew" label="陈列展览是否体系新时代内容：">
                                <Radio.Group
                                    value={this.state.isBasicNew} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item label="近三年临时展览情况（本馆独立或牵头举办）："><Space direction="horizontal" align="baseline">
                                展览总数为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="temporaryExhi">
                                    <Input name="temporaryExhi" onChange={this.onDeepChange} value={this.state.temporaryExhi} style={{ width: 80 }} /></Form.Item> 个；
                                参观者总数为：<Form.Item rules={[{ pattern: new RegExp('^([0-9]+(.[0-9]{1,4})?)$'), message: '请输入数字（限四位小数及以上）!' }]} name="tempAudience">
                                    <Input name="tempAudience" onChange={this.onDeepChange} value={this.state.tempAudience} style={{ width: 120 }} /></Form.Item> 万人次；</Space><Space direction="horizontal" align="baseline">
                                    代表性临时展览名称为：<Input name="representExhiName" onChange={this.onDeepChange} value={this.state.representExhiName} style={{ width: 200 }} /> ；
                                </Space></Form.Item><Divider />
                            <div id="cloud" />
                            <Form.Item name="isCloudExhi" label="是否举办了云展览：">
                                <Radio.Group
                                    value={this.state.isCloudExhi} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isCloudExhi === 1 ?
                                <><Space align="baseline">数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="cloudExhiNum">
                                    <Input name="cloudExhiNum" onChange={this.onDeepChange} value={this.state.cloudExhiNum} placeholder="请输入" style={{ width: 80 }} /></Form.Item> 个；</Space>
                                    <Divider /><Form.Item name="recentCloudUpdateTime" label="云展览最近一次更新时间：" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} placeholder="请选择日期" />
                                    </Form.Item></> : null}
                            <Divider />
                            <Form.Item name="isBuildInternetHall" label="是否建设了网络展厅：">
                                <Radio.Group
                                    value={this.state.isBuildInternetHall} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isBuildInternetHall === 1 ?
                                <><Space align="baseline">数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="internetHallNum">
                                    <Input name="internetHallNum" onChange={this.onDeepChange} value={this.state.internetHallNum} placeholder="请输入" style={{ width: 80 }} /></Form.Item> 个；</Space>
                                    <Divider /><Form.Item name="recentInternetUpdateTime" label="网络展厅最近一次更新时间：" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} placeholder="请选择日期" />
                                    </Form.Item></> : null}
                            <Divider />
                            <Form.Item name="explainServiceType" label="讲解服务形式（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">讲解员讲解</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">语音导览</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">多语种讲解</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">分龄分众讲解</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">义务讲解</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">馆长或专家等特色讲解</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isStudyParty" label="是否建设了学术委员会或部门：">
                                <Radio.Group
                                    value={this.state.isStudyParty} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isStudyParty === 1 ?
                                <Space>名称为：<Input name="studyPartyName" onChange={this.onDeepChange} value={this.state.studyPartyName} placeholder="请输入" style={{ width: 80 }} /> ；</Space>
                                : null}
                            <Divider />
                            <Form.Item name="isStudyOrgnize" label="是否建设了学术组织：">
                                <Radio.Group
                                    value={this.state.isStudyOrgnize} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isStudyOrgnize === 1 ?
                                <Space>名称为：<Input name="studyOrgnizeName" onChange={this.onDeepChange} value={this.state.studyOrgnizeName} placeholder="请输入" style={{ width: 80 }} /> ；</Space>
                                : null}
                            <Divider />
                            <Form.Item name="isNewClever" label="是否建设了新型智库、决策咨询服务部门：">
                                <Radio.Group
                                    value={this.state.isNewClever} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isNewClever === 1 ?
                                <Space>名称为：<Input name="newCleverName" onChange={this.onDeepChange} value={this.state.newCleverName} placeholder="请输入" style={{ width: 80 }} /> ；</Space>
                                : null}
                            <Divider />
                            <Form.Item label="近三年研究成果："><Space direction="horizontal" align="baseline">
                                图书专著数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultBooks">
                                    <Input name="resultBooks" onChange={this.onDeepChange} value={this.state.resultBooks} style={{ width: 80 }} /></Form.Item> 本；
                                C刊论文数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultC">
                                    <Input name="resultC" onChange={this.onDeepChange} value={this.state.resultC} style={{ width: 80 }} /></Form.Item> 篇；
                                C扩论文数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultCExpand">
                                    <Input name="resultCExpand" onChange={this.onDeepChange} value={this.state.resultCExpand} style={{ width: 80 }} /></Form.Item> 篇；
                            </Space><Space direction="horizontal" align="baseline">
                                    普通报刊论文数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultCommonPaper">
                                        <Input name="resultCommonPaper" onChange={this.onDeepChange} value={this.state.resultCommonPaper} style={{ width: 80 }} /></Form.Item> 篇；
                                    国家专利数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultPatent">
                                        <Input name="resultPatent" onChange={this.onDeepChange} value={this.state.resultPatent} style={{ width: 80 }} /></Form.Item> 个；
                                </Space><Space direction="horizontal" align="baseline">
                                    《人民日报》《光明日报》《求是》报刊论文数量为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="resultNewspaper">
                                        <Input name="resultNewspaper" onChange={this.onDeepChange} value={this.state.resultNewspaper} style={{ width: 80 }} /></Form.Item> 篇；
                                </Space></Form.Item><Divider />
                            <Form.Item label="近三年学术活动与刊物："><Space direction="horizontal" align="baseline">
                                CSSCI核心期刊及扩展版：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyCSSCI">
                                    <Input name="studyCSSCI" onChange={this.onDeepChange} value={this.state.studyCSSCI} style={{ width: 80 }} /></Form.Item> ；
                                普通刊物：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyNormal">
                                    <Input name="studyNormal" onChange={this.onDeepChange} value={this.state.studyNormal} style={{ width: 80 }} /></Form.Item> ；
                                内部刊物：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyInner">
                                    <Input name="studyInner" onChange={this.onDeepChange} value={this.state.studyInner} style={{ width: 80 }} /></Form.Item> ；
                            </Space><Space direction="horizontal" align="baseline">
                                    举办的国际学术会议：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyInternationalMeet">
                                        <Input name="studyInternationalMeet" onChange={this.onDeepChange} value={this.state.studyInternationalMeet} style={{ width: 80 }} /></Form.Item> 次；
                                    举办的全国性学术会议：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyCountryMeet">
                                        <Input name="studyCountryMeet" onChange={this.onDeepChange} value={this.state.studyCountryMeet} style={{ width: 80 }} /></Form.Item> 次；
                                </Space><Space direction="horizontal" align="baseline">
                                    举办的省级学术会议：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="studyProvinceMeet">
                                        <Input name="studyProvinceMeet" onChange={this.onDeepChange} value={this.state.studyProvinceMeet} style={{ width: 80 }} /></Form.Item> 次；
                                </Space></Form.Item><Divider />
                            <div id="edu" />
                            <Form.Item label="教育活动："><Space direction="horizontal" align="baseline">
                                近三年各类教育活动场次为：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="EduAct">
                                    <Input name="EduAct" onChange={this.onDeepChange} value={this.state.EduAct} style={{ width: 80 }} /></Form.Item> ；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isCombineSchool" label="是否结合学校有关课程的教学内容，制订教育活动计划：">
                                <Radio.Group
                                    value={this.state.isCombineSchool} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isPartyMemebrTrain" label="是否开设党员干部培训班：">
                                <Radio.Group
                                    value={this.state.isPartyMemebrTrain} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isLeadSchool" label="是否开设干部学院">
                                <Radio.Group
                                    value={this.state.isLeadSchool} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Divider />
                            <Form.Item name="isSpecialEdu" label="是否为视障、听障等特殊群体提供专门教育服务：">
                                <Radio.Group
                                    value={this.state.isSpecialEdu} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Divider />
                            <Form.Item name="isLongTermShare" label="是否与以下单位建立了共建共享长效机制：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">周边学校</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">党政机关</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">企事业单位</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">驻地部队</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">城乡社区</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">其他</Checkbox>
                                            {this.state.isLongTermShare.includes('6') ? <Input name="isLongTermShare_msg"
                                                value={this.state.isLongTermShare_msg} onChange={this.onDeepChange} placeholder="请输入" style={{ width: 80 }} /> : null}
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isPropagandaTeam" label="是否建立专门的宣传团队：">
                                <Radio.Group
                                    value={this.state.isPropagandaTeam} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isPropagandaTeam === 1 ?
                                <Space>团队名称为：<Input name="propagandaTeamName" onChange={this.onDeepChange} value={this.state.propagandaTeamName} placeholder="请输入" style={{ width: 80 }} /></Space>
                                : null}<Divider />
                            <Form.Item name="isBrand" label="是否注册纪念馆品牌标识：">
                                <Radio.Group
                                    value={this.state.isBrand} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <div id="offical" />
                            <Form.Item name="isOfficalWeb" label="是否建设官方网站：">
                                <Radio.Group
                                    value={this.state.isOfficalWeb} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {this.state.isOfficalWeb === 1 ?
                                <><Space>网站地址为：<Input name="officalWebUrl" onChange={this.onDeepChange} value={this.state.officalWebUrl} placeholder="请输入" /></Space>
                                    <Divider />
                                    <Form.Item name="officalWebUpdateTime" label="官方网站最近一次更新时间：" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} placeholder="请选择日期" />
                                    </Form.Item><Divider />
                                    <Form.Item name="officalWebLanguage" label="网站支持语言：">
                                        <Checkbox.Group style={{ width: '100%' }}>
                                            <Row>
                                                <Col span={8}>
                                                    <Checkbox value="1">中文</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="2">英文</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="3">日文</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="4">韩文</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="5">法文</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value="6">其他</Checkbox>
                                                    {this.state.officalWebLanguage.includes('6') ? <Input name="officalWebLanguage_msg"
                                                        value={this.state.officalWebLanguage_msg} onChange={this.onDeepChange} placeholder="请输入" style={{ width: 80 }} /> : null}
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </> : null}<Divider />
                            <Form.Item label="官方账号统计：">
                                <Row gutter={[8, 8]} >
                                    <Col span={4} />
                                    <Col span={5}>账号名称</Col>
                                    <Col span={6}>开通日期</Col>
                                    <Col span={5}>粉丝数量</Col>
                                    <Col span={4}>是否官方认证</Col>

                                    <Col span={4}>微博</Col>
                                    <Col span={5}><Input name="weibo_name" onChange={this.onDeepChange} value={this.state.weibo_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="weibo_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="weibo_fans">
                                        <Input name="weibo_fans" onChange={this.onDeepChange} value={this.state.weibo_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="weibo_isOffical">
                                        <Switch defaultChecked={this.state.weibo_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}>微信公众号</Col>
                                    <Col span={5}><Input name="thePublic_name" onChange={this.onDeepChange} value={this.state.thePublic_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="thePublic_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="thePublic_fans">
                                        <Input name="thePublic_fans" onChange={this.onDeepChange} value={this.state.thePublic_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="thePublic_isOffical">
                                        <Switch defaultChecked={this.state.thePublic_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}>抖音</Col>
                                    <Col span={5}><Input name="douyin_name" onChange={this.onDeepChange} value={this.state.douyin_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="douyin_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="douyin_fans">
                                        <Input name="douyin_fans" onChange={this.onDeepChange} value={this.state.douyin_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="douyin_isOffical">
                                        <Switch defaultChecked={this.state.douyin_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}>B站</Col>
                                    <Col span={5}><Input name="bili_name" onChange={this.onDeepChange} value={this.state.bili_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="bili_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="bili_fans">
                                        <Input name="bili_fans" onChange={this.onDeepChange} value={this.state.bili_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="bili_isOffical">
                                        <Switch defaultChecked={this.state.bili_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}><Input name="op1_plat" onChange={this.onDeepChange} value={this.state.op1_plat}
                                        style={{ width: 100 }} placeholder="可选" /></Col>
                                    <Col span={5}><Input name="op1_name" onChange={this.onDeepChange} value={this.state.op1_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="op1_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="op1_fans">
                                        <Input name="op1_fans" onChange={this.onDeepChange} value={this.state.op1_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="op1_isOffical">
                                        <Switch defaultChecked={this.state.op1_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}><Input name="op2_plat" onChange={this.onDeepChange} value={this.state.op2_plat}
                                        style={{ width: 100 }} placeholder="可选" /></Col>
                                    <Col span={5}><Input name="op2_name" onChange={this.onDeepChange} value={this.state.op2_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="op2_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="op2_fans">
                                        <Input name="op2_fans" onChange={this.onDeepChange} value={this.state.op2_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="op2_isOffical">
                                        <Switch defaultChecked={this.state.op2_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>

                                    <Col span={4}><Input name="op3_plat" onChange={this.onDeepChange} value={this.state.op3_plat}
                                        style={{ width: 100 }} placeholder="可选" /></Col>
                                    <Col span={5}><Input name="op3_name" onChange={this.onDeepChange} value={this.state.op3_name}
                                        style={{ width: 100 }} /></Col>
                                    <Col span={6}><Form.Item name="op3_date" format="YYYY-MM-DD">
                                        <DatePicker defaultValue={moment()} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="op3_fans">
                                        <Input name="op3_fans" onChange={this.onDeepChange} value={this.state.op3_fans}
                                            style={{ width: 100 }} /></Form.Item></Col>
                                    <Col span={4}><Form.Item name="op3_isOffical">
                                        <Switch defaultChecked={this.state.op3_isOffical} checkedChildren="是" unCheckedChildren="否" />
                                    </Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item name="isRelicsService" label="是否提供藏品利用与科研服务：">
                                <Radio.Group
                                    value={this.state.isRelicsService} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <div id="service" />
                            <Form.Item name="provideService" label="提供服务包括（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">提供藏品保管服务</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">提供藏品鉴定服务</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">提供藏品养护服务</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">提供藏品修复服务</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">提供科研成果</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="6">提供科研设备</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="7">提供科研咨询</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="8">其他</Checkbox>
                                            {this.state.provideService.includes('8') ? <Input name="provideService_msg"
                                                value={this.state.provideService_msg} onChange={this.onDeepChange} placeholder="请输入" style={{ width: 80 }} /> : null}
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="objectOriented" label="面向服务对象包括（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="1">公众</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">专家学者</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">高校</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">科研院所</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">其他</Checkbox>
                                            {this.state.objectOriented.includes('5') ? <Input name="objectOriented_msg"
                                                value={this.state.objectOriented_msg} onChange={this.onDeepChange} placeholder="请输入" style={{ width: 80 }} /> : null}
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item name="provideForAct" label="为其他单位开展活动提供空间场所或平台（可多选）：">
                                <Checkbox.Group style={{ width: '100%' }} >
                                    <Row>
                                        <Col span={24}><span className="show">指纪念馆为开展党性教育、团队拓展、社会实践，或为当地举办重要活动、仪式庆典等提供空间场所与平台。</span></Col>
                                        <Col span={8}>
                                            <Checkbox value="1">党性教育</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="2">团队拓展</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="3">社会实践</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="4">纪念活动</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="5">庆典仪式</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item><Divider />
                            <Form.Item ><Space direction="horizontal" align="baseline">
                                每年开放天数：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="perYearOpen">
                                    <Input name="perYearOpen" onChange={this.onDeepChange} value={this.state.perYearOpen} style={{ width: 80 }} /></Form.Item> 天/年；
                            </Space></Form.Item><Divider />
                            <Form.Item name="isNight" label="是否开放夜场：">
                                <Radio.Group
                                    value={this.state.isNight} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item >
                                每周闭馆日：<Input name="perWeekClose" onChange={this.onDeepChange} value={this.state.perWeekClose} style={{ width: 80 }} /> ；
                            </Form.Item><Divider />
                            <Form.Item name="isCloseDiffer" label="闭馆时间是否与其他馆错开：">
                                <Radio.Group
                                    value={this.state.isNight} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.nextChange}>下一步</Button></div>
                    </div>

                </>
            );
        }
        else if (this.state.current === 6) {
            return (
                <>
                    <div id="step">
                        <Steps current={current} onChange={this.onChange} direction="vertical">
                            <Step title="采集表封面" />
                            <Step title="基本情况" />
                            <Step title="外部资源" />
                            <Step title="内部资源" />
                            <Step title="管理运行" />
                            <Step title="业务部分" />
                            <Step title="行业效益与影响" />
                        </Steps>
                    </div>

                    <div id="form">
                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            labelAlign='left'
                            wrapperCol={{
                                span: 16,
                            }}
                            layout="vertical"
                            initialValues={this.state}
                            onValuesChange={this.onFormLayoutChange}
                            size='large'
                        >
                            <div id="top" />
                            <Form.Item name="isProvinceOrg" label="纪念馆是否为省级行业组织理事单位、主任单位：">
                                <Radio.Group
                                    value={this.state.isProvinceOrg} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>

                            </Form.Item>
                            {this.state.isProvinceOrg === 1 ? <Space>职务、组织名称为：<Input
                                name="provinceOrgName" value={this.state.provinceOrgName} onChange={this.onDeepChange} /></Space> : null}
                            <Divider />
                            <Form.Item name="isLeaderInProvince" label="纪念馆专家或领导在省级行业组织中担任重要职务或成为专家委员会成员：">
                                <Radio.Group
                                    value={this.state.isLeaderInProvince} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>

                            </Form.Item>
                            {this.state.isLeaderInProvince === 1 ? <Row gutter={[8, 8]}>
                                <Col span={18}>专家姓名：<Input style={{ width: 120 }} name="leaderName1" value={this.state.leaderName1} onChange={this.onDeepChange} />；职务、组织名称为：<Input style={{ width: 200 }} name="orgName1" value={this.state.orgName1} onChange={this.onDeepChange} /></Col>
                                <Col span={18}>专家姓名：<Input style={{ width: 120 }} name="leaderName2" value={this.state.leaderName2} onChange={this.onDeepChange} />；职务、组织名称为：<Input style={{ width: 200 }} name="orgName2" value={this.state.orgName2} onChange={this.onDeepChange} /></Col>
                                <Col span={18}>专家姓名：<Input style={{ width: 120 }} name="leaderName3" value={this.state.leaderName3} onChange={this.onDeepChange} />；职务、组织名称为：<Input style={{ width: 200 }} name="orgName3" value={this.state.orgName3} onChange={this.onDeepChange} /></Col>
                            </Row> : null}<Divider />
                            <Form.Item name="isProvinceVisit" label="近三年纪念馆接受省部级领导调研参观：">
                                <Radio.Group
                                    value={this.state.isProvinceVisit} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item name="isCountryVisit" label="近三年纪念馆接受国家级领导调研参观：">
                                <Radio.Group
                                    value={this.state.isCountryVisit} style={{ marginLeft: 10 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Form.Item><Divider />
                            <Form.Item label="行业荣誉：">
                                <Space direction="horizontal" align="baseline">
                                    近三年获得省级荣誉：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="provinceRewardsNum">
                                        <Input name="provinceRewardsNum" onChange={this.onDeepChange} value={this.state.provinceRewardsNum} style={{ width: 80 }} /></Form.Item> 个；
                                    奖项名称（名称请用“；”隔开）：<Input name="provinceRewardsName" onChange={this.onDeepChange} value={this.state.provinceRewardsName} style={{ width: 180 }} /> ；</Space>
                                <Space direction="horizontal" align="baseline">
                                    近三年获得国家级荣誉：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="countryRewardsNum">
                                        <Input name="countryRewardsNum" onChange={this.onDeepChange} value={this.state.countryRewardsNum} style={{ width: 80 }} /></Form.Item> 个；
                                    奖项名称（名称请用“；”隔开）：<Input name="countryRewardsName" onChange={this.onDeepChange} value={this.state.countryRewardsName} style={{ width: 180 }} /> ；</Space>

                            </Form.Item><Divider />
                            <Form.Item label="参观人数：">
                                <Row gutter={[8, 8]} >
                                    <Col span={7} />
                                    <Col span={5}>2018年</Col>
                                    <Col span={5}>2019年</Col>
                                    <Col span={5}>2020年</Col>

                                    <Col span={7}>近三年参观人数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="audience_2018">
                                        <Input name="audience_2018" onChange={this.onDeepChange} value={this.state.audience_2018}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="audience_2019">
                                        <Input name="audience_2019" onChange={this.onDeepChange} value={this.state.audience_2019}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="audience_2020">
                                        <Input name="audience_2020" onChange={this.onDeepChange} value={this.state.audience_2020}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>近三年免费接待青少年人数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="teen_2018">
                                        <Input name="teen_2018" onChange={this.onDeepChange} value={this.state.teen_2018}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="teen_2019">
                                        <Input name="teen_2019" onChange={this.onDeepChange} value={this.state.teen_2019}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="teen_2020">
                                        <Input name="teen_2020" onChange={this.onDeepChange} value={this.state.teen_2020}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>

                                    <Col span={7}>近三年免费接待党员干部人数</Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="party_2018">
                                        <Input name="party_2018" onChange={this.onDeepChange} value={this.state.party_2018}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="party_2019">
                                        <Input name="party_2019" onChange={this.onDeepChange} value={this.state.party_2019}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                    <Col span={5}><Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="party_2020">
                                        <Input name="party_2020" onChange={this.onDeepChange} value={this.state.party_2020}
                                            style={{ width: 100, marginLeft: 10 }} /></Form.Item></Col>
                                </Row>
                            </Form.Item><Divider />
                            <Form.Item label="媒体显示度：">
                                <Space direction="horizontal" align="baseline">
                                    近三年受到省主流媒体宣传：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="provinceMedia">
                                        <Input name="provinceMedia" onChange={this.onDeepChange} value={this.state.provinceMedia} style={{ width: 80 }} /></Form.Item> 个；
                                    报道名称（名称请用“；”隔开）：<Input name="provinceMediaName" onChange={this.onDeepChange} value={this.state.provinceMediaName} style={{ width: 160 }} /> ；</Space>
                                <Space direction="horizontal" align="baseline">
                                    近三年受到中央主流媒体宣传：<Form.Item rules={[{ pattern: new RegExp('^[0-9]*$'), message: '请输入整数!' }]} name="centerMedia">
                                        <Input name="centerMedia" onChange={this.onDeepChange} value={this.state.centerMedia} style={{ width: 80 }} /></Form.Item> 个；
                                    报道名称（名称请用“；”隔开）：<Input name="centerMediaName" onChange={this.onDeepChange} value={this.state.centerMediaName} style={{ width: 160 }} /> ；</Space>

                            </Form.Item><Divider />
                        </Form>
                        <div id="btn-div"><Button current={1} type="primary" id="next"
                            onClick={this.completeChange}>提交</Button></div>
                    </div>

                </>
            );
        }
        ;


    };

}


export default Demo;
