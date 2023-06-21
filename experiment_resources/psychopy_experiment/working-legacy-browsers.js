/**************** 
 * Working Test *
 ****************/


// store info about the experiment session:
let expName = 'working';  // from the Builder filename that created this script
let expInfo = {'ID': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
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
const demo_loopsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demo_loopsLoopBegin(demo_loopsLoopScheduler));
flowScheduler.add(demo_loopsLoopScheduler);
flowScheduler.add(demo_loopsLoopEnd);
flowScheduler.add(instructions_before_expRoutineBegin());
flowScheduler.add(instructions_before_expRoutineEachFrame());
flowScheduler.add(instructions_before_expRoutineEnd());
const exp_loopsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp_loopsLoopBegin(exp_loopsLoopScheduler));
flowScheduler.add(exp_loopsLoopScheduler);
flowScheduler.add(exp_loopsLoopEnd);
flowScheduler.add(instructions_after_part1RoutineBegin());
flowScheduler.add(instructions_after_part1RoutineEachFrame());
flowScheduler.add(instructions_after_part1RoutineEnd());
const exp_loops_part2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp_loops_part2LoopBegin(exp_loops_part2LoopScheduler));
flowScheduler.add(exp_loops_part2LoopScheduler);
flowScheduler.add(exp_loops_part2LoopEnd);
flowScheduler.add(last_slideRoutineBegin());
flowScheduler.add(last_slideRoutineEachFrame());
flowScheduler.add(last_slideRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'highway_204.jpg', 'path': 'highway_204.jpg'},
    {'name': 'sub_98.csv', 'path': 'sub_98.csv'},
    {'name': 'mountain_206.jpg', 'path': 'mountain_206.jpg'},
    {'name': 'badlands_94.jpg', 'path': 'badlands_94.jpg'},
    {'name': 'golf_course_297.jpg', 'path': 'golf_course_297.jpg'},
    {'name': 'golf_course_312.jpg', 'path': 'golf_course_312.jpg'},
    {'name': 'mountain_226.jpg', 'path': 'mountain_226.jpg'},
    {'name': 'sub_43.csv', 'path': 'sub_43.csv'},
    {'name': 'golf_course_15.jpg', 'path': 'golf_course_15.jpg'},
    {'name': 'highway_28.jpg', 'path': 'highway_28.jpg'},
    {'name': 'badlands_104.jpg', 'path': 'badlands_104.jpg'},
    {'name': 'badlands_203.jpg', 'path': 'badlands_203.jpg'},
    {'name': 'playground_176.jpg', 'path': 'playground_176.jpg'},
    {'name': 'bridge_158.jpg', 'path': 'bridge_158.jpg'},
    {'name': 'bridge_62.jpg', 'path': 'bridge_62.jpg'},
    {'name': 'badlands_3.jpg', 'path': 'badlands_3.jpg'},
    {'name': 'playground_33.jpg', 'path': 'playground_33.jpg'},
    {'name': 'highway_199.jpg', 'path': 'highway_199.jpg'},
    {'name': 'playground_268.jpg', 'path': 'playground_268.jpg'},
    {'name': 'mountain_302.jpg', 'path': 'mountain_302.jpg'},
    {'name': 'bird2.jpg', 'path': 'bird2.jpg'},
    {'name': 'badlands_115.jpg', 'path': 'badlands_115.jpg'},
    {'name': 'highway_191.jpg', 'path': 'highway_191.jpg'},
    {'name': 'golf_course_127.jpg', 'path': 'golf_course_127.jpg'},
    {'name': 'highway_107.jpg', 'path': 'highway_107.jpg'},
    {'name': 'playground_131.jpg', 'path': 'playground_131.jpg'},
    {'name': 'golf_course_291.jpg', 'path': 'golf_course_291.jpg'},
    {'name': 'sub_16.csv', 'path': 'sub_16.csv'},
    {'name': 'sub_41.csv', 'path': 'sub_41.csv'},
    {'name': 'sub_65.csv', 'path': 'sub_65.csv'},
    {'name': 'badlands_215.jpg', 'path': 'badlands_215.jpg'},
    {'name': 'sub_89.csv', 'path': 'sub_89.csv'},
    {'name': 'badlands_60.jpg', 'path': 'badlands_60.jpg'},
    {'name': 'sub_39.csv', 'path': 'sub_39.csv'},
    {'name': 'highway_246.jpg', 'path': 'highway_246.jpg'},
    {'name': 'highway_174.jpg', 'path': 'highway_174.jpg'},
    {'name': 'mountain_204.jpg', 'path': 'mountain_204.jpg'},
    {'name': 'playground_16.jpg', 'path': 'playground_16.jpg'},
    {'name': 'sub_27.csv', 'path': 'sub_27.csv'},
    {'name': 'badlands_33.jpg', 'path': 'badlands_33.jpg'},
    {'name': 'golf_course_328.jpg', 'path': 'golf_course_328.jpg'},
    {'name': 'sub_32.csv', 'path': 'sub_32.csv'},
    {'name': 'highway_319.jpg', 'path': 'highway_319.jpg'},
    {'name': 'sub_68.csv', 'path': 'sub_68.csv'},
    {'name': 'playground_204.jpg', 'path': 'playground_204.jpg'},
    {'name': 'bridge_74.jpg', 'path': 'bridge_74.jpg'},
    {'name': 'badlands_200.jpg', 'path': 'badlands_200.jpg'},
    {'name': 'highway_36.jpg', 'path': 'highway_36.jpg'},
    {'name': 'golf_course_253.jpg', 'path': 'golf_course_253.jpg'},
    {'name': 'badlands_80.jpg', 'path': 'badlands_80.jpg'},
    {'name': 'mountain_126.jpg', 'path': 'mountain_126.jpg'},
    {'name': 'highway_293.jpg', 'path': 'highway_293.jpg'},
    {'name': 'golf_course_305.jpg', 'path': 'golf_course_305.jpg'},
    {'name': 'flower1_pair.jpg', 'path': 'flower1_pair.jpg'},
    {'name': 'mountain_256.jpg', 'path': 'mountain_256.jpg'},
    {'name': 'bridge_205.jpg', 'path': 'bridge_205.jpg'},
    {'name': 'fence2.jpg', 'path': 'fence2.jpg'},
    {'name': 'playground_144.jpg', 'path': 'playground_144.jpg'},
    {'name': 'playground_42.jpg', 'path': 'playground_42.jpg'},
    {'name': 'golf_course_214.jpg', 'path': 'golf_course_214.jpg'},
    {'name': 'golf_course_199.jpg', 'path': 'golf_course_199.jpg'},
    {'name': 'badlands_20.jpg', 'path': 'badlands_20.jpg'},
    {'name': 'golf_course_333.jpg', 'path': 'golf_course_333.jpg'},
    {'name': 'golf_course_25.jpg', 'path': 'golf_course_25.jpg'},
    {'name': 'badlands_173.jpg', 'path': 'badlands_173.jpg'},
    {'name': 'playground_30.jpg', 'path': 'playground_30.jpg'},
    {'name': 'playground_256.jpg', 'path': 'playground_256.jpg'},
    {'name': 'bridge_143.jpg', 'path': 'bridge_143.jpg'},
    {'name': 'sub_58.csv', 'path': 'sub_58.csv'},
    {'name': 'mountain_92.jpg', 'path': 'mountain_92.jpg'},
    {'name': 'badlands_101.jpg', 'path': 'badlands_101.jpg'},
    {'name': 'golf_course_33.jpg', 'path': 'golf_course_33.jpg'},
    {'name': 'sub_11.csv', 'path': 'sub_11.csv'},
    {'name': 'playground_246.jpg', 'path': 'playground_246.jpg'},
    {'name': 'highway_60.jpg', 'path': 'highway_60.jpg'},
    {'name': 'golf_course_174.jpg', 'path': 'golf_course_174.jpg'},
    {'name': 'playground_85.jpg', 'path': 'playground_85.jpg'},
    {'name': 'mountain_88.jpg', 'path': 'mountain_88.jpg'},
    {'name': 'mountain_89.jpg', 'path': 'mountain_89.jpg'},
    {'name': 'highway_50.jpg', 'path': 'highway_50.jpg'},
    {'name': 'highway_295.jpg', 'path': 'highway_295.jpg'},
    {'name': 'playground_50.jpg', 'path': 'playground_50.jpg'},
    {'name': 'golf_course_114.jpg', 'path': 'golf_course_114.jpg'},
    {'name': 'demo_encoding.xlsx', 'path': 'demo_encoding.xlsx'},
    {'name': 'sub_49.csv', 'path': 'sub_49.csv'},
    {'name': 'sub_91.csv', 'path': 'sub_91.csv'},
    {'name': 'mountain_253.jpg', 'path': 'mountain_253.jpg'},
    {'name': 'highway_171.jpg', 'path': 'highway_171.jpg'},
    {'name': 'mountain_123.jpg', 'path': 'mountain_123.jpg'},
    {'name': 'badlands_53.jpg', 'path': 'badlands_53.jpg'},
    {'name': 'highway_274.jpg', 'path': 'highway_274.jpg'},
    {'name': 'bridge_167.jpg', 'path': 'bridge_167.jpg'},
    {'name': 'badlands_201.jpg', 'path': 'badlands_201.jpg'},
    {'name': 'bridge_4.jpg', 'path': 'bridge_4.jpg'},
    {'name': 'golf_course_162.jpg', 'path': 'golf_course_162.jpg'},
    {'name': 'sub_74.csv', 'path': 'sub_74.csv'},
    {'name': 'highway_206.jpg', 'path': 'highway_206.jpg'},
    {'name': 'playground_6.jpg', 'path': 'playground_6.jpg'},
    {'name': 'badlands_119.jpg', 'path': 'badlands_119.jpg'},
    {'name': 'sub_51.csv', 'path': 'sub_51.csv'},
    {'name': 'playground_154.jpg', 'path': 'playground_154.jpg'},
    {'name': 'sub_53.csv', 'path': 'sub_53.csv'},
    {'name': 'golf_course_97.jpg', 'path': 'golf_course_97.jpg'},
    {'name': 'golf_course_171.jpg', 'path': 'golf_course_171.jpg'},
    {'name': 'highway_413.jpg', 'path': 'highway_413.jpg'},
    {'name': 'highway_138.jpg', 'path': 'highway_138.jpg'},
    {'name': 'mountain_128.jpg', 'path': 'mountain_128.jpg'},
    {'name': 'highway_368.jpg', 'path': 'highway_368.jpg'},
    {'name': 'playground_215.jpg', 'path': 'playground_215.jpg'},
    {'name': 'mountain_190.jpg', 'path': 'mountain_190.jpg'},
    {'name': 'playground_222.jpg', 'path': 'playground_222.jpg'},
    {'name': 'playground_214.jpg', 'path': 'playground_214.jpg'},
    {'name': 'playground_21.jpg', 'path': 'playground_21.jpg'},
    {'name': 'badlands_216.jpg', 'path': 'badlands_216.jpg'},
    {'name': 'mountain_180.jpg', 'path': 'mountain_180.jpg'},
    {'name': 'golf_course_288.jpg', 'path': 'golf_course_288.jpg'},
    {'name': 'playground_141.jpg', 'path': 'playground_141.jpg'},
    {'name': 'highway_154.jpg', 'path': 'highway_154.jpg'},
    {'name': 'highway_160.jpg', 'path': 'highway_160.jpg'},
    {'name': 'playground_140.jpg', 'path': 'playground_140.jpg'},
    {'name': 'mountain_294.jpg', 'path': 'mountain_294.jpg'},
    {'name': 'bridge_54.jpg', 'path': 'bridge_54.jpg'},
    {'name': 'golf_course_309.jpg', 'path': 'golf_course_309.jpg'},
    {'name': 'golf_course_61.jpg', 'path': 'golf_course_61.jpg'},
    {'name': 'mountain_221.jpg', 'path': 'mountain_221.jpg'},
    {'name': 'highway_384.jpg', 'path': 'highway_384.jpg'},
    {'name': 'bridge_20.jpg', 'path': 'bridge_20.jpg'},
    {'name': 'bridge_169.jpg', 'path': 'bridge_169.jpg'},
    {'name': 'golf_course_212.jpg', 'path': 'golf_course_212.jpg'},
    {'name': 'highway_315.jpg', 'path': 'highway_315.jpg'},
    {'name': 'golf_course_195.jpg', 'path': 'golf_course_195.jpg'},
    {'name': 'sub_0.csv', 'path': 'sub_0.csv'},
    {'name': 'sub_79.csv', 'path': 'sub_79.csv'},
    {'name': 'highway_87.jpg', 'path': 'highway_87.jpg'},
    {'name': 'badlands_166.jpg', 'path': 'badlands_166.jpg'},
    {'name': 'sub_50.csv', 'path': 'sub_50.csv'},
    {'name': 'golf_course_217.jpg', 'path': 'golf_course_217.jpg'},
    {'name': 'highway_354.jpg', 'path': 'highway_354.jpg'},
    {'name': 'playground_65.jpg', 'path': 'playground_65.jpg'},
    {'name': 'highway_288.jpg', 'path': 'highway_288.jpg'},
    {'name': 'sub_21.csv', 'path': 'sub_21.csv'},
    {'name': 'golf_course_342.jpg', 'path': 'golf_course_342.jpg'},
    {'name': 'sub_46.csv', 'path': 'sub_46.csv'},
    {'name': 'highway_313.jpg', 'path': 'highway_313.jpg'},
    {'name': 'sub_80.csv', 'path': 'sub_80.csv'},
    {'name': 'golf_course_113.jpg', 'path': 'golf_course_113.jpg'},
    {'name': 'playground_184.jpg', 'path': 'playground_184.jpg'},
    {'name': 'sub_45.csv', 'path': 'sub_45.csv'},
    {'name': 'bird1.jpg', 'path': 'bird1.jpg'},
    {'name': 'bridge_136.jpg', 'path': 'bridge_136.jpg'},
    {'name': 'mountain_93.jpg', 'path': 'mountain_93.jpg'},
    {'name': 'index.html', 'path': 'index.html'},
    {'name': 'highway_290.jpg', 'path': 'highway_290.jpg'},
    {'name': 'mountain_228.jpg', 'path': 'mountain_228.jpg'},
    {'name': 'bridge_256.jpg', 'path': 'bridge_256.jpg'},
    {'name': 'mountain_230.jpg', 'path': 'mountain_230.jpg'},
    {'name': 'sub_13.csv', 'path': 'sub_13.csv'},
    {'name': 'playground_10.jpg', 'path': 'playground_10.jpg'},
    {'name': 'bridge_24.jpg', 'path': 'bridge_24.jpg'},
    {'name': 'bridge_120.jpg', 'path': 'bridge_120.jpg'},
    {'name': 'mountain_62.jpg', 'path': 'mountain_62.jpg'},
    {'name': 'highway_90.jpg', 'path': 'highway_90.jpg'},
    {'name': 'playground_257.jpg', 'path': 'playground_257.jpg'},
    {'name': 'mountain_40.jpg', 'path': 'mountain_40.jpg'},
    {'name': 'playground_15.jpg', 'path': 'playground_15.jpg'},
    {'name': 'golf_course_3.jpg', 'path': 'golf_course_3.jpg'},
    {'name': 'playground_227.jpg', 'path': 'playground_227.jpg'},
    {'name': 'golf_course_221.jpg', 'path': 'golf_course_221.jpg'},
    {'name': 'sub_60.csv', 'path': 'sub_60.csv'},
    {'name': 'mountain_233.jpg', 'path': 'mountain_233.jpg'},
    {'name': 'golf_course_188.jpg', 'path': 'golf_course_188.jpg'},
    {'name': 'badlands_97.jpg', 'path': 'badlands_97.jpg'},
    {'name': 'highway_415.jpg', 'path': 'highway_415.jpg'},
    {'name': 'bridge_121.jpg', 'path': 'bridge_121.jpg'},
    {'name': 'bridge_66.jpg', 'path': 'bridge_66.jpg'},
    {'name': 'highway_141.jpg', 'path': 'highway_141.jpg'},
    {'name': 'golf_course_72.jpg', 'path': 'golf_course_72.jpg'},
    {'name': 'playground_122.jpg', 'path': 'playground_122.jpg'},
    {'name': 'bridge_124.jpg', 'path': 'bridge_124.jpg'},
    {'name': 'badlands_139.jpg', 'path': 'badlands_139.jpg'},
    {'name': 'mountain_295.jpg', 'path': 'mountain_295.jpg'},
    {'name': 'badlands_156.jpg', 'path': 'badlands_156.jpg'},
    {'name': 'mountain_131.jpg', 'path': 'mountain_131.jpg'},
    {'name': 'golf_course_116.jpg', 'path': 'golf_course_116.jpg'},
    {'name': 'mountain_193.jpg', 'path': 'mountain_193.jpg'},
    {'name': 'golf_course_157.jpg', 'path': 'golf_course_157.jpg'},
    {'name': 'badlands_164.jpg', 'path': 'badlands_164.jpg'},
    {'name': 'trail3.jpg', 'path': 'trail3.jpg'},
    {'name': 'mountain_249.jpg', 'path': 'mountain_249.jpg'},
    {'name': 'bridge_144.jpg', 'path': 'bridge_144.jpg'},
    {'name': 'golf_course_59.jpg', 'path': 'golf_course_59.jpg'},
    {'name': 'badlands_103.jpg', 'path': 'badlands_103.jpg'},
    {'name': 'playground_126.jpg', 'path': 'playground_126.jpg'},
    {'name': 'badlands_227.jpg', 'path': 'badlands_227.jpg'},
    {'name': 'bridge_1.jpg', 'path': 'bridge_1.jpg'},
    {'name': 'leaf2.jpg', 'path': 'leaf2.jpg'},
    {'name': 'leaf3.jpg', 'path': 'leaf3.jpg'},
    {'name': 'sub_81.csv', 'path': 'sub_81.csv'},
    {'name': 'highway_148.jpg', 'path': 'highway_148.jpg'},
    {'name': 'playground_54.jpg', 'path': 'playground_54.jpg'},
    {'name': 'badlands_194.jpg', 'path': 'badlands_194.jpg'},
    {'name': 'mountain_47.jpg', 'path': 'mountain_47.jpg'},
    {'name': 'golf_course_161.jpg', 'path': 'golf_course_161.jpg'},
    {'name': 'mountain_290.jpg', 'path': 'mountain_290.jpg'},
    {'name': 'badlands_9.jpg', 'path': 'badlands_9.jpg'},
    {'name': 'badlands_47.jpg', 'path': 'badlands_47.jpg'},
    {'name': 'golf_course_262.jpg', 'path': 'golf_course_262.jpg'},
    {'name': 'badlands_6.jpg', 'path': 'badlands_6.jpg'},
    {'name': 'golf_course_0.jpg', 'path': 'golf_course_0.jpg'},
    {'name': 'mountain_54.jpg', 'path': 'mountain_54.jpg'},
    {'name': 'sub_73.csv', 'path': 'sub_73.csv'},
    {'name': 'golf_course_26.jpg', 'path': 'golf_course_26.jpg'},
    {'name': 'badlands_70.jpg', 'path': 'badlands_70.jpg'},
    {'name': 'badlands_211.jpg', 'path': 'badlands_211.jpg'},
    {'name': 'golf_course_2.jpg', 'path': 'golf_course_2.jpg'},
    {'name': 'badlands_221.jpg', 'path': 'badlands_221.jpg'},
    {'name': 'bridge_110.jpg', 'path': 'bridge_110.jpg'},
    {'name': 'mountain_154.jpg', 'path': 'mountain_154.jpg'},
    {'name': 'golf_course_41.jpg', 'path': 'golf_course_41.jpg'},
    {'name': 'bridge_87.jpg', 'path': 'bridge_87.jpg'},
    {'name': 'sub_75.csv', 'path': 'sub_75.csv'},
    {'name': 'playground_181.jpg', 'path': 'playground_181.jpg'},
    {'name': 'mountain_187.jpg', 'path': 'mountain_187.jpg'},
    {'name': 'bridge_253.jpg', 'path': 'bridge_253.jpg'},
    {'name': 'bridge_228.jpg', 'path': 'bridge_228.jpg'},
    {'name': 'sub_29.csv', 'path': 'sub_29.csv'},
    {'name': 'highway_81.jpg', 'path': 'highway_81.jpg'},
    {'name': 'mountain_51.jpg', 'path': 'mountain_51.jpg'},
    {'name': 'mountain_176.jpg', 'path': 'mountain_176.jpg'},
    {'name': 'mountain_192.jpg', 'path': 'mountain_192.jpg'},
    {'name': 'golf_course_120.jpg', 'path': 'golf_course_120.jpg'},
    {'name': 'playground_7.jpg', 'path': 'playground_7.jpg'},
    {'name': 'golf_course_123.jpg', 'path': 'golf_course_123.jpg'},
    {'name': 'golf_course_209.jpg', 'path': 'golf_course_209.jpg'},
    {'name': 'sub_94.csv', 'path': 'sub_94.csv'},
    {'name': 'sub_12.csv', 'path': 'sub_12.csv'},
    {'name': 'badlands_55.jpg', 'path': 'badlands_55.jpg'},
    {'name': 'golf_course_218.jpg', 'path': 'golf_course_218.jpg'},
    {'name': 'bridge_116.jpg', 'path': 'bridge_116.jpg'},
    {'name': 'sub_22.csv', 'path': 'sub_22.csv'},
    {'name': 'sub_84.csv', 'path': 'sub_84.csv'},
    {'name': 'highway_33.jpg', 'path': 'highway_33.jpg'},
    {'name': 'badlands_26.jpg', 'path': 'badlands_26.jpg'},
    {'name': 'bridge_147.jpg', 'path': 'bridge_147.jpg'},
    {'name': 'sub_82.csv', 'path': 'sub_82.csv'},
    {'name': 'playground_118.jpg', 'path': 'playground_118.jpg'},
    {'name': 'mountain_110.jpg', 'path': 'mountain_110.jpg'},
    {'name': 'playground_72.jpg', 'path': 'playground_72.jpg'},
    {'name': 'badlands_185.jpg', 'path': 'badlands_185.jpg'},
    {'name': 'golf_course_194.jpg', 'path': 'golf_course_194.jpg'},
    {'name': 'golf_course_102.jpg', 'path': 'golf_course_102.jpg'},
    {'name': 'playground_98.jpg', 'path': 'playground_98.jpg'},
    {'name': 'golf_course_56.jpg', 'path': 'golf_course_56.jpg'},
    {'name': 'sub_61.csv', 'path': 'sub_61.csv'},
    {'name': 'badlands_228.jpg', 'path': 'badlands_228.jpg'},
    {'name': 'badlands_88.jpg', 'path': 'badlands_88.jpg'},
    {'name': 'golf_course_164.jpg', 'path': 'golf_course_164.jpg'},
    {'name': 'highway_359.jpg', 'path': 'highway_359.jpg'},
    {'name': 'playground_14.jpg', 'path': 'playground_14.jpg'},
    {'name': 'bridge_250.jpg', 'path': 'bridge_250.jpg'},
    {'name': 'playground_64.jpg', 'path': 'playground_64.jpg'},
    {'name': 'sub_31.csv', 'path': 'sub_31.csv'},
    {'name': 'sub_57.csv', 'path': 'sub_57.csv'},
    {'name': 'highway_85.jpg', 'path': 'highway_85.jpg'},
    {'name': 'sub_70.csv', 'path': 'sub_70.csv'},
    {'name': 'highway_156.jpg', 'path': 'highway_156.jpg'},
    {'name': 'bridge_164.jpg', 'path': 'bridge_164.jpg'},
    {'name': 'badlands_62.jpg', 'path': 'badlands_62.jpg'},
    {'name': 'golf_course_176.jpg', 'path': 'golf_course_176.jpg'},
    {'name': 'highway_102.jpg', 'path': 'highway_102.jpg'},
    {'name': 'golf_course_23.jpg', 'path': 'golf_course_23.jpg'},
    {'name': 'highway_193.jpg', 'path': 'highway_193.jpg'},
    {'name': 'bridge_75.jpg', 'path': 'bridge_75.jpg'},
    {'name': 'golf_course_42.jpg', 'path': 'golf_course_42.jpg'},
    {'name': 'playground_22.jpg', 'path': 'playground_22.jpg'},
    {'name': 'mountain_101.jpg', 'path': 'mountain_101.jpg'},
    {'name': 'sub_6.csv', 'path': 'sub_6.csv'},
    {'name': 'badlands_35.jpg', 'path': 'badlands_35.jpg'},
    {'name': 'badlands_98.jpg', 'path': 'badlands_98.jpg'},
    {'name': 'playground_248.jpg', 'path': 'playground_248.jpg'},
    {'name': 'playground_2.jpg', 'path': 'playground_2.jpg'},
    {'name': 'golf_course_179.jpg', 'path': 'golf_course_179.jpg'},
    {'name': 'playground_258.jpg', 'path': 'playground_258.jpg'},
    {'name': 'highway_17.jpg', 'path': 'highway_17.jpg'},
    {'name': 'playground_60.jpg', 'path': 'playground_60.jpg'},
    {'name': 'tree2.jpg', 'path': 'tree2.jpg'},
    {'name': 'bridge_212.jpg', 'path': 'bridge_212.jpg'},
    {'name': 'playground_164.jpg', 'path': 'playground_164.jpg'},
    {'name': 'bridge_27.jpg', 'path': 'bridge_27.jpg'},
    {'name': 'highway_379.jpg', 'path': 'highway_379.jpg'},
    {'name': 'golf_course_196.jpg', 'path': 'golf_course_196.jpg'},
    {'name': 'playground_68.jpg', 'path': 'playground_68.jpg'},
    {'name': 'bridge_197.jpg', 'path': 'bridge_197.jpg'},
    {'name': 'golf_course_313.jpg', 'path': 'golf_course_313.jpg'},
    {'name': 'mountain_135.jpg', 'path': 'mountain_135.jpg'},
    {'name': 'sub_34.csv', 'path': 'sub_34.csv'},
    {'name': 'mountain_268.jpg', 'path': 'mountain_268.jpg'},
    {'name': 'bridge_191.jpg', 'path': 'bridge_191.jpg'},
    {'name': 'highway_83.jpg', 'path': 'highway_83.jpg'},
    {'name': 'badlands_225.jpg', 'path': 'badlands_225.jpg'},
    {'name': 'bridge_204.jpg', 'path': 'bridge_204.jpg'},
    {'name': 'badlands_10.jpg', 'path': 'badlands_10.jpg'},
    {'name': 'sub_15.csv', 'path': 'sub_15.csv'},
    {'name': 'mountain_19.jpg', 'path': 'mountain_19.jpg'},
    {'name': 'trail1.jpg', 'path': 'trail1.jpg'},
    {'name': 'mountain_222.jpg', 'path': 'mountain_222.jpg'},
    {'name': 'bridge_155.jpg', 'path': 'bridge_155.jpg'},
    {'name': 'golf_course_105.jpg', 'path': 'golf_course_105.jpg'},
    {'name': 'leaf1.jpg', 'path': 'leaf1.jpg'},
    {'name': 'highway_203.jpg', 'path': 'highway_203.jpg'},
    {'name': 'playground_36.jpg', 'path': 'playground_36.jpg'},
    {'name': 'highway_76.jpg', 'path': 'highway_76.jpg'},
    {'name': 'badlands_157.jpg', 'path': 'badlands_157.jpg'},
    {'name': 'mountain_293.jpg', 'path': 'mountain_293.jpg'},
    {'name': 'bridge_68.jpg', 'path': 'bridge_68.jpg'},
    {'name': 'sub_30.csv', 'path': 'sub_30.csv'},
    {'name': 'bridge_134.jpg', 'path': 'bridge_134.jpg'},
    {'name': 'sub_67.csv', 'path': 'sub_67.csv'},
    {'name': 'bridge_102.jpg', 'path': 'bridge_102.jpg'},
    {'name': 'highway_209.jpg', 'path': 'highway_209.jpg'},
    {'name': 'sub_23.csv', 'path': 'sub_23.csv'},
    {'name': 'mountain_202.jpg', 'path': 'mountain_202.jpg'},
    {'name': 'flower3.jpg', 'path': 'flower3.jpg'},
    {'name': 'bridge_118.jpg', 'path': 'bridge_118.jpg'},
    {'name': 'playground_196.jpg', 'path': 'playground_196.jpg'},
    {'name': 'bridge_152.jpg', 'path': 'bridge_152.jpg'},
    {'name': 'bridge_52.jpg', 'path': 'bridge_52.jpg'},
    {'name': 'bridge_173.jpg', 'path': 'bridge_173.jpg'},
    {'name': 'badlands_120.jpg', 'path': 'badlands_120.jpg'},
    {'name': 'golf_course_317.jpg', 'path': 'golf_course_317.jpg'},
    {'name': 'mountain_169.jpg', 'path': 'mountain_169.jpg'},
    {'name': 'sub_20.csv', 'path': 'sub_20.csv'},
    {'name': 'highway_78.jpg', 'path': 'highway_78.jpg'},
    {'name': 'mountain_151.jpg', 'path': 'mountain_151.jpg'},
    {'name': 'sub_44.csv', 'path': 'sub_44.csv'},
    {'name': 'mountain_29.jpg', 'path': 'mountain_29.jpg'},
    {'name': 'playground_78.jpg', 'path': 'playground_78.jpg'},
    {'name': 'mountain_166.jpg', 'path': 'mountain_166.jpg'},
    {'name': 'bridge_38.jpg', 'path': 'bridge_38.jpg'},
    {'name': 'sub_42.csv', 'path': 'sub_42.csv'},
    {'name': 'highway_3.jpg', 'path': 'highway_3.jpg'},
    {'name': 'sub_47.csv', 'path': 'sub_47.csv'},
    {'name': 'golf_course_166.jpg', 'path': 'golf_course_166.jpg'},
    {'name': 'highway_273.jpg', 'path': 'highway_273.jpg'},
    {'name': 'playground_165.jpg', 'path': 'playground_165.jpg'},
    {'name': 'badlands_52.jpg', 'path': 'badlands_52.jpg'},
    {'name': 'badlands_105.jpg', 'path': 'badlands_105.jpg'},
    {'name': 'highway_172.jpg', 'path': 'highway_172.jpg'},
    {'name': 'bridge_146.jpg', 'path': 'bridge_146.jpg'},
    {'name': 'mountain_43.jpg', 'path': 'mountain_43.jpg'},
    {'name': 'sub_5.csv', 'path': 'sub_5.csv'},
    {'name': 'highway_15.jpg', 'path': 'highway_15.jpg'},
    {'name': 'mountain_143.jpg', 'path': 'mountain_143.jpg'},
    {'name': 'mountain_223.jpg', 'path': 'mountain_223.jpg'},
    {'name': 'playground_235.jpg', 'path': 'playground_235.jpg'},
    {'name': 'sub_88.csv', 'path': 'sub_88.csv'},
    {'name': 'golf_course_338.jpg', 'path': 'golf_course_338.jpg'},
    {'name': 'golf_course_219.jpg', 'path': 'golf_course_219.jpg'},
    {'name': 'golf_course_300.jpg', 'path': 'golf_course_300.jpg'},
    {'name': 'mountain_189.jpg', 'path': 'mountain_189.jpg'},
    {'name': 'sub_96.csv', 'path': 'sub_96.csv'},
    {'name': 'badlands_23.jpg', 'path': 'badlands_23.jpg'},
    {'name': 'bridge_156.jpg', 'path': 'bridge_156.jpg'},
    {'name': 'bridge_117.jpg', 'path': 'bridge_117.jpg'},
    {'name': 'sub_4.csv', 'path': 'sub_4.csv'},
    {'name': 'bridge_238.jpg', 'path': 'bridge_238.jpg'},
    {'name': 'mountain_171.jpg', 'path': 'mountain_171.jpg'},
    {'name': 'mountain_156.jpg', 'path': 'mountain_156.jpg'},
    {'name': 'playground_244.jpg', 'path': 'playground_244.jpg'},
    {'name': 'badlands_36.jpg', 'path': 'badlands_36.jpg'},
    {'name': 'mountain_160.jpg', 'path': 'mountain_160.jpg'},
    {'name': 'playground_132.jpg', 'path': 'playground_132.jpg'},
    {'name': 'golf_course_101.jpg', 'path': 'golf_course_101.jpg'},
    {'name': 'sub_95.csv', 'path': 'sub_95.csv'},
    {'name': 'sub_76.csv', 'path': 'sub_76.csv'},
    {'name': 'golf_course_78.jpg', 'path': 'golf_course_78.jpg'},
    {'name': 'mountain_152.jpg', 'path': 'mountain_152.jpg'},
    {'name': 'mountain_91.jpg', 'path': 'mountain_91.jpg'},
    {'name': 'badlands_150.jpg', 'path': 'badlands_150.jpg'},
    {'name': 'mountain_120.jpg', 'path': 'mountain_120.jpg'},
    {'name': 'sub_85.csv', 'path': 'sub_85.csv'},
    {'name': 'playground_110.jpg', 'path': 'playground_110.jpg'},
    {'name': 'golf_course_128.jpg', 'path': 'golf_course_128.jpg'},
    {'name': 'badlands_121.jpg', 'path': 'badlands_121.jpg'},
    {'name': 'playground_120.jpg', 'path': 'playground_120.jpg'},
    {'name': 'highway_335.jpg', 'path': 'highway_335.jpg'},
    {'name': 'mountain_184.jpg', 'path': 'mountain_184.jpg'},
    {'name': 'mountain_38.jpg', 'path': 'mountain_38.jpg'},
    {'name': 'badlands_106.jpg', 'path': 'badlands_106.jpg'},
    {'name': 'golf_course_134.jpg', 'path': 'golf_course_134.jpg'},
    {'name': 'sub_87.csv', 'path': 'sub_87.csv'},
    {'name': 'highway_278.jpg', 'path': 'highway_278.jpg'},
    {'name': 'mountain_39.jpg', 'path': 'mountain_39.jpg'},
    {'name': 'badlands_34.jpg', 'path': 'badlands_34.jpg'},
    {'name': 'highway_269.jpg', 'path': 'highway_269.jpg'},
    {'name': 'bridge_61.jpg', 'path': 'bridge_61.jpg'},
    {'name': 'playground_83.jpg', 'path': 'playground_83.jpg'},
    {'name': 'bridge_190.jpg', 'path': 'bridge_190.jpg'},
    {'name': 'highway_257.jpg', 'path': 'highway_257.jpg'},
    {'name': 'mountain_102.jpg', 'path': 'mountain_102.jpg'},
    {'name': 'badlands_44.jpg', 'path': 'badlands_44.jpg'},
    {'name': 'playground_76.jpg', 'path': 'playground_76.jpg'},
    {'name': 'badlands_180.jpg', 'path': 'badlands_180.jpg'},
    {'name': 'badlands_129.jpg', 'path': 'badlands_129.jpg'},
    {'name': 'playground_61.jpg', 'path': 'playground_61.jpg'},
    {'name': 'bridge_254.jpg', 'path': 'bridge_254.jpg'},
    {'name': 'bridge_142.jpg', 'path': 'bridge_142.jpg'},
    {'name': 'trail2.jpg', 'path': 'trail2.jpg'},
    {'name': 'sub_26.csv', 'path': 'sub_26.csv'},
    {'name': 'badlands_122.jpg', 'path': 'badlands_122.jpg'},
    {'name': 'highway_101.jpg', 'path': 'highway_101.jpg'},
    {'name': 'highway_247.jpg', 'path': 'highway_247.jpg'},
    {'name': 'badlands_30.jpg', 'path': 'badlands_30.jpg'},
    {'name': 'highway_406.jpg', 'path': 'highway_406.jpg'},
    {'name': 'badlands_170.jpg', 'path': 'badlands_170.jpg'},
    {'name': 'mountain_45.jpg', 'path': 'mountain_45.jpg'},
    {'name': 'playground_167.jpg', 'path': 'playground_167.jpg'},
    {'name': 'flower2.jpg', 'path': 'flower2.jpg'},
    {'name': 'bridge_225.jpg', 'path': 'bridge_225.jpg'},
    {'name': 'highway_9.jpg', 'path': 'highway_9.jpg'},
    {'name': 'playground_137.jpg', 'path': 'playground_137.jpg'},
    {'name': 'mountain_87.jpg', 'path': 'mountain_87.jpg'},
    {'name': 'golf_course_265.jpg', 'path': 'golf_course_265.jpg'},
    {'name': 'golf_course_67.jpg', 'path': 'golf_course_67.jpg'},
    {'name': 'mountain_35.jpg', 'path': 'mountain_35.jpg'},
    {'name': 'highway_294.jpg', 'path': 'highway_294.jpg'},
    {'name': 'sub_33.csv', 'path': 'sub_33.csv'},
    {'name': 'bridge_180.jpg', 'path': 'bridge_180.jpg'},
    {'name': 'sub_62.csv', 'path': 'sub_62.csv'},
    {'name': 'playground_249.jpg', 'path': 'playground_249.jpg'},
    {'name': 'highway_42.jpg', 'path': 'highway_42.jpg'},
    {'name': 'golf_course_87.jpg', 'path': 'golf_course_87.jpg'},
    {'name': 'mountain_212.jpg', 'path': 'mountain_212.jpg'},
    {'name': 'highway_93.jpg', 'path': 'highway_93.jpg'},
    {'name': 'playground_242.jpg', 'path': 'playground_242.jpg'},
    {'name': 'badlands_114.jpg', 'path': 'badlands_114.jpg'},
    {'name': 'badlands_1.jpg', 'path': 'badlands_1.jpg'},
    {'name': 'bridge_211.jpg', 'path': 'bridge_211.jpg'},
    {'name': 'tree3.jpg', 'path': 'tree3.jpg'},
    {'name': 'highway_245.jpg', 'path': 'highway_245.jpg'},
    {'name': 'bridge_234.jpg', 'path': 'bridge_234.jpg'},
    {'name': 'golf_course_282.jpg', 'path': 'golf_course_282.jpg'},
    {'name': 'bridge_35.jpg', 'path': 'bridge_35.jpg'},
    {'name': 'mountain_33.jpg', 'path': 'mountain_33.jpg'},
    {'name': 'sub_35.csv', 'path': 'sub_35.csv'},
    {'name': 'sub_63.csv', 'path': 'sub_63.csv'},
    {'name': 'bridge_39.jpg', 'path': 'bridge_39.jpg'},
    {'name': 'sub_72.csv', 'path': 'sub_72.csv'},
    {'name': 'badlands_54.jpg', 'path': 'badlands_54.jpg'},
    {'name': 'highway_134.jpg', 'path': 'highway_134.jpg'},
    {'name': 'highway_30.jpg', 'path': 'highway_30.jpg'},
    {'name': 'bridge_112.jpg', 'path': 'bridge_112.jpg'},
    {'name': 'playground_145.jpg', 'path': 'playground_145.jpg'},
    {'name': 'sub_54.csv', 'path': 'sub_54.csv'},
    {'name': 'bridge_179.jpg', 'path': 'bridge_179.jpg'},
    {'name': 'sub_19.csv', 'path': 'sub_19.csv'},
    {'name': 'bridge_163.jpg', 'path': 'bridge_163.jpg'},
    {'name': 'playground_241.jpg', 'path': 'playground_241.jpg'},
    {'name': 'golf_course_202.jpg', 'path': 'golf_course_202.jpg'},
    {'name': 'highway_53.jpg', 'path': 'highway_53.jpg'},
    {'name': 'playground_173.jpg', 'path': 'playground_173.jpg'},
    {'name': 'highway_268.jpg', 'path': 'highway_268.jpg'},
    {'name': 'golf_course_16.jpg', 'path': 'golf_course_16.jpg'},
    {'name': 'badlands_21.jpg', 'path': 'badlands_21.jpg'},
    {'name': 'highway_369.jpg', 'path': 'highway_369.jpg'},
    {'name': 'badlands_125.jpg', 'path': 'badlands_125.jpg'},
    {'name': 'badlands_24.jpg', 'path': 'badlands_24.jpg'},
    {'name': 'sub_7.csv', 'path': 'sub_7.csv'},
    {'name': 'highway_394.jpg', 'path': 'highway_394.jpg'},
    {'name': 'sub_64.csv', 'path': 'sub_64.csv'},
    {'name': 'mountain_57.jpg', 'path': 'mountain_57.jpg'},
    {'name': 'sub_36.csv', 'path': 'sub_36.csv'},
    {'name': 'highway_18.jpg', 'path': 'highway_18.jpg'},
    {'name': 'sub_9.csv', 'path': 'sub_9.csv'},
    {'name': 'highway_399.jpg', 'path': 'highway_399.jpg'},
    {'name': 'highway_251.jpg', 'path': 'highway_251.jpg'},
    {'name': 'playground_153.jpg', 'path': 'playground_153.jpg'},
    {'name': 'mountain_138.jpg', 'path': 'mountain_138.jpg'},
    {'name': 'badlands_175.jpg', 'path': 'badlands_175.jpg'},
    {'name': 'playground_219.jpg', 'path': 'playground_219.jpg'},
    {'name': 'playground_124.jpg', 'path': 'playground_124.jpg'},
    {'name': 'flower1.jpg', 'path': 'flower1.jpg'},
    {'name': 'highway_308.jpg', 'path': 'highway_308.jpg'},
    {'name': 'mountain_277.jpg', 'path': 'mountain_277.jpg'},
    {'name': 'playground_63.jpg', 'path': 'playground_63.jpg'},
    {'name': 'bridge_86.jpg', 'path': 'bridge_86.jpg'},
    {'name': 'mountain_309.jpg', 'path': 'mountain_309.jpg'},
    {'name': 'bridge_244.jpg', 'path': 'bridge_244.jpg'},
    {'name': 'highway_342.jpg', 'path': 'highway_342.jpg'},
    {'name': 'highway_314.jpg', 'path': 'highway_314.jpg'},
    {'name': 'badlands_27.jpg', 'path': 'badlands_27.jpg'},
    {'name': 'sub_69.csv', 'path': 'sub_69.csv'},
    {'name': 'sub_90.csv', 'path': 'sub_90.csv'},
    {'name': 'badlands_137.jpg', 'path': 'badlands_137.jpg'},
    {'name': 'bridge_218.jpg', 'path': 'bridge_218.jpg'},
    {'name': 'bridge_181.jpg', 'path': 'bridge_181.jpg'},
    {'name': 'golf_course_133.jpg', 'path': 'golf_course_133.jpg'},
    {'name': 'golf_course_55.jpg', 'path': 'golf_course_55.jpg'},
    {'name': 'sub_38.csv', 'path': 'sub_38.csv'},
    {'name': 'playground_26.jpg', 'path': 'playground_26.jpg'},
    {'name': 'badlands_138.jpg', 'path': 'badlands_138.jpg'},
    {'name': 'mountain_32.jpg', 'path': 'mountain_32.jpg'},
    {'name': 'bridge_17.jpg', 'path': 'bridge_17.jpg'},
    {'name': 'badlands_213.jpg', 'path': 'badlands_213.jpg'},
    {'name': 'mountain_137.jpg', 'path': 'mountain_137.jpg'},
    {'name': 'golf_course_160.jpg', 'path': 'golf_course_160.jpg'},
    {'name': 'bridge_126.jpg', 'path': 'bridge_126.jpg'},
    {'name': 'highway_178.jpg', 'path': 'highway_178.jpg'},
    {'name': 'bridge_82.jpg', 'path': 'bridge_82.jpg'},
    {'name': 'playground_127.jpg', 'path': 'playground_127.jpg'},
    {'name': 'sub_86.csv', 'path': 'sub_86.csv'},
    {'name': 'badlands_79.jpg', 'path': 'badlands_79.jpg'},
    {'name': 'highway_58.jpg', 'path': 'highway_58.jpg'},
    {'name': 'playground_37.jpg', 'path': 'playground_37.jpg'},
    {'name': 'golf_course_269.jpg', 'path': 'golf_course_269.jpg'},
    {'name': 'mountain_22.jpg', 'path': 'mountain_22.jpg'},
    {'name': 'sub_2.csv', 'path': 'sub_2.csv'},
    {'name': 'sub_48.csv', 'path': 'sub_48.csv'},
    {'name': 'golf_course_35.jpg', 'path': 'golf_course_35.jpg'},
    {'name': 'sub_14.csv', 'path': 'sub_14.csv'},
    {'name': 'bridge_172.jpg', 'path': 'bridge_172.jpg'},
    {'name': 'bridge_128.jpg', 'path': 'bridge_128.jpg'},
    {'name': 'golf_course_241.jpg', 'path': 'golf_course_241.jpg'},
    {'name': 'mountain_198.jpg', 'path': 'mountain_198.jpg'},
    {'name': 'bridge_45.jpg', 'path': 'bridge_45.jpg'},
    {'name': 'badlands_46.jpg', 'path': 'badlands_46.jpg'},
    {'name': 'mountain_3.jpg', 'path': 'mountain_3.jpg'},
    {'name': 'tree1.jpg', 'path': 'tree1.jpg'},
    {'name': 'playground_195.jpg', 'path': 'playground_195.jpg'},
    {'name': 'playground_103.jpg', 'path': 'playground_103.jpg'},
    {'name': 'badlands_63.jpg', 'path': 'badlands_63.jpg'},
    {'name': 'highway_287.jpg', 'path': 'highway_287.jpg'},
    {'name': 'bridge_76.jpg', 'path': 'bridge_76.jpg'},
    {'name': 'playground_40.jpg', 'path': 'playground_40.jpg'},
    {'name': 'mountain_41.jpg', 'path': 'mountain_41.jpg'},
    {'name': 'golf_course_308.jpg', 'path': 'golf_course_308.jpg'},
    {'name': 'mountain_244.jpg', 'path': 'mountain_244.jpg'},
    {'name': 'bridge_193.jpg', 'path': 'bridge_193.jpg'},
    {'name': 'sub_8.csv', 'path': 'sub_8.csv'},
    {'name': 'sub_59.csv', 'path': 'sub_59.csv'},
    {'name': 'badlands_72.jpg', 'path': 'badlands_72.jpg'},
    {'name': 'sub_3.csv', 'path': 'sub_3.csv'},
    {'name': 'golf_course_181.jpg', 'path': 'golf_course_181.jpg'},
    {'name': 'playground_117.jpg', 'path': 'playground_117.jpg'},
    {'name': 'sub_77.csv', 'path': 'sub_77.csv'},
    {'name': 'bridge_79.jpg', 'path': 'bridge_79.jpg'},
    {'name': 'highway_365.jpg', 'path': 'highway_365.jpg'},
    {'name': 'playground_237.jpg', 'path': 'playground_237.jpg'},
    {'name': 'mountain_76.jpg', 'path': 'mountain_76.jpg'},
    {'name': 'highway_389.jpg', 'path': 'highway_389.jpg'},
    {'name': 'badlands_219.jpg', 'path': 'badlands_219.jpg'},
    {'name': 'fence3.jpg', 'path': 'fence3.jpg'},
    {'name': 'sub_24.csv', 'path': 'sub_24.csv'},
    {'name': 'highway_404.jpg', 'path': 'highway_404.jpg'},
    {'name': 'highway_305.jpg', 'path': 'highway_305.jpg'},
    {'name': 'bridge_64.jpg', 'path': 'bridge_64.jpg'},
    {'name': 'playground_233.jpg', 'path': 'playground_233.jpg'},
    {'name': 'playground_39.jpg', 'path': 'playground_39.jpg'},
    {'name': 'golf_course_193.jpg', 'path': 'golf_course_193.jpg'},
    {'name': 'bridge_22.jpg', 'path': 'bridge_22.jpg'},
    {'name': 'sub_97.csv', 'path': 'sub_97.csv'},
    {'name': 'golf_course_307.jpg', 'path': 'golf_course_307.jpg'},
    {'name': 'golf_course_316.jpg', 'path': 'golf_course_316.jpg'},
    {'name': 'bridge_202.jpg', 'path': 'bridge_202.jpg'},
    {'name': 'sub_92.csv', 'path': 'sub_92.csv'},
    {'name': 'badlands_207.jpg', 'path': 'badlands_207.jpg'},
    {'name': 'sub_83.csv', 'path': 'sub_83.csv'},
    {'name': 'highway_31.jpg', 'path': 'highway_31.jpg'},
    {'name': 'bridge_91.jpg', 'path': 'bridge_91.jpg'},
    {'name': 'bridge_31.jpg', 'path': 'bridge_31.jpg'},
    {'name': 'mountain_232.jpg', 'path': 'mountain_232.jpg'},
    {'name': 'bridge_65.jpg', 'path': 'bridge_65.jpg'},
    {'name': 'badlands_183.jpg', 'path': 'badlands_183.jpg'},
    {'name': 'golf_course_226.jpg', 'path': 'golf_course_226.jpg'},
    {'name': 'highway_37.jpg', 'path': 'highway_37.jpg'},
    {'name': 'bridge_106.jpg', 'path': 'bridge_106.jpg'},
    {'name': 'badlands_214.jpg', 'path': 'badlands_214.jpg'},
    {'name': 'badlands_81.jpg', 'path': 'badlands_81.jpg'},
    {'name': 'badlands_16.jpg', 'path': 'badlands_16.jpg'},
    {'name': 'badlands_67.jpg', 'path': 'badlands_67.jpg'},
    {'name': 'golf_course_71.jpg', 'path': 'golf_course_71.jpg'},
    {'name': 'playground_49.jpg', 'path': 'playground_49.jpg'},
    {'name': 'playground_84.jpg', 'path': 'playground_84.jpg'},
    {'name': 'bridge_148.jpg', 'path': 'bridge_148.jpg'},
    {'name': 'playground_229.jpg', 'path': 'playground_229.jpg'},
    {'name': 'playground_43.jpg', 'path': 'playground_43.jpg'},
    {'name': 'golf_course_331.jpg', 'path': 'golf_course_331.jpg'},
    {'name': 'golf_course_238.jpg', 'path': 'golf_course_238.jpg'},
    {'name': 'highway_265.jpg', 'path': 'highway_265.jpg'},
    {'name': 'mountain_146.jpg', 'path': 'mountain_146.jpg'},
    {'name': 'leaf4.jpg', 'path': 'leaf4.jpg'},
    {'name': 'bridge_72.jpg', 'path': 'bridge_72.jpg'},
    {'name': 'sub_56.csv', 'path': 'sub_56.csv'},
    {'name': 'badlands_174.jpg', 'path': 'badlands_174.jpg'},
    {'name': 'golf_course_137.jpg', 'path': 'golf_course_137.jpg'},
    {'name': 'golf_course_252.jpg', 'path': 'golf_course_252.jpg'},
    {'name': 'highway_177.jpg', 'path': 'highway_177.jpg'},
    {'name': 'playground_55.jpg', 'path': 'playground_55.jpg'},
    {'name': 'badlands_102.jpg', 'path': 'badlands_102.jpg'},
    {'name': 'badlands_152.jpg', 'path': 'badlands_152.jpg'},
    {'name': 'mountain_94.jpg', 'path': 'mountain_94.jpg'},
    {'name': 'golf_course_130.jpg', 'path': 'golf_course_130.jpg'},
    {'name': 'highway_226.jpg', 'path': 'highway_226.jpg'},
    {'name': 'mountain_157.jpg', 'path': 'mountain_157.jpg'},
    {'name': 'mountain_250.jpg', 'path': 'mountain_250.jpg'},
    {'name': 'mountain_251.jpg', 'path': 'mountain_251.jpg'},
    {'name': 'playground_47.jpg', 'path': 'playground_47.jpg'},
    {'name': 'playground_162.jpg', 'path': 'playground_162.jpg'},
    {'name': 'bridge_63.jpg', 'path': 'bridge_63.jpg'},
    {'name': 'playground_205.jpg', 'path': 'playground_205.jpg'},
    {'name': 'sub_17.csv', 'path': 'sub_17.csv'},
    {'name': 'mountain_97.jpg', 'path': 'mountain_97.jpg'},
    {'name': 'sub_55.csv', 'path': 'sub_55.csv'},
    {'name': 'highway_147.jpg', 'path': 'highway_147.jpg'},
    {'name': 'playground_74.jpg', 'path': 'playground_74.jpg'},
    {'name': 'bridge_184.jpg', 'path': 'bridge_184.jpg'},
    {'name': 'bridge_60.jpg', 'path': 'bridge_60.jpg'},
    {'name': 'playground_12.jpg', 'path': 'playground_12.jpg'},
    {'name': 'mountain_307.jpg', 'path': 'mountain_307.jpg'},
    {'name': 'sub_10.csv', 'path': 'sub_10.csv'},
    {'name': 'sub_18.csv', 'path': 'sub_18.csv'},
    {'name': 'badlands_171.jpg', 'path': 'badlands_171.jpg'},
    {'name': 'bridge_133.jpg', 'path': 'bridge_133.jpg'},
    {'name': 'mountain_34.jpg', 'path': 'mountain_34.jpg'},
    {'name': 'badlands_184.jpg', 'path': 'badlands_184.jpg'},
    {'name': 'sub_99.csv', 'path': 'sub_99.csv'},
    {'name': 'bridge_108.jpg', 'path': 'bridge_108.jpg'},
    {'name': 'mountain_72.jpg', 'path': 'mountain_72.jpg'},
    {'name': 'sub_93.csv', 'path': 'sub_93.csv'},
    {'name': 'sub_40.csv', 'path': 'sub_40.csv'},
    {'name': 'mountain_199.jpg', 'path': 'mountain_199.jpg'},
    {'name': 'bird3.jpg', 'path': 'bird3.jpg'},
    {'name': 'sub_25.csv', 'path': 'sub_25.csv'},
    {'name': 'sub_1.csv', 'path': 'sub_1.csv'},
    {'name': 'badlands_128.jpg', 'path': 'badlands_128.jpg'},
    {'name': 'golf_course_144.jpg', 'path': 'golf_course_144.jpg'},
    {'name': 'playground_251.jpg', 'path': 'playground_251.jpg'},
    {'name': 'sub_66.csv', 'path': 'sub_66.csv'},
    {'name': 'fence4.jpg', 'path': 'fence4.jpg'},
    {'name': 'badlands_85.jpg', 'path': 'badlands_85.jpg'},
    {'name': 'badlands_217.jpg', 'path': 'badlands_217.jpg'},
    {'name': 'highway_122.jpg', 'path': 'highway_122.jpg'},
    {'name': 'golf_course_235.jpg', 'path': 'golf_course_235.jpg'},
    {'name': 'badlands_59.jpg', 'path': 'badlands_59.jpg'},
    {'name': 'sub_78.csv', 'path': 'sub_78.csv'},
    {'name': 'playground_240.jpg', 'path': 'playground_240.jpg'},
    {'name': 'highway_29.jpg', 'path': 'highway_29.jpg'},
    {'name': 'sub_71.csv', 'path': 'sub_71.csv'},
    {'name': 'badlands_222.jpg', 'path': 'badlands_222.jpg'},
    {'name': 'bridge_266.jpg', 'path': 'bridge_266.jpg'},
    {'name': 'mountain_306.jpg', 'path': 'mountain_306.jpg'},
    {'name': 'bridge_96.jpg', 'path': 'bridge_96.jpg'},
    {'name': 'sub_28.csv', 'path': 'sub_28.csv'},
    {'name': 'playground_191.jpg', 'path': 'playground_191.jpg'},
    {'name': 'bridge_224.jpg', 'path': 'bridge_224.jpg'},
    {'name': 'sub_52.csv', 'path': 'sub_52.csv'},
    {'name': 'mountain_95.jpg', 'path': 'mountain_95.jpg'},
    {'name': 'sub_37.csv', 'path': 'sub_37.csv'},
    {'name': 'fence1.jpg', 'path': 'fence1.jpg'},
    {'name': 'badlands_113.jpg', 'path': 'badlands_113.jpg'},
    {'name': 'bridge_140.jpg', 'path': 'bridge_140.jpg'},
    {'name': 'highway_383.jpg', 'path': 'highway_383.jpg'},
    {'name': 'golf_course_138.jpg', 'path': 'golf_course_138.jpg'}
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
var button;
var instructions_1Clock;
var key_resp_2;
var text_instructions_first_slide;
var encoding_demoClock;
var image_0_demo;
var image_1_demo;
var image_2_demo;
var image_3_demo;
var image_4_demo;
var image_5_demo;
var blank_screen_demo;
var fixation_demo;
var test_demoClock;
var image_left_demo;
var image_right_demo;
var demo_test_key_resp;
var text_4;
var instructions_before_expClock;
var key_resp_after_demo;
var text_after_demo_instr;
var encodingClock;
var image_0;
var image_1;
var image_2;
var image_3;
var image_4;
var image_5;
var blank_screen;
var fixation_encoding;
var testClock;
var image_left;
var image_right;
var test_key_resp;
var text_6;
var instructions_after_part1Clock;
var text_2;
var key_resp_4;
var part2_expClock;
var image_left_part2;
var image_right_part2;
var slider_part2;
var text_5;
var last_slideClock;
var key_resp_last_slide;
var text_last_slide;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent_form"
  consent_formClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_consent_form',
    text: 'By pressing ‘i consent’ I hereby accept to participate in a visual memory experiment.\nI declare I understood the experiment includes the following parts: Experiment description and instructions, practice phase, study phase and test phase.\n\nThe goal of this study is to examine memory encoding processes.\n\nMethods: The experiment will be presented on a computer screen. In the first part you will study a series of neutral images and later will be asked to recognize them. Duration: up to 10 minutes. Time to complete the experiment from approval: 24 hours\nParticipants: Healthy population (Amazon Mechanical Turk workers)\nNumber of subjects: 100\nSide effects or discomfort: none\n\nBenefit from the experiment: Participants are not expected to gain personal benefit from this experiment. Through this experiment the research team hopes to uncover how human remember visual stimuli.\nPossible risk factors: none\n\nVoluntary participation: participants are free to quit the experiment at any moment with no penalty, since participation is voluntary.\n\nResearch team is located in Tel Aviv University, and the experimental protocol was approved by its ethics committee.\n\nBy pressing the "I conesnt" button, I hereby declare that I read the above information and agree to participate in this experiment.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.025], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'I consent',
    pos: [0, (- 0.38)], letterHeight: 0.03,
    size: [0.16, 0.07]
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instructions_first_slide = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_first_slide',
    text: 'This experiment contains two parts: \n\nPart 1: \n\n\nIn this part you are asked to memorize a series of breifly presented images. In each trial, following the images presentation, you will be presented with two images, one of which was previously presented during that trial. Please select the image you have previosly seen using the corresponding arrow key (left/right).  \n\n\nPart 2: \n\n\nYou are asked to rate the similarity between pairs of images. Rate the extent of the similarity by selecting the relevant score on the similarity scale at the bottom of the screen using the mouse. \n\n\nWe will begin with a short demo of part 1.\n\n\npress the space bar to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "encoding_demo"
  encoding_demoClock = new util.Clock();
  image_0_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_1_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_2_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_3_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_4_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_5_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  blank_screen_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_screen_demo',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  fixation_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_demo',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "test_demo"
  test_demoClock = new util.Clock();
  image_left_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_right_demo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right_demo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  demo_test_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions_before_exp"
  instructions_before_expClock = new util.Clock();
  key_resp_after_demo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_after_demo_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_after_demo_instr',
    text: 'Now Part 1 of the experiment will begin. \n\nReminder: \n\nIn this part you are asked to memorize a series of breifly presented images. In each trial, following the images presentation, you will be presented with two images, one of which was previously presented during that trial. Please select the image you have previosly seen using the corresponding arrow key (left/right).  \n\n\npress the spacebar to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "encoding"
  encodingClock = new util.Clock();
  image_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  blank_screen = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_screen',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  fixation_encoding = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_encoding',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions_after_part1"
  instructions_after_part1Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Now we will begin part 2. \n\n\nReminder: You are asked to rate the similarity between pairs of images. Rate the extent of the similarity by selecting the relevant score on the similarity scale at the bottom of the screen using the mouse. \n\n\nJudge the similarity of these images on the scale of:\n\n1 - not similar\n9 - very similar\n\nUse the mouse to select the value on the scale.\n\npress the spacebar to begin. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part2_exp"
  part2_expClock = new util.Clock();
  image_left_part2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left_part2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.3), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_right_part2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right_part2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.3, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_part2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_part2',
    size: [1.0, 0.05], pos: [0, (- 0.32)], units: 'height',
    labels: ["1 \nnot similar", 2, 3, 4, 5, 6, 7, 8, "9 \nvery similar"], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "last_slide"
  last_slideClock = new util.Clock();
  key_resp_last_slide = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_last_slide = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_last_slide',
    text: 'Thank you!\n\nYour credit code is:\n\n\n‘tchcugsi’\n\n\nReport it in the M-turk platform. \n\n\nPlease press the space bar to finish',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
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
    consent_formComponents.push(button);
    
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

    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          null;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
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
    instructions_1Components.push(text_instructions_first_slide);
    
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
    
    
    // *text_instructions_first_slide* updates
    if (t >= 0.0 && text_instructions_first_slide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_first_slide.tStart = t;  // (not accounting for frame time here)
      text_instructions_first_slide.frameNStart = frameN;  // exact frame index
      
      text_instructions_first_slide.setAutoDraw(true);
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


var demo_loops;
var currentLoop;
function demo_loopsLoopBegin(demo_loopsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demo_loops = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'demo_encoding.xlsx',
      seed: undefined, name: 'demo_loops'
    });
    psychoJS.experiment.addLoop(demo_loops); // add the loop to the experiment
    currentLoop = demo_loops;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    demo_loops.forEach(function() {
      const snapshot = demo_loops.getSnapshot();
    
      demo_loopsLoopScheduler.add(importConditions(snapshot));
      demo_loopsLoopScheduler.add(encoding_demoRoutineBegin(snapshot));
      demo_loopsLoopScheduler.add(encoding_demoRoutineEachFrame());
      demo_loopsLoopScheduler.add(encoding_demoRoutineEnd());
      demo_loopsLoopScheduler.add(test_demoRoutineBegin(snapshot));
      demo_loopsLoopScheduler.add(test_demoRoutineEachFrame());
      demo_loopsLoopScheduler.add(test_demoRoutineEnd());
      demo_loopsLoopScheduler.add(endLoopIteration(demo_loopsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function demo_loopsLoopEnd() {
  psychoJS.experiment.removeLoop(demo_loops);

  return Scheduler.Event.NEXT;
}


var exp_loops;
function exp_loopsLoopBegin(exp_loopsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp_loops = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sub_4.csv',
      seed: undefined, name: 'exp_loops'
    });
    psychoJS.experiment.addLoop(exp_loops); // add the loop to the experiment
    currentLoop = exp_loops;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp_loops.forEach(function() {
      const snapshot = exp_loops.getSnapshot();
    
      exp_loopsLoopScheduler.add(importConditions(snapshot));
      exp_loopsLoopScheduler.add(encodingRoutineBegin(snapshot));
      exp_loopsLoopScheduler.add(encodingRoutineEachFrame());
      exp_loopsLoopScheduler.add(encodingRoutineEnd());
      exp_loopsLoopScheduler.add(testRoutineBegin(snapshot));
      exp_loopsLoopScheduler.add(testRoutineEachFrame());
      exp_loopsLoopScheduler.add(testRoutineEnd());
      exp_loopsLoopScheduler.add(endLoopIteration(exp_loopsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp_loopsLoopEnd() {
  psychoJS.experiment.removeLoop(exp_loops);

  return Scheduler.Event.NEXT;
}


var exp_loops_part2;
function exp_loops_part2LoopBegin(exp_loops_part2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp_loops_part2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sub_0.csv',
      seed: undefined, name: 'exp_loops_part2'
    });
    psychoJS.experiment.addLoop(exp_loops_part2); // add the loop to the experiment
    currentLoop = exp_loops_part2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp_loops_part2.forEach(function() {
      const snapshot = exp_loops_part2.getSnapshot();
    
      exp_loops_part2LoopScheduler.add(importConditions(snapshot));
      exp_loops_part2LoopScheduler.add(part2_expRoutineBegin(snapshot));
      exp_loops_part2LoopScheduler.add(part2_expRoutineEachFrame());
      exp_loops_part2LoopScheduler.add(part2_expRoutineEnd());
      exp_loops_part2LoopScheduler.add(endLoopIteration(exp_loops_part2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp_loops_part2LoopEnd() {
  psychoJS.experiment.removeLoop(exp_loops_part2);

  return Scheduler.Event.NEXT;
}


var encoding_demoComponents;
function encoding_demoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'encoding_demo'-------
    t = 0;
    encoding_demoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.700000);
    // update component parameters for each repeat
    image_0_demo.setImage(background_0);
    image_1_demo.setImage(background_1);
    image_2_demo.setImage(background_2);
    image_3_demo.setImage(background_3);
    image_4_demo.setImage(background_4);
    image_5_demo.setImage(background_5);
    blank_screen_demo.setText('');
    // keep track of which components have finished
    encoding_demoComponents = [];
    encoding_demoComponents.push(image_0_demo);
    encoding_demoComponents.push(image_1_demo);
    encoding_demoComponents.push(image_2_demo);
    encoding_demoComponents.push(image_3_demo);
    encoding_demoComponents.push(image_4_demo);
    encoding_demoComponents.push(image_5_demo);
    encoding_demoComponents.push(blank_screen_demo);
    encoding_demoComponents.push(fixation_demo);
    
    encoding_demoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function encoding_demoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'encoding_demo'-------
    // get current time
    t = encoding_demoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_0_demo* updates
    if (t >= 0.5 && image_0_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0_demo.tStart = t;  // (not accounting for frame time here)
      image_0_demo.frameNStart = frameN;  // exact frame index
      
      image_0_demo.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_0_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_0_demo.setAutoDraw(false);
    }
    
    // *image_1_demo* updates
    if (t >= 0.7 && image_1_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_demo.tStart = t;  // (not accounting for frame time here)
      image_1_demo.frameNStart = frameN;  // exact frame index
      
      image_1_demo.setAutoDraw(true);
    }

    frameRemains = 0.7 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_1_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_1_demo.setAutoDraw(false);
    }
    
    // *image_2_demo* updates
    if (t >= 0.9 && image_2_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2_demo.tStart = t;  // (not accounting for frame time here)
      image_2_demo.frameNStart = frameN;  // exact frame index
      
      image_2_demo.setAutoDraw(true);
    }

    frameRemains = 0.9 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2_demo.setAutoDraw(false);
    }
    
    // *image_3_demo* updates
    if (t >= 1.1 && image_3_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3_demo.tStart = t;  // (not accounting for frame time here)
      image_3_demo.frameNStart = frameN;  // exact frame index
      
      image_3_demo.setAutoDraw(true);
    }

    frameRemains = 1.1 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3_demo.setAutoDraw(false);
    }
    
    // *image_4_demo* updates
    if (t >= 1.3 && image_4_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4_demo.tStart = t;  // (not accounting for frame time here)
      image_4_demo.frameNStart = frameN;  // exact frame index
      
      image_4_demo.setAutoDraw(true);
    }

    frameRemains = 1.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4_demo.setAutoDraw(false);
    }
    
    // *image_5_demo* updates
    if (t >= 1.5 && image_5_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5_demo.tStart = t;  // (not accounting for frame time here)
      image_5_demo.frameNStart = frameN;  // exact frame index
      
      image_5_demo.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_5_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_5_demo.setAutoDraw(false);
    }
    
    // *blank_screen_demo* updates
    if (t >= 1.7 && blank_screen_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_screen_demo.tStart = t;  // (not accounting for frame time here)
      blank_screen_demo.frameNStart = frameN;  // exact frame index
      
      blank_screen_demo.setAutoDraw(true);
    }

    frameRemains = 1.7 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_screen_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_screen_demo.setAutoDraw(false);
    }
    
    // *fixation_demo* updates
    if (t >= 0.0 && fixation_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_demo.tStart = t;  // (not accounting for frame time here)
      fixation_demo.frameNStart = frameN;  // exact frame index
      
      fixation_demo.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_demo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_demo.setAutoDraw(false);
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
    encoding_demoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function encoding_demoRoutineEnd() {
  return async function () {
    //------Ending Routine 'encoding_demo'-------
    encoding_demoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _demo_test_key_resp_allKeys;
var test_demoComponents;
function test_demoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test_demo'-------
    t = 0;
    test_demoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_left_demo.setImage(image1);
    image_right_demo.setImage(image2);
    demo_test_key_resp.keys = undefined;
    demo_test_key_resp.rt = undefined;
    _demo_test_key_resp_allKeys = [];
    text_4.setText('choose the image you have previously seen');
    // keep track of which components have finished
    test_demoComponents = [];
    test_demoComponents.push(image_left_demo);
    test_demoComponents.push(image_right_demo);
    test_demoComponents.push(demo_test_key_resp);
    test_demoComponents.push(text_4);
    
    test_demoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_demoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test_demo'-------
    // get current time
    t = test_demoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left_demo* updates
    if (t >= 0.0 && image_left_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left_demo.tStart = t;  // (not accounting for frame time here)
      image_left_demo.frameNStart = frameN;  // exact frame index
      
      image_left_demo.setAutoDraw(true);
    }

    
    // *image_right_demo* updates
    if (t >= 0.0 && image_right_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right_demo.tStart = t;  // (not accounting for frame time here)
      image_right_demo.frameNStart = frameN;  // exact frame index
      
      image_right_demo.setAutoDraw(true);
    }

    
    // *demo_test_key_resp* updates
    if (t >= 0.0 && demo_test_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_test_key_resp.tStart = t;  // (not accounting for frame time here)
      demo_test_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_test_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_test_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_test_key_resp.clearEvents(); });
    }

    if (demo_test_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_test_key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _demo_test_key_resp_allKeys = _demo_test_key_resp_allKeys.concat(theseKeys);
      if (_demo_test_key_resp_allKeys.length > 0) {
        demo_test_key_resp.keys = _demo_test_key_resp_allKeys[_demo_test_key_resp_allKeys.length - 1].name;  // just the last key pressed
        demo_test_key_resp.rt = _demo_test_key_resp_allKeys[_demo_test_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
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
    test_demoComponents.forEach( function(thisComponent) {
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


function test_demoRoutineEnd() {
  return async function () {
    //------Ending Routine 'test_demo'-------
    test_demoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demo_test_key_resp.keys', demo_test_key_resp.keys);
    if (typeof demo_test_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_test_key_resp.rt', demo_test_key_resp.rt);
        routineTimer.reset();
        }
    
    demo_test_key_resp.stop();
    // the Routine "test_demo" was not non-slip safe, so reset the non-slip timer
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


var encodingComponents;
function encodingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'encoding'-------
    t = 0;
    encodingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    image_0.setImage(background_0);
    image_1.setImage(background_1);
    image_2.setImage(background_2);
    image_3.setImage(background_3);
    image_4.setImage(background_4);
    image_5.setImage(background_5);
    blank_screen.setText('');
    fixation_encoding.setText('+');
    // keep track of which components have finished
    encodingComponents = [];
    encodingComponents.push(image_0);
    encodingComponents.push(image_1);
    encodingComponents.push(image_2);
    encodingComponents.push(image_3);
    encodingComponents.push(image_4);
    encodingComponents.push(image_5);
    encodingComponents.push(blank_screen);
    encodingComponents.push(fixation_encoding);
    
    encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function encodingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'encoding'-------
    // get current time
    t = encodingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_0* updates
    if (t >= 1 && image_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0.tStart = t;  // (not accounting for frame time here)
      image_0.frameNStart = frameN;  // exact frame index
      
      image_0.setAutoDraw(true);
    }

    frameRemains = 1 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_0.setAutoDraw(false);
    }
    
    // *image_1* updates
    if (t >= 1.25 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }

    frameRemains = 1.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_1.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 1.5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *image_3* updates
    if (t >= 1.75 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 1.75 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *image_4* updates
    if (t >= 2 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 2 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // *image_5* updates
    if (t >= 2.25 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    frameRemains = 2.25 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_5.setAutoDraw(false);
    }
    
    // *blank_screen* updates
    if (t >= 2.5 && blank_screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_screen.tStart = t;  // (not accounting for frame time here)
      blank_screen.frameNStart = frameN;  // exact frame index
      
      blank_screen.setAutoDraw(true);
    }

    frameRemains = 2.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_screen.setAutoDraw(false);
    }
    
    // *fixation_encoding* updates
    if (t >= 0.0 && fixation_encoding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_encoding.tStart = t;  // (not accounting for frame time here)
      fixation_encoding.frameNStart = frameN;  // exact frame index
      
      fixation_encoding.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_encoding.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_encoding.setAutoDraw(false);
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
    encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function encodingRoutineEnd() {
  return async function () {
    //------Ending Routine 'encoding'-------
    encodingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _test_key_resp_allKeys;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_left.setImage(image1);
    image_right.setImage(image2);
    test_key_resp.keys = undefined;
    test_key_resp.rt = undefined;
    _test_key_resp_allKeys = [];
    text_6.setText('choose the image you have previously seen');
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(image_left);
    testComponents.push(image_right);
    testComponents.push(test_key_resp);
    testComponents.push(text_6);
    
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test'-------
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left* updates
    if (t >= 0.0 && image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left.tStart = t;  // (not accounting for frame time here)
      image_left.frameNStart = frameN;  // exact frame index
      
      image_left.setAutoDraw(true);
    }

    
    // *image_right* updates
    if (t >= 0.0 && image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right.tStart = t;  // (not accounting for frame time here)
      image_right.frameNStart = frameN;  // exact frame index
      
      image_right.setAutoDraw(true);
    }

    
    // *test_key_resp* updates
    if (t >= 0.0 && test_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_key_resp.tStart = t;  // (not accounting for frame time here)
      test_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_key_resp.clearEvents(); });
    }

    if (test_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _test_key_resp_allKeys = _test_key_resp_allKeys.concat(theseKeys);
      if (_test_key_resp_allKeys.length > 0) {
        test_key_resp.keys = _test_key_resp_allKeys[_test_key_resp_allKeys.length - 1].name;  // just the last key pressed
        test_key_resp.rt = _test_key_resp_allKeys[_test_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
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
    testComponents.forEach( function(thisComponent) {
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


function testRoutineEnd() {
  return async function () {
    //------Ending Routine 'test'-------
    testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('test_key_resp.keys', test_key_resp.keys);
    if (typeof test_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_key_resp.rt', test_key_resp.rt);
        routineTimer.reset();
        }
    
    test_key_resp.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var instructions_after_part1Components;
function instructions_after_part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions_after_part1'-------
    t = 0;
    instructions_after_part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    instructions_after_part1Components = [];
    instructions_after_part1Components.push(text_2);
    instructions_after_part1Components.push(key_resp_4);
    
    instructions_after_part1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_after_part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions_after_part1'-------
    // get current time
    t = instructions_after_part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
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
    instructions_after_part1Components.forEach( function(thisComponent) {
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


function instructions_after_part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions_after_part1'-------
    instructions_after_part1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instructions_after_part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var part2_expComponents;
function part2_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part2_exp'-------
    t = 0;
    part2_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_left_part2.setImage(image1);
    image_right_part2.setImage(image2);
    slider_part2.reset()
    text_5.setText('how similar are the images?');
    // keep track of which components have finished
    part2_expComponents = [];
    part2_expComponents.push(image_left_part2);
    part2_expComponents.push(image_right_part2);
    part2_expComponents.push(slider_part2);
    part2_expComponents.push(text_5);
    
    part2_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function part2_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part2_exp'-------
    // get current time
    t = part2_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left_part2* updates
    if (t >= 0.0 && image_left_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left_part2.tStart = t;  // (not accounting for frame time here)
      image_left_part2.frameNStart = frameN;  // exact frame index
      
      image_left_part2.setAutoDraw(true);
    }

    
    // *image_right_part2* updates
    if (t >= 0.0 && image_right_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right_part2.tStart = t;  // (not accounting for frame time here)
      image_right_part2.frameNStart = frameN;  // exact frame index
      
      image_right_part2.setAutoDraw(true);
    }

    
    // *slider_part2* updates
    if (t >= 0.0 && slider_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_part2.tStart = t;  // (not accounting for frame time here)
      slider_part2.frameNStart = frameN;  // exact frame index
      
      slider_part2.setAutoDraw(true);
    }

    
    // Check slider_part2 for response to end routine
    if (slider_part2.getRating() !== undefined && slider_part2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
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
    part2_expComponents.forEach( function(thisComponent) {
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


function part2_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'part2_exp'-------
    part2_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider_part2.response', slider_part2.getRating());
    psychoJS.experiment.addData('slider_part2.rt', slider_part2.getRT());
    // the Routine "part2_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_last_slide_allKeys;
var last_slideComponents;
function last_slideRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'last_slide'-------
    t = 0;
    last_slideClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_last_slide.keys = undefined;
    key_resp_last_slide.rt = undefined;
    _key_resp_last_slide_allKeys = [];
    // keep track of which components have finished
    last_slideComponents = [];
    last_slideComponents.push(key_resp_last_slide);
    last_slideComponents.push(text_last_slide);
    
    last_slideComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function last_slideRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'last_slide'-------
    // get current time
    t = last_slideClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_last_slide* updates
    if (t >= 0.0 && key_resp_last_slide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_last_slide.tStart = t;  // (not accounting for frame time here)
      key_resp_last_slide.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_last_slide.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_last_slide.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_last_slide.clearEvents(); });
    }

    if (key_resp_last_slide.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_last_slide.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_last_slide_allKeys = _key_resp_last_slide_allKeys.concat(theseKeys);
      if (_key_resp_last_slide_allKeys.length > 0) {
        key_resp_last_slide.keys = _key_resp_last_slide_allKeys[_key_resp_last_slide_allKeys.length - 1].name;  // just the last key pressed
        key_resp_last_slide.rt = _key_resp_last_slide_allKeys[_key_resp_last_slide_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_last_slide* updates
    if (t >= 0.0 && text_last_slide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_last_slide.tStart = t;  // (not accounting for frame time here)
      text_last_slide.frameNStart = frameN;  // exact frame index
      
      text_last_slide.setAutoDraw(true);
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
    last_slideComponents.forEach( function(thisComponent) {
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


function last_slideRoutineEnd() {
  return async function () {
    //------Ending Routine 'last_slide'-------
    last_slideComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_last_slide.keys', key_resp_last_slide.keys);
    if (typeof key_resp_last_slide.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_last_slide.rt', key_resp_last_slide.rt);
        routineTimer.reset();
        }
    
    key_resp_last_slide.stop();
    // the Routine "last_slide" was not non-slip safe, so reset the non-slip timer
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
