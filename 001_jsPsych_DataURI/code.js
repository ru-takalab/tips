//cognition.runのtask code

// 画像の変数のリスト（images.jsの変数名と一致している必要があります）
// 手で入力するよりも自動的に変数名リストを作成した方がベター
// images.jsの中でリストにしてしまうのもありです
const images = ["img_4732388_s", "img_4732391_s", "img_4847040_s", "img_22214440_s", "img_22309457_s"];

const jsPsych = initJsPsych();

let categorization_trial = {
    type: jsPsychCategorizeImage,
    // 遅延評価させるためにfunction-returnが必要。また`eval`が必要です。
    stimulus: function(){return eval(jsPsych.timelineVariable("image"))},
    prompt: "<p>何ラーメンですか？<br/>(s)醤油 / (t)とんこつ / (i)塩 / (m)みそ</p><br/><p>写真は写真ACより</p>",
    choices: ['s', 't', 'i', 'm'],
    key_answer: '',
    text_answer: '',
    incorrect_text: '',
    feedback_duration: 0,
    show_stim_with_feedback: false,
};

let ramen_proc = {
  timeline: [categorization_trial],
  // timeline variable用の連想配列を作ってます
  timeline_variables: images.map(function(x){return {image: x}}),
  randomize_order: true,
  repetitions: 3 
}

jsPsych.run([ramen_proc]);
