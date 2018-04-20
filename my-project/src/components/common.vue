<template>
  <div class="questionnaire">
   <div @click="filter">{{a}}</div>
   <div @click="changeNum2">{{num}}</div>
   <div v-if="s.startsWith('hello')">{{s2}}</div>
   <div v-else>0</div>
   <div v-html="temp"></div>
   <input type="text" v-model="mes">
   <div>{{mes}}</div>
   <div class="list">
     <ul>
       <li v-for="(item,index) in list" :key="index">
          <p v-bind:class="{active:item.isActive}" @click="listClick(item,index)">{{item.value}}</p>
       </li>
     </ul>
   </div>
   <div class="show-text">
     <div class="text" v-for="(item,index) in textArr" :key="index">
       <p>{{item.text}}</p>
     </div>
   </div>
   <div class="tip">已选{{count}}项</div>
   <el-button @click="cahngeArr">button</el-button>
   <div class="icons">
      <i class="el-icon-edit"></i>
      <i class="el-icon-info"></i>
   </div>
   <div class="select">
     <select name="" id="" v-model="value">
       <option value="" v-for="(item,index) in options" :key="index" :disabled="item.disabled">{{item.label}}</option>
     </select>
   </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      value: "",
      a: "hello",
      firstName: "李",
      lastName: "四",
      arr1: [1, 2, 3, 4, 5],
      brand: 2,
      num: 4,
      s: "hello world",
      s2: 3,
      s3: "ab",
      temp: "",
      mes: "",
      count:0,
      list: [
        {
          key: 0,
          value: "第一",
          isActive: false
        },
        {
          key: 1,
          value: "第二",
          isActive: false
        },
        {
          key: 2,
          value: "第三",
          isActive: false
        },
        {
          key: 3,
          value: "第四",
          isActive: false
        }
      ],
      addText: "",
      textArr: [],
      listArr: [],
      options: [
        {
          value: "选项1",
          label: "苹果",
          disabled: false
        },
        {
          value: "选项2",
          label: "梨",
          disabled: true
        },
        {
          value: "选项3",
          label: "香蕉",
          disabled: false
        },
        {
          value: "选项4",
          label: "柚子",
          disabled: false
        }
      ]
    };
  },
  created: function() {},
  mounted: function() {
    this.changeNum();
  },
  computed: {},
  methods: {
    fullName2: function() {
      console.log(this.firstName + this.lastName);
    },
    filter: function() {
      var b = this.arr1.filter(function(item) {
        return item > 2;
      });
      console.log(b);
    },
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      return null;
    },
    changeNum: function() {
      this.num = 5;
      this.s3 = this.s3.padStart(5, "0");
      console.log(this.s3);
      this.temp = `<h2>${this.firstName}${this.lastName}</h2>`;
    },
    changeNum2: function() {
      this.s = "etbhnhn";
    },
    listClick: function(item, index) {
      item.isActive = !item.isActive;
      var obj = {
        id: index,
        text: item.value
      };
      if (item.isActive) {
        this.textArr.push({ text: item.value });
        this.count++;
      } else {
        var textIndex = this.textArr.findIndex(x => x.text == obj.text);
        this.textArr.splice(textIndex, 1);
        this.count--;
      }
    },
    cahngeArr: function() {
      this.listArr.length = 0;
      this.textArr.forEach(element => {
        this.listArr.push(element.text);
      });
      console.log(this.listArr)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.questionnaire {
  padding: 30px;
}
.active {
  color: red;
}
.show-text {
  border: 1px solid #bbb;
}
</style>
