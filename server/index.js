var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/truth_dare');

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '../client' });
});

app.get('/api/truth', function (req, res) {
    res.json([
        {
            "question": "你们家里谁的脾气最大"
        },
        {
            "question": "现在想被有钱人包养么"
        },
        {
            "question": "你会做菜么"
        },
        {
            "question": "每天上网几个小时"
        },
        {
            "question": "请说出在座谁昨天没有洗澡"
        },
        {
            "question": "今天晚上要做什么"
        },
        {
            "question": "异性知己有几个"
        },
        {
            "question": "上厕所后洗手么"
        },
        {
            "question": "你最受不了别人对你做什么"
        },
        {
            "question": "觉得失去什么最可怕"
        },
        {
            "question": "你觉得自己什么时候身体发育成熟的"
        }
    ]);
});

app.get('/api/dare', function (req, res) {
    res.json([
        {
            "question": "背一位异性绕场一周"
        },
        {
            "question": "唱青藏高原最后一句"
        },
        {
            "question": "做一个大家都满意的鬼脸"
        },
        {
            "question": "抱一位异性直到下一轮真心话大冒险结束"
        },
        {
            "question": "向一位异性表白3分钟"
        },
        {
            "question": "与一位异性十指相扣，对视10秒"
        },
        {
            "question": "邀请一位异性为你唱情歌，或邀请一位异性与你情歌对唱"
        },
        {
            "question": "做自己最性感、最妩媚的表情或动作"
        },
        {
            "question": "吃下每个人为你夹的菜"
        },
        {
            "question": "跳草裙舞或脱衣舞"
        },
        {
            "question": "亲吻一位异性，部位不限"
        }
    ]);
});

app.get('/api/truth', function (req, res) {
    res.json([
              {
                "question": "你们家里谁的脾气最大"
              },
              {
                "question": "现在想被有钱人保养么"
              },
              {
                "question": "你会做菜么"
              },
              {
                "question": "每天上网几个小时"
              },
              {
                "question": "请说出在座谁昨天没有洗澡"
              },
              {
                "question": "今天晚上要做什么"
              },
              {
                "question": "异性知己有几个"
              },
              {
                "question": "上厕所后洗手么"
              },
              {
                "question": "你最受不了别人对你做什么"
              },
              {
                "question": "觉得失去什么最可怕"
              },
              {
                "question": "你觉得自己什么时候身体发育成熟的"
              }
            ]);
});

app.use(express.static('../client'));

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function () {
    console.log("I'm listening on port " + process.env.PORT);
});