import moment from 'moment';

function getState() {
    var dar = {}
    $.ajax({
        type: "get",
        url: "http://localhost:8080/get_state",
        dataType: "JSON",
        async:false,
        contentType: "application/x-www-form-urlencoded",
        success: (data, status) => {
            // var datt = decodeUnicode(status)  
            // var lists = [data.curDate,
            //     data.createDate,
            //     data.recentCloudUpdateTime,
            //     data.recentInternetUpdateTime,
            //     data.op3_date,
            //     data.op2_date,
            //     data.op1_date,
            //     data.bili_date,
            //     data.douyin_date,
            //     data.thePublic_date,
            //     data.weibo_date,
            //     data.officalWebUpdateTime]
            // console.log('key', lists)
            // for (var key in lists){
            //     if (key === ''){
            //         key = moment().format('YYYY-MM-DD')
            //     }
            //     else if (key === 0){
            //         key = moment().format('YYYY-MM-DD')
            //     }
            //     else{
            //         key = moment(key)
            //     }
            // }
            data.curDate = (data.curDate!=="" && data.curDate!== null)? moment(data.curDate):0
            data.createDate = (data.createDate!=="" && data.createDate!== null)?moment(data.createDate):0
            data.recentCloudUpdateTime = (data.recentCloudUpdateTime!=="" && data.recentCloudUpdateTime!== null)?moment(data.recentCloudUpdateTime):0
            data.recentInternetUpdateTime = (data.recentInternetUpdateTime!=="" && data.recentInternetUpdateTime!== null)?moment(data.recentInternetUpdateTime):0
            data.op3_date = (data.op3_date!=="" && data.op3_date!== null)? moment(data.op3_date):0
            data.op2_date = (data.op2_date!=="" && data.op2_date!== null)? moment(data.op2_date):0
            data.op1_date = (data.op1_date!=="" && data.op1_date!== null)? moment(data.op1_date):0
            data.bili_date = (data.bili_date!=="" && data.bili_date!== null)?moment(data.bili_date):0
            data.douyin_date = (data.douyin_date!=="" && data.douyin_date!== null)? moment(data.douyin_date):0
            data.thePublic_date = (data.thePublic_date!=="" && data.thePublic_date!== null)? moment(data.thePublic_date):0
            data.weibo_date = (data.weibo_date!=="" && data.weibo_date!== null)? moment(data.weibo_date):0
            data.officalWebUpdateTime = (data.officalWebUpdateTime!=="" && data.officalWebUpdateTime!== null)? moment(data.officalWebUpdateTime):0
            dar = data
        }
    });
    console.log('dar', dar)
    return dar

}

export default getState