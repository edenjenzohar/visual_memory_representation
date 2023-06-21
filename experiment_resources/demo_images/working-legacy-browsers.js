/**************** 
 * Working Test *
 ****************/


// store info about the experiment session:
let expName = 'working';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_formRoutineBegin());
flowScheduler.add(consent_formRoutineEachFrame());
flowScheduler.add(consent_formRoutineEnd());
flowScheduler.add(instructions_1RoutineBegin());
flowScheduler.add(instructions_1RoutineEachFrame());
flowScheduler.add(instructions_1RoutineEnd());
const demo_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demo_loopLoopBegin(demo_loopLoopScheduler));
flowScheduler.add(demo_loopLoopScheduler);
flowScheduler.add(demo_loopLoopEnd);
flowScheduler.add(instructions_before_expRoutineBegin());
flowScheduler.add(instructions_before_expRoutineEachFrame());
flowScheduler.add(instructions_before_expRoutineEnd());
const exp_loopsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp_loopsLoopBegin(exp_loopsLoopScheduler));
flowScheduler.add(exp_loopsLoopScheduler);
flowScheduler.add(exp_loopsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'noise_11.png', 'path': 'noise_11.png'},
    {'name': 'mountain_223.jpg', 'path': 'mountain_223.jpg'},
    {'name': 'playground_72.jpg', 'path': 'playground_72.jpg'},
    {'name': 'golf_course_193.jpg', 'path': 'golf_course_193.jpg'},
    {'name': 'playground_219.jpg', 'path': 'playground_219.jpg'},
    {'name': 'mountain_184.jpg', 'path': 'mountain_184.jpg'},
    {'name': 'playground_240.jpg', 'path': 'playground_240.jpg'},
    {'name': 'noise_43.png', 'path': 'noise_43.png'},
    {'name': 'highway_245.jpg', 'path': 'highway_245.jpg'},
    {'name': 'mountain_293.jpg', 'path': 'mountain_293.jpg'},
    {'name': 'mountain_94.jpg', 'path': 'mountain_94.jpg'},
    {'name': 'highway_389.jpg', 'path': 'highway_389.jpg'},
    {'name': 'noise_19.png', 'path': 'noise_19.png'},
    {'name': 'highway_273.jpg', 'path': 'highway_273.jpg'},
    {'name': 'highway_206.jpg', 'path': 'highway_206.jpg'},
    {'name': 'experiment_csv.csv', 'path': 'experiment_csv.csv'},
    {'name': 'playground_205.jpg', 'path': 'playground_205.jpg'},
    {'name': 'golf_course_312.jpg', 'path': 'golf_course_312.jpg'},
    {'name': 'badlands_63.jpg', 'path': 'badlands_63.jpg'},
    {'name': 'mountain_128.jpg', 'path': 'mountain_128.jpg'},
    {'name': 'golf_course_262.jpg', 'path': 'golf_course_262.jpg'},
    {'name': 'highway_379.jpg', 'path': 'highway_379.jpg'},
    {'name': 'golf_course_214.jpg', 'path': 'golf_course_214.jpg'},
    {'name': 'noise_58.png', 'path': 'noise_58.png'},
    {'name': 'golf_course_97.jpg', 'path': 'golf_course_97.jpg'},
    {'name': 'noise_4.png', 'path': 'noise_4.png'},
    {'name': 'badlands_137.jpg', 'path': 'badlands_137.jpg'},
    {'name': 'noise_26.png', 'path': 'noise_26.png'},
    {'name': 'bridge_60.jpg', 'path': 'bridge_60.jpg'},
    {'name': 'noise_17.png', 'path': 'noise_17.png'},
    {'name': 'badlands_34.jpg', 'path': 'badlands_34.jpg'},
    {'name': 'badlands_203.jpg', 'path': 'badlands_203.jpg'},
    {'name': 'flower2.jpg', 'path': 'flower2.jpg'},
    {'name': 'noise_40.png', 'path': 'noise_40.png'},
    {'name': 'noise_46.png', 'path': 'noise_46.png'},
    {'name': 'right.jpg', 'path': 'right.jpg'},
    {'name': 'golf_course_161.jpg', 'path': 'golf_course_161.jpg'},
    {'name': 'bridge_146.jpg', 'path': 'bridge_146.jpg'},
    {'name': 'playground_2.jpg', 'path': 'playground_2.jpg'},
    {'name': 'mountain_3.jpg', 'path': 'mountain_3.jpg'},
    {'name': 'playground_131.jpg', 'path': 'playground_131.jpg'},
    {'name': 'badlands_221.jpg', 'path': 'badlands_221.jpg'},
    {'name': 'golf_course_2.jpg', 'path': 'golf_course_2.jpg'},
    {'name': 'badlands_139.jpg', 'path': 'badlands_139.jpg'},
    {'name': 'bridge_54.jpg', 'path': 'bridge_54.jpg'},
    {'name': 'mountain_72.jpg', 'path': 'mountain_72.jpg'},
    {'name': 'mountain_138.jpg', 'path': 'mountain_138.jpg'},
    {'name': 'golf_course_78.jpg', 'path': 'golf_course_78.jpg'},
    {'name': 'noise_37.png', 'path': 'noise_37.png'},
    {'name': 'highway_204.jpg', 'path': 'highway_204.jpg'},
    {'name': 'flower5.jpg', 'path': 'flower5.jpg'},
    {'name': 'highway_209.jpg', 'path': 'highway_209.jpg'},
    {'name': 'badlands_70.jpg', 'path': 'badlands_70.jpg'},
    {'name': 'bridge_38.jpg', 'path': 'bridge_38.jpg'},
    {'name': 'noise_28.png', 'path': 'noise_28.png'},
    {'name': 'golf_course_217.jpg', 'path': 'golf_course_217.jpg'},
    {'name': 'noise_23.png', 'path': 'noise_23.png'},
    {'name': 'playground_215.jpg', 'path': 'playground_215.jpg'},
    {'name': 'bridge_128.jpg', 'path': 'bridge_128.jpg'},
    {'name': 'noise_42.png', 'path': 'noise_42.png'},
    {'name': 'bridge_31.jpg', 'path': 'bridge_31.jpg'},
    {'name': 'mountain_47.jpg', 'path': 'mountain_47.jpg'},
    {'name': 'bridge_181.jpg', 'path': 'bridge_181.jpg'},
    {'name': 'highway_122.jpg', 'path': 'highway_122.jpg'},
    {'name': 'noise_29.png', 'path': 'noise_29.png'},
    {'name': 'demo_test.xlsx', 'path': 'demo_test.xlsx'},
    {'name': 'mountain_101.jpg', 'path': 'mountain_101.jpg'},
    {'name': 'noise_21.png', 'path': 'noise_21.png'},
    {'name': 'flower4_pair.jpg', 'path': 'flower4_pair.jpg'},
    {'name': 'noise_51.png', 'path': 'noise_51.png'},
    {'name': 'noise_36.png', 'path': 'noise_36.png'},
    {'name': 'highway_93.jpg', 'path': 'highway_93.jpg'},
    {'name': 'noise_60.png', 'path': 'noise_60.png'},
    {'name': 'bridge_116.jpg', 'path': 'bridge_116.jpg'},
    {'name': 'noise_30.png', 'path': 'noise_30.png'},
    {'name': 'bridge_148.jpg', 'path': 'bridge_148.jpg'},
    {'name': 'noise_25.png', 'path': 'noise_25.png'},
    {'name': 'golf_course_113.jpg', 'path': 'golf_course_113.jpg'},
    {'name': 'playground_21.jpg', 'path': 'playground_21.jpg'},
    {'name': 'highway_415.jpg', 'path': 'highway_415.jpg'},
    {'name': 'golf_course_235.jpg', 'path': 'golf_course_235.jpg'},
    {'name': 'mountain_295.jpg', 'path': 'mountain_295.jpg'},
    {'name': 'bridge_75.jpg', 'path': 'bridge_75.jpg'},
    {'name': 'flower3_pair.jpg', 'path': 'flower3_pair.jpg'},
    {'name': 'flower1_pair.jpg', 'path': 'flower1_pair.jpg'},
    {'name': 'flower4.jpg', 'path': 'flower4.jpg'},
    {'name': 'noise_18.png', 'path': 'noise_18.png'},
    {'name': 'golf_course_87.jpg', 'path': 'golf_course_87.jpg'},
    {'name': 'golf_course_195.jpg', 'path': 'golf_course_195.jpg'},
    {'name': 'highway_359.jpg', 'path': 'highway_359.jpg'},
    {'name': 'badlands_3.jpg', 'path': 'badlands_3.jpg'},
    {'name': 'golf_course_134.jpg', 'path': 'golf_course_134.jpg'},
    {'name': 'noise_22.png', 'path': 'noise_22.png'},
    {'name': 'flower3.jpg', 'path': 'flower3.jpg'},
    {'name': 'mountain_123.jpg', 'path': 'mountain_123.jpg'},
    {'name': 'noise_34.png', 'path': 'noise_34.png'},
    {'name': 'highway_177.jpg', 'path': 'highway_177.jpg'},
    {'name': 'playground_214.jpg', 'path': 'playground_214.jpg'},
    {'name': 'noise_7.png', 'path': 'noise_7.png'},
    {'name': 'bridge_121.jpg', 'path': 'bridge_121.jpg'},
    {'name': 'golf_course_15.jpg', 'path': 'golf_course_15.jpg'},
    {'name': 'flower2_pair.jpg', 'path': 'flower2_pair.jpg'},
    {'name': 'noise_55.png', 'path': 'noise_55.png'},
    {'name': 'badlands_1.jpg', 'path': 'badlands_1.jpg'},
    {'name': 'badlands_62.jpg', 'path': 'badlands_62.jpg'},
    {'name': 'mountain_189.jpg', 'path': 'mountain_189.jpg'},
    {'name': 'bridge_244.jpg', 'path': 'bridge_244.jpg'},
    {'name': 'flower5_pair.jpg', 'path': 'flower5_pair.jpg'},
    {'name': 'playground_117.jpg', 'path': 'playground_117.jpg'},
    {'name': 'golf_course_309.jpg', 'path': 'golf_course_309.jpg'},
    {'name': 'mountain_57.jpg', 'path': 'mountain_57.jpg'},
    {'name': 'golf_course_25.jpg', 'path': 'golf_course_25.jpg'},
    {'name': 'badlands_207.jpg', 'path': 'badlands_207.jpg'},
    {'name': 'mountain_93.jpg', 'path': 'mountain_93.jpg'},
    {'name': 'badlands_194.jpg', 'path': 'badlands_194.jpg'},
    {'name': 'playground_10.jpg', 'path': 'playground_10.jpg'},
    {'name': 'golf_course_188.jpg', 'path': 'golf_course_188.jpg'},
    {'name': 'mountain_156.jpg', 'path': 'mountain_156.jpg'},
    {'name': 'highway_174.jpg', 'path': 'highway_174.jpg'},
    {'name': 'highway_384.jpg', 'path': 'highway_384.jpg'},
    {'name': 'noise_3.png', 'path': 'noise_3.png'},
    {'name': 'playground_76.jpg', 'path': 'playground_76.jpg'},
    {'name': 'playground_257.jpg', 'path': 'playground_257.jpg'},
    {'name': 'badlands_103.jpg', 'path': 'badlands_103.jpg'},
    {'name': 'highway_171.jpg', 'path': 'highway_171.jpg'},
    {'name': 'bridge_108.jpg', 'path': 'bridge_108.jpg'},
    {'name': 'noise_59.png', 'path': 'noise_59.png'},
    {'name': 'noise_10.png', 'path': 'noise_10.png'},
    {'name': 'noise_5.png', 'path': 'noise_5.png'},
    {'name': 'noise_2.png', 'path': 'noise_2.png'},
    {'name': 'badlands_119.jpg', 'path': 'badlands_119.jpg'},
    {'name': 'bridge_191.jpg', 'path': 'bridge_191.jpg'},
    {'name': 'golf_course_16.jpg', 'path': 'golf_course_16.jpg'},
    {'name': 'mountain_222.jpg', 'path': 'mountain_222.jpg'},
    {'name': 'highway_203.jpg', 'path': 'highway_203.jpg'},
    {'name': 'playground_268.jpg', 'path': 'playground_268.jpg'},
    {'name': 'noise_35.png', 'path': 'noise_35.png'},
    {'name': 'badlands_94.jpg', 'path': 'badlands_94.jpg'},
    {'name': 'mountain_154.jpg', 'path': 'mountain_154.jpg'},
    {'name': 'mountain_95.jpg', 'path': 'mountain_95.jpg'},
    {'name': 'badlands_222.jpg', 'path': 'badlands_222.jpg'},
    {'name': 'mountain_244.jpg', 'path': 'mountain_244.jpg'},
    {'name': 'golf_course_209.jpg', 'path': 'golf_course_209.jpg'},
    {'name': 'bridge_134.jpg', 'path': 'bridge_134.jpg'},
    {'name': 'playground_164.jpg', 'path': 'playground_164.jpg'},
    {'name': 'playground_229.jpg', 'path': 'playground_229.jpg'},
    {'name': 'playground_65.jpg', 'path': 'playground_65.jpg'},
    {'name': 'bridge_27.jpg', 'path': 'bridge_27.jpg'},
    {'name': 'mountain_97.jpg', 'path': 'mountain_97.jpg'},
    {'name': 'badlands_228.jpg', 'path': 'badlands_228.jpg'},
    {'name': 'noise_20.png', 'path': 'noise_20.png'},
    {'name': 'badlands_52.jpg', 'path': 'badlands_52.jpg'},
    {'name': 'playground_167.jpg', 'path': 'playground_167.jpg'},
    {'name': 'noise_16.png', 'path': 'noise_16.png'},
    {'name': 'bridge_250.jpg', 'path': 'bridge_250.jpg'},
    {'name': 'golf_course_123.jpg', 'path': 'golf_course_123.jpg'},
    {'name': 'bridge_163.jpg', 'path': 'bridge_163.jpg'},
    {'name': 'noise_8.png', 'path': 'noise_8.png'},
    {'name': 'badlands_114.jpg', 'path': 'badlands_114.jpg'},
    {'name': 'playground_12.jpg', 'path': 'playground_12.jpg'},
    {'name': 'noise_33.png', 'path': 'noise_33.png'},
    {'name': 'demo_encoding.xlsx', 'path': 'demo_encoding.xlsx'},
    {'name': 'highway_278.jpg', 'path': 'highway_278.jpg'},
    {'name': 'playground_144.jpg', 'path': 'playground_144.jpg'},
    {'name': 'mountain_232.jpg', 'path': 'mountain_232.jpg'},
    {'name': 'bridge_65.jpg', 'path': 'bridge_65.jpg'},
    {'name': 'badlands_101.jpg', 'path': 'badlands_101.jpg'},
    {'name': 'noise_32.png', 'path': 'noise_32.png'},
    {'name': 'badlands_115.jpg', 'path': 'badlands_115.jpg'},
    {'name': 'playground_127.jpg', 'path': 'playground_127.jpg'},
    {'name': 'highway_160.jpg', 'path': 'highway_160.jpg'},
    {'name': 'playground_43.jpg', 'path': 'playground_43.jpg'},
    {'name': 'flower1.jpg', 'path': 'flower1.jpg'},
    {'name': 'playground_60.jpg', 'path': 'playground_60.jpg'},
    {'name': 'highway_293.jpg', 'path': 'highway_293.jpg'},
    {'name': 'highway_314.jpg', 'path': 'highway_314.jpg'},
    {'name': 'bridge_253.jpg', 'path': 'bridge_253.jpg'},
    {'name': 'golf_course_331.jpg', 'path': 'golf_course_331.jpg'},
    {'name': 'golf_course_26.jpg', 'path': 'golf_course_26.jpg'},
    {'name': 'badlands_225.jpg', 'path': 'badlands_225.jpg'},
    {'name': 'badlands_184.jpg', 'path': 'badlands_184.jpg'},
    {'name': 'noise_13.png', 'path': 'noise_13.png'},
    {'name': 'highway_394.jpg', 'path': 'highway_394.jpg'},
    {'name': 'highway_369.jpg', 'path': 'highway_369.jpg'},
    {'name': 'highway_60.jpg', 'path': 'highway_60.jpg'},
    {'name': 'bridge_61.jpg', 'path': 'bridge_61.jpg'},
    {'name': 'highway_156.jpg', 'path': 'highway_156.jpg'},
    {'name': 'bridge_256.jpg', 'path': 'bridge_256.jpg'},
    {'name': 'noise_12.png', 'path': 'noise_12.png'},
    {'name': 'golf_course_101.jpg', 'path': 'golf_course_101.jpg'},
    {'name': 'noise_56.png', 'path': 'noise_56.png'},
    {'name': 'noise_54.png', 'path': 'noise_54.png'},
    {'name': 'golf_course_35.jpg', 'path': 'golf_course_35.jpg'},
    {'name': 'mountain_54.jpg', 'path': 'mountain_54.jpg'},
    {'name': 'noise_1.png', 'path': 'noise_1.png'},
    {'name': 'noise_14.png', 'path': 'noise_14.png'},
    {'name': 'badlands_24.jpg', 'path': 'badlands_24.jpg'},
    {'name': 'noise_57.png', 'path': 'noise_57.png'},
    {'name': 'golf_course_317.jpg', 'path': 'golf_course_317.jpg'},
    {'name': 'bridge_17.jpg', 'path': 'bridge_17.jpg'},
    {'name': 'noise_45.png', 'path': 'noise_45.png'},
    {'name': 'mountain_171.jpg', 'path': 'mountain_171.jpg'},
    {'name': 'mountain_193.jpg', 'path': 'mountain_193.jpg'},
    {'name': 'playground_40.jpg', 'path': 'playground_40.jpg'},
    {'name': 'playground_22.jpg', 'path': 'playground_22.jpg'},
    {'name': 'badlands_23.jpg', 'path': 'badlands_23.jpg'},
    {'name': 'mountain_157.jpg', 'path': 'mountain_157.jpg'},
    {'name': 'badlands_102.jpg', 'path': 'badlands_102.jpg'},
    {'name': 'playground_137.jpg', 'path': 'playground_137.jpg'},
    {'name': 'golf_course_130.jpg', 'path': 'golf_course_130.jpg'},
    {'name': 'bridge_211.jpg', 'path': 'bridge_211.jpg'},
    {'name': 'mountain_221.jpg', 'path': 'mountain_221.jpg'},
    {'name': 'mountain_230.jpg', 'path': 'mountain_230.jpg'},
    {'name': 'noise_50.png', 'path': 'noise_50.png'},
    {'name': 'playground_244.jpg', 'path': 'playground_244.jpg'},
    {'name': 'highway_368.jpg', 'path': 'highway_368.jpg'},
    {'name': 'bridge_91.jpg', 'path': 'bridge_91.jpg'},
    {'name': 'mountain_110.jpg', 'path': 'mountain_110.jpg'},
    {'name': 'flower6.jpg', 'path': 'flower6.jpg'},
    {'name': 'bridge_82.jpg', 'path': 'bridge_82.jpg'},
    {'name': 'playground_145.jpg', 'path': 'playground_145.jpg'},
    {'name': 'playground_242.jpg', 'path': 'playground_242.jpg'},
    {'name': 'highway_85.jpg', 'path': 'highway_85.jpg'},
    {'name': 'noise_49.png', 'path': 'noise_49.png'},
    {'name': 'badlands_98.jpg', 'path': 'badlands_98.jpg'},
    {'name': 'badlands_53.jpg', 'path': 'badlands_53.jpg'},
    {'name': 'mountain_131.jpg', 'path': 'mountain_131.jpg'},
    {'name': 'badlands_113.jpg', 'path': 'badlands_113.jpg'},
    {'name': 'noise_48.png', 'path': 'noise_48.png'},
    {'name': 'noise_6.png', 'path': 'noise_6.png'},
    {'name': 'golf_course_160.jpg', 'path': 'golf_course_160.jpg'},
    {'name': 'bridge_205.jpg', 'path': 'bridge_205.jpg'},
    {'name': 'highway_87.jpg', 'path': 'highway_87.jpg'},
    {'name': 'noise_27.png', 'path': 'noise_27.png'},
    {'name': 'noise_24.png', 'path': 'noise_24.png'},
    {'name': 'noise_53.png', 'path': 'noise_53.png'},
    {'name': 'noise_47.png', 'path': 'noise_47.png'},
    {'name': 'highway_294.jpg', 'path': 'highway_294.jpg'},
    {'name': 'golf_course_157.jpg', 'path': 'golf_course_157.jpg'},
    {'name': 'left.jpg', 'path': 'left.jpg'},
    {'name': 'noise_31.png', 'path': 'noise_31.png'},
    {'name': 'highway_406.jpg', 'path': 'highway_406.jpg'},
    {'name': 'noise_52.png', 'path': 'noise_52.png'},
    {'name': 'noise_9.png', 'path': 'noise_9.png'},
    {'name': 'highway_134.jpg', 'path': 'highway_134.jpg'},
    {'name': 'noise_38.png', 'path': 'noise_38.png'},
    {'name': 'noise_41.png', 'path': 'noise_41.png'},
    {'name': 'noise_44.png', 'path': 'noise_44.png'},
    {'name': 'noise_15.png', 'path': 'noise_15.png'},
    {'name': 'badlands_21.jpg', 'path': 'badlands_21.jpg'},
    {'name': 'playground_122.jpg', 'path': 'playground_122.jpg'},
    {'name': 'bridge_202.jpg', 'path': 'bridge_202.jpg'},
    {'name': 'bridge_184.jpg', 'path': 'bridge_184.jpg'},
    {'name': 'flower6_pair.jpg', 'path': 'flower6_pair.jpg'},
    {'name': 'bridge_172.jpg', 'path': 'bridge_172.jpg'},
    {'name': 'noise_39.png', 'path': 'noise_39.png'},
    {'name': 'golf_course_114.jpg', 'path': 'golf_course_114.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consent_formClock;
var key_resp;
var text_consent_form;
var instructions_1Clock;
var key_resp_2;
var text_instructions_1;
var demo_trialsClock;
var demo_target;
var image;
var demo_right_image;
var demo_left_image;
var key_resp_demo;
var choose_the_image_you_saw;
var instructions_before_expClock;
var key_resp_after_demo;
var text_after_demo_instr;
var exp_trialsClock;
var exp_target_image;
var exp_mask;
var exp_right_image;
var exp_left_image;
var text;
var key_resp_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent_form"
  consent_formClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_consent_form',
    text: 'hello',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instructions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_1',
    text: 'This experiment has two parts: \n\npart 1: \nA image will appear, and after you will choose the image you have previously seen. \n\npart 2: \nRate the similarity between pairs of images \n\nwe will begin with a short demo.\n\npress the space bar to begin. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "demo_trials"
  demo_trialsClock = new util.Clock();
  demo_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_target', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  demo_right_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_right_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  demo_left_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_left_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  choose_the_image_you_saw = new visual.TextStim({
    win: psychoJS.window,
    name: 'choose_the_image_you_saw',
    text: 'choose the image you have previously seen',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instructions_before_exp"
  instructions_before_expClock = new util.Clock();
  key_resp_after_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_after_demo_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_after_demo_instr',
    text: 'now the experiemnt will begin \n\npress the spacebar to begin. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "exp_trials"
  exp_trialsClock = new util.Clock();
  exp_target_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp_target_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp_mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp_mask', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp_right_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp_right_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  exp_left_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp_left_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var consent_formComponents;
function consent_formRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent_form'-------
    t = 0;
    consent_formClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    consent_formComponents = [];
    consent_formComponents.push(key_resp);
    consent_formComponents.push(text_consent_form);
    
    consent_formComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent_formRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent_form'-------
    // get current time
    t = consent_formClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_consent_form* updates
    if (t >= 0.0 && text_consent_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_consent_form.tStart = t;  // (not accounting for frame time here)
      text_consent_form.frameNStart = frameN;  // exact frame index
      
      text_consent_form.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent_formComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_formRoutineEnd() {
  return async function () {
    //------Ending Routine 'consent_form'-------
    consent_formComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "consent_form" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instructions_1Components;
function instructions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_1'-------
    t = 0;
    instructions_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructions_1Components = [];
    instructions_1Components.push(key_resp_2);
    instructions_1Components.push(text_instructions_1);
    
    instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_1'-------
    // get current time
    t = instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instructions_1* updates
    if (t >= 0.0 && text_instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_1.tStart = t;  // (not accounting for frame time here)
      text_instructions_1.frameNStart = frameN;  // exact frame index
      
      text_instructions_1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_1'-------
    instructions_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var demo_loop;
var currentLoop;
function demo_loopLoopBegin(demo_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demo_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'demo_encoding.xlsx',
      seed: undefined, name: 'demo_loop'
    });
    psychoJS.experiment.addLoop(demo_loop); // add the loop to the experiment
    currentLoop = demo_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    demo_loop.forEach(function() {
      const snapshot = demo_loop.getSnapshot();
    
      demo_loopLoopScheduler.add(importConditions(snapshot));
      demo_loopLoopScheduler.add(demo_trialsRoutineBegin(snapshot));
      demo_loopLoopScheduler.add(demo_trialsRoutineEachFrame());
      demo_loopLoopScheduler.add(demo_trialsRoutineEnd());
      demo_loopLoopScheduler.add(endLoopIteration(demo_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function demo_loopLoopEnd() {
  psychoJS.experiment.removeLoop(demo_loop);

  return Scheduler.Event.NEXT;
}


var exp_loops;
function exp_loopsLoopBegin(exp_loopsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp_loops = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'experiment_csv.csv',
      seed: undefined, name: 'exp_loops'
    });
    psychoJS.experiment.addLoop(exp_loops); // add the loop to the experiment
    currentLoop = exp_loops;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp_loops.forEach(function() {
      const snapshot = exp_loops.getSnapshot();
    
      exp_loopsLoopScheduler.add(importConditions(snapshot));
      exp_loopsLoopScheduler.add(exp_trialsRoutineBegin(snapshot));
      exp_loopsLoopScheduler.add(exp_trialsRoutineEachFrame());
      exp_loopsLoopScheduler.add(exp_trialsRoutineEnd());
      exp_loopsLoopScheduler.add(endLoopIteration(exp_loopsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp_loopsLoopEnd() {
  psychoJS.experiment.removeLoop(exp_loops);

  return Scheduler.Event.NEXT;
}


var _key_resp_demo_allKeys;
var demo_trialsComponents;
function demo_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'demo_trials'-------
    t = 0;
    demo_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    demo_target.setImage(demo_target_image);
    image.setImage(noise_pattern);
    demo_right_image.setImage(demo_test_image_right);
    demo_left_image.setImage(demo_test_image_left);
    key_resp_demo.keys = undefined;
    key_resp_demo.rt = undefined;
    _key_resp_demo_allKeys = [];
    // keep track of which components have finished
    demo_trialsComponents = [];
    demo_trialsComponents.push(demo_target);
    demo_trialsComponents.push(image);
    demo_trialsComponents.push(demo_right_image);
    demo_trialsComponents.push(demo_left_image);
    demo_trialsComponents.push(key_resp_demo);
    demo_trialsComponents.push(choose_the_image_you_saw);
    
    demo_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function demo_trialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'demo_trials'-------
    // get current time
    t = demo_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_target* updates
    if (t >= 0.0 && demo_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_target.tStart = t;  // (not accounting for frame time here)
      demo_target.frameNStart = frameN;  // exact frame index
      
      demo_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_target.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.15 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.15 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *demo_right_image* updates
    if (t >= 0.3 && demo_right_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_right_image.tStart = t;  // (not accounting for frame time here)
      demo_right_image.frameNStart = frameN;  // exact frame index
      
      demo_right_image.setAutoDraw(true);
    }

    
    // *demo_left_image* updates
    if (t >= 0.3 && demo_left_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_left_image.tStart = t;  // (not accounting for frame time here)
      demo_left_image.frameNStart = frameN;  // exact frame index
      
      demo_left_image.setAutoDraw(true);
    }

    
    // *key_resp_demo* updates
    if (t >= 0.3 && key_resp_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_demo.tStart = t;  // (not accounting for frame time here)
      key_resp_demo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_demo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_demo.clearEvents(); });
    }

    if (key_resp_demo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_demo.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_demo_allKeys = _key_resp_demo_allKeys.concat(theseKeys);
      if (_key_resp_demo_allKeys.length > 0) {
        key_resp_demo.keys = _key_resp_demo_allKeys[_key_resp_demo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_demo.rt = _key_resp_demo_allKeys[_key_resp_demo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *choose_the_image_you_saw* updates
    if (t >= 0.3 && choose_the_image_you_saw.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choose_the_image_you_saw.tStart = t;  // (not accounting for frame time here)
      choose_the_image_you_saw.frameNStart = frameN;  // exact frame index
      
      choose_the_image_you_saw.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demo_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_trialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'demo_trials'-------
    demo_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_demo.keys', key_resp_demo.keys);
    if (typeof key_resp_demo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_demo.rt', key_resp_demo.rt);
        routineTimer.reset();
        }
    
    key_resp_demo.stop();
    // the Routine "demo_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_after_demo_allKeys;
var instructions_before_expComponents;
function instructions_before_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_before_exp'-------
    t = 0;
    instructions_before_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_after_demo.keys = undefined;
    key_resp_after_demo.rt = undefined;
    _key_resp_after_demo_allKeys = [];
    // keep track of which components have finished
    instructions_before_expComponents = [];
    instructions_before_expComponents.push(key_resp_after_demo);
    instructions_before_expComponents.push(text_after_demo_instr);
    
    instructions_before_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_before_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_before_exp'-------
    // get current time
    t = instructions_before_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_after_demo* updates
    if (t >= 0.0 && key_resp_after_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_after_demo.tStart = t;  // (not accounting for frame time here)
      key_resp_after_demo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_after_demo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_after_demo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_after_demo.clearEvents(); });
    }

    if (key_resp_after_demo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_after_demo.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_after_demo_allKeys = _key_resp_after_demo_allKeys.concat(theseKeys);
      if (_key_resp_after_demo_allKeys.length > 0) {
        key_resp_after_demo.keys = _key_resp_after_demo_allKeys[_key_resp_after_demo_allKeys.length - 1].name;  // just the last key pressed
        key_resp_after_demo.rt = _key_resp_after_demo_allKeys[_key_resp_after_demo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_after_demo_instr* updates
    if (t >= 0.0 && text_after_demo_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_after_demo_instr.tStart = t;  // (not accounting for frame time here)
      text_after_demo_instr.frameNStart = frameN;  // exact frame index
      
      text_after_demo_instr.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_before_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_before_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_before_exp'-------
    instructions_before_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_after_demo.keys', key_resp_after_demo.keys);
    if (typeof key_resp_after_demo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_after_demo.rt', key_resp_after_demo.rt);
        routineTimer.reset();
        }
    
    key_resp_after_demo.stop();
    // the Routine "instructions_before_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var exp_trialsComponents;
function exp_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exp_trials'-------
    t = 0;
    exp_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exp_target_image.setImage(target);
    exp_mask.setImage(noise_image);
    exp_right_image.setImage(image1);
    exp_left_image.setImage(image2);
    text.setText('+');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    exp_trialsComponents = [];
    exp_trialsComponents.push(exp_target_image);
    exp_trialsComponents.push(exp_mask);
    exp_trialsComponents.push(exp_right_image);
    exp_trialsComponents.push(exp_left_image);
    exp_trialsComponents.push(text);
    exp_trialsComponents.push(key_resp_3);
    
    exp_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_trialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exp_trials'-------
    // get current time
    t = exp_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp_target_image* updates
    if (t >= 0.5 && exp_target_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_target_image.tStart = t;  // (not accounting for frame time here)
      exp_target_image.frameNStart = frameN;  // exact frame index
      
      exp_target_image.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp_target_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp_target_image.setAutoDraw(false);
    }
    
    // *exp_mask* updates
    if (t >= 0.6 && exp_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_mask.tStart = t;  // (not accounting for frame time here)
      exp_mask.frameNStart = frameN;  // exact frame index
      
      exp_mask.setAutoDraw(true);
    }

    frameRemains = 0.6 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp_mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp_mask.setAutoDraw(false);
    }
    
    // *exp_right_image* updates
    if (t >= 1.6 && exp_right_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_right_image.tStart = t;  // (not accounting for frame time here)
      exp_right_image.frameNStart = frameN;  // exact frame index
      
      exp_right_image.setAutoDraw(true);
    }

    
    // *exp_left_image* updates
    if (t >= 1.6 && exp_left_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_left_image.tStart = t;  // (not accounting for frame time here)
      exp_left_image.frameNStart = frameN;  // exact frame index
      
      exp_left_image.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 1.6 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_trialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'exp_trials'-------
    exp_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "exp_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
