


let textArr = [
    {
        name: 'h2',
        class: 'inten',
        text: '个人简历'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '基本信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：鲁波'
            },{
                name: 'div',
                text: '年龄：29'
            },{
                name: 'div',
                text: '星座：处女座'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '身高/体重：173/132'
            },{
                name: 'div',
                text: '联系电话：18371900524'
            },{
                name: 'div',
                text: '政治面貌：党员'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '工作学习'
    }, {
        name: 'div',
        class: 'school',
        children: [
			/*{
            name: 'span',
            class: 'mr',
            text: '学校：中山大学南方学院'
        }, {
            name: 'span',
            text: '专业：计算机科学与技术'
        },*/ 
		{
            name: 'div',
            text: '&nbsp;&nbsp;程序员一枚，工作偏忙，收入稳定，偶尔加班，较少应酬。即使目前较为安逸，也没有停止学习，始终在为能够创造更美好的努力生活着🙂。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '生活情致'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;由于之前在深圳，武汉工作过，独立能力尚可，所以家务能力尚可(为什么说是尚可呢，因为谦虚是美德)。愿意分担家务，分享快乐，懂得平和待人，亦没有抽烟喝酒赌博等嗜好。喜欢整洁干净简单的生活🙂。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '性格爱好'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;性格偏内向，技术宅。热爱旅行、拍照、敲代码😀。周末喜欢打羽毛球。<br/>会做饭哟✌。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '家庭方面'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;出生十堰市丹江口市六里坪镇，郧县户口，家中还有一个哥哥(已在武汉定居)。母亲温暖，父亲严肃，都是通情达理之人，不世故，讲道理，识大体🙂。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '经济方面'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;房是自己努力买的。懂的孝顺，但不是妈宝，家庭成员会更加重视彼此的独立人格和选择自由🙂。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '对另一半的要求'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;希望你是热爱生活的好姑凉，脾气好，对生活有品位，有幽默感，其他不限🙂。',
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '心语'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'div',
            text: '&nbsp;&nbsp;内心也渴望一份美好的情感，但不强求也不凑合，尊重她人和自己的情感，期待理想中的你能够早日出现。正如顾城所说：“我正站成一个世界，把你等待♥。”',
        }]
    }
]
let style = `
    /*
    * 小姐姐好，我是鲁波，湖北十堰人
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 稍等，在容器上添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 我需要一点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 接下来请欣赏我的简历吧 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="images/balloon.png" id="bg-balloon-small">
        <img src="images/balloon.png" id="bg-balloon-large">
        <img src="images/logo.png" id="bg-balloon-logo" style="height:100px;">
		<img src="images/weixin.jpg" style="margin-top:30%;margin-left:58%;height:140px;width:140px;z-index:999999;">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


