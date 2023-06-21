#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Sun Jun 11 16:58:16 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'working'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/edenzohar/Thesis/visual_memory_representation_final/experiment_resources/demo_images/working_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1512, 982], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "consent_form"
consent_formClock = core.Clock()
key_resp = keyboard.Keyboard()
text_consent_form = visual.TextStim(win=win, name='text_consent_form',
    text='hello',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "instructions_1"
instructions_1Clock = core.Clock()
key_resp_2 = keyboard.Keyboard()
text_instructions_1 = visual.TextStim(win=win, name='text_instructions_1',
    text='This experiment has two parts: \n\npart 1: \nA image will appear, and after you will choose the image you have previously seen. \n\npart 2: \nRate the similarity between pairs of images \n\nwe will begin with a short demo.\n\npress the space bar to begin. ',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "demo_trials"
demo_trialsClock = core.Clock()
demo_target = visual.ImageStim(
    win=win,
    name='demo_target', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
demo_right_image = visual.ImageStim(
    win=win,
    name='demo_right_image', 
    image='sin', mask=None,
    ori=0.0, pos=(0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
demo_left_image = visual.ImageStim(
    win=win,
    name='demo_left_image', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
key_resp_demo = keyboard.Keyboard()
choose_the_image_you_saw = visual.TextStim(win=win, name='choose_the_image_you_saw',
    text='choose the image you have previously seen',
    font='Open Sans',
    pos=(0, 0.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "instructions_before_exp"
instructions_before_expClock = core.Clock()
key_resp_after_demo = keyboard.Keyboard()
text_after_demo_instr = visual.TextStim(win=win, name='text_after_demo_instr',
    text='now the experiemnt will begin \n\npress the spacebar to begin. ',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "exp_trials"
exp_trialsClock = core.Clock()
exp_target_image = visual.ImageStim(
    win=win,
    name='exp_target_image', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
exp_mask = visual.ImageStim(
    win=win,
    name='exp_mask', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
exp_right_image = visual.ImageStim(
    win=win,
    name='exp_right_image', 
    image='sin', mask=None,
    ori=0.0, pos=(0.3,0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
exp_left_image = visual.ImageStim(
    win=win,
    name='exp_left_image', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_3 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "consent_form"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
consent_formComponents = [key_resp, text_consent_form]
for thisComponent in consent_formComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent_formClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent_form"-------
while continueRoutine:
    # get current time
    t = consent_formClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent_formClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_consent_form* updates
    if text_consent_form.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_consent_form.frameNStart = frameN  # exact frame index
        text_consent_form.tStart = t  # local t and not account for scr refresh
        text_consent_form.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_consent_form, 'tStartRefresh')  # time at next scr refresh
        text_consent_form.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent_formComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent_form"-------
for thisComponent in consent_formComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_consent_form.started', text_consent_form.tStartRefresh)
thisExp.addData('text_consent_form.stopped', text_consent_form.tStopRefresh)
# the Routine "consent_form" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
instructions_1Components = [key_resp_2, text_instructions_1]
for thisComponent in instructions_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_1"-------
while continueRoutine:
    # get current time
    t = instructions_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_instructions_1* updates
    if text_instructions_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_1.frameNStart = frameN  # exact frame index
        text_instructions_1.tStart = t  # local t and not account for scr refresh
        text_instructions_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_1, 'tStartRefresh')  # time at next scr refresh
        text_instructions_1.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_1"-------
for thisComponent in instructions_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_instructions_1.started', text_instructions_1.tStartRefresh)
thisExp.addData('text_instructions_1.stopped', text_instructions_1.tStopRefresh)
# the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
demo_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('demo_encoding.xlsx'),
    seed=None, name='demo_loop')
thisExp.addLoop(demo_loop)  # add the loop to the experiment
thisDemo_loop = demo_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDemo_loop.rgb)
if thisDemo_loop != None:
    for paramName in thisDemo_loop:
        exec('{} = thisDemo_loop[paramName]'.format(paramName))

for thisDemo_loop in demo_loop:
    currentLoop = demo_loop
    # abbreviate parameter names if possible (e.g. rgb = thisDemo_loop.rgb)
    if thisDemo_loop != None:
        for paramName in thisDemo_loop:
            exec('{} = thisDemo_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "demo_trials"-------
    continueRoutine = True
    # update component parameters for each repeat
    demo_target.setImage(demo_target_image)
    image.setImage(noise_pattern)
    demo_right_image.setImage(demo_test_image_right)
    demo_left_image.setImage(demo_test_image_left)
    key_resp_demo.keys = []
    key_resp_demo.rt = []
    _key_resp_demo_allKeys = []
    # keep track of which components have finished
    demo_trialsComponents = [demo_target, image, demo_right_image, demo_left_image, key_resp_demo, choose_the_image_you_saw]
    for thisComponent in demo_trialsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    demo_trialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "demo_trials"-------
    while continueRoutine:
        # get current time
        t = demo_trialsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=demo_trialsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *demo_target* updates
        if demo_target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            demo_target.frameNStart = frameN  # exact frame index
            demo_target.tStart = t  # local t and not account for scr refresh
            demo_target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demo_target, 'tStartRefresh')  # time at next scr refresh
            demo_target.setAutoDraw(True)
        if demo_target.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > demo_target.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                demo_target.tStop = t  # not accounting for scr refresh
                demo_target.frameNStop = frameN  # exact frame index
                win.timeOnFlip(demo_target, 'tStopRefresh')  # time at next scr refresh
                demo_target.setAutoDraw(False)
        
        # *image* updates
        if image.status == NOT_STARTED and tThisFlip >= 0.15-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            image.setAutoDraw(True)
        if image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image.tStartRefresh + 0.15-frameTolerance:
                # keep track of stop time/frame for later
                image.tStop = t  # not accounting for scr refresh
                image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
                image.setAutoDraw(False)
        
        # *demo_right_image* updates
        if demo_right_image.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            demo_right_image.frameNStart = frameN  # exact frame index
            demo_right_image.tStart = t  # local t and not account for scr refresh
            demo_right_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demo_right_image, 'tStartRefresh')  # time at next scr refresh
            demo_right_image.setAutoDraw(True)
        
        # *demo_left_image* updates
        if demo_left_image.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            demo_left_image.frameNStart = frameN  # exact frame index
            demo_left_image.tStart = t  # local t and not account for scr refresh
            demo_left_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demo_left_image, 'tStartRefresh')  # time at next scr refresh
            demo_left_image.setAutoDraw(True)
        
        # *key_resp_demo* updates
        waitOnFlip = False
        if key_resp_demo.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            key_resp_demo.frameNStart = frameN  # exact frame index
            key_resp_demo.tStart = t  # local t and not account for scr refresh
            key_resp_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_demo, 'tStartRefresh')  # time at next scr refresh
            key_resp_demo.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_demo.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_demo.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_demo.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_demo.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_demo_allKeys.extend(theseKeys)
            if len(_key_resp_demo_allKeys):
                key_resp_demo.keys = _key_resp_demo_allKeys[-1].name  # just the last key pressed
                key_resp_demo.rt = _key_resp_demo_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *choose_the_image_you_saw* updates
        if choose_the_image_you_saw.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            choose_the_image_you_saw.frameNStart = frameN  # exact frame index
            choose_the_image_you_saw.tStart = t  # local t and not account for scr refresh
            choose_the_image_you_saw.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choose_the_image_you_saw, 'tStartRefresh')  # time at next scr refresh
            choose_the_image_you_saw.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in demo_trialsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "demo_trials"-------
    for thisComponent in demo_trialsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    demo_loop.addData('demo_target.started', demo_target.tStartRefresh)
    demo_loop.addData('demo_target.stopped', demo_target.tStopRefresh)
    demo_loop.addData('image.started', image.tStartRefresh)
    demo_loop.addData('image.stopped', image.tStopRefresh)
    demo_loop.addData('demo_right_image.started', demo_right_image.tStartRefresh)
    demo_loop.addData('demo_right_image.stopped', demo_right_image.tStopRefresh)
    demo_loop.addData('demo_left_image.started', demo_left_image.tStartRefresh)
    demo_loop.addData('demo_left_image.stopped', demo_left_image.tStopRefresh)
    # check responses
    if key_resp_demo.keys in ['', [], None]:  # No response was made
        key_resp_demo.keys = None
    demo_loop.addData('key_resp_demo.keys',key_resp_demo.keys)
    if key_resp_demo.keys != None:  # we had a response
        demo_loop.addData('key_resp_demo.rt', key_resp_demo.rt)
    demo_loop.addData('key_resp_demo.started', key_resp_demo.tStartRefresh)
    demo_loop.addData('key_resp_demo.stopped', key_resp_demo.tStopRefresh)
    demo_loop.addData('choose_the_image_you_saw.started', choose_the_image_you_saw.tStartRefresh)
    demo_loop.addData('choose_the_image_you_saw.stopped', choose_the_image_you_saw.tStopRefresh)
    # the Routine "demo_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'demo_loop'


# ------Prepare to start Routine "instructions_before_exp"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_after_demo.keys = []
key_resp_after_demo.rt = []
_key_resp_after_demo_allKeys = []
# keep track of which components have finished
instructions_before_expComponents = [key_resp_after_demo, text_after_demo_instr]
for thisComponent in instructions_before_expComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_before_expClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_before_exp"-------
while continueRoutine:
    # get current time
    t = instructions_before_expClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_before_expClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_after_demo* updates
    waitOnFlip = False
    if key_resp_after_demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_after_demo.frameNStart = frameN  # exact frame index
        key_resp_after_demo.tStart = t  # local t and not account for scr refresh
        key_resp_after_demo.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_after_demo, 'tStartRefresh')  # time at next scr refresh
        key_resp_after_demo.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_after_demo.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_after_demo.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_after_demo.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_after_demo.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_after_demo_allKeys.extend(theseKeys)
        if len(_key_resp_after_demo_allKeys):
            key_resp_after_demo.keys = _key_resp_after_demo_allKeys[-1].name  # just the last key pressed
            key_resp_after_demo.rt = _key_resp_after_demo_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_after_demo_instr* updates
    if text_after_demo_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_after_demo_instr.frameNStart = frameN  # exact frame index
        text_after_demo_instr.tStart = t  # local t and not account for scr refresh
        text_after_demo_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_after_demo_instr, 'tStartRefresh')  # time at next scr refresh
        text_after_demo_instr.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_before_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_before_exp"-------
for thisComponent in instructions_before_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_after_demo.keys in ['', [], None]:  # No response was made
    key_resp_after_demo.keys = None
thisExp.addData('key_resp_after_demo.keys',key_resp_after_demo.keys)
if key_resp_after_demo.keys != None:  # we had a response
    thisExp.addData('key_resp_after_demo.rt', key_resp_after_demo.rt)
thisExp.addData('key_resp_after_demo.started', key_resp_after_demo.tStartRefresh)
thisExp.addData('key_resp_after_demo.stopped', key_resp_after_demo.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_after_demo_instr.started', text_after_demo_instr.tStartRefresh)
thisExp.addData('text_after_demo_instr.stopped', text_after_demo_instr.tStopRefresh)
# the Routine "instructions_before_exp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp_loops = data.TrialHandler(nReps=1.0, method='fullRandom', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('experiment_csv.csv'),
    seed=None, name='exp_loops')
thisExp.addLoop(exp_loops)  # add the loop to the experiment
thisExp_loop = exp_loops.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp_loop.rgb)
if thisExp_loop != None:
    for paramName in thisExp_loop:
        exec('{} = thisExp_loop[paramName]'.format(paramName))

for thisExp_loop in exp_loops:
    currentLoop = exp_loops
    # abbreviate parameter names if possible (e.g. rgb = thisExp_loop.rgb)
    if thisExp_loop != None:
        for paramName in thisExp_loop:
            exec('{} = thisExp_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "exp_trials"-------
    continueRoutine = True
    # update component parameters for each repeat
    exp_target_image.setImage(target)
    exp_mask.setImage(noise_image)
    exp_right_image.setImage(image1)
    exp_left_image.setImage(image2)
    text.setText('+')
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    exp_trialsComponents = [exp_target_image, exp_mask, exp_right_image, exp_left_image, text, key_resp_3]
    for thisComponent in exp_trialsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    exp_trialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "exp_trials"-------
    while continueRoutine:
        # get current time
        t = exp_trialsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=exp_trialsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *exp_target_image* updates
        if exp_target_image.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            exp_target_image.frameNStart = frameN  # exact frame index
            exp_target_image.tStart = t  # local t and not account for scr refresh
            exp_target_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_target_image, 'tStartRefresh')  # time at next scr refresh
            exp_target_image.setAutoDraw(True)
        if exp_target_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp_target_image.tStartRefresh + 0.05-frameTolerance:
                # keep track of stop time/frame for later
                exp_target_image.tStop = t  # not accounting for scr refresh
                exp_target_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(exp_target_image, 'tStopRefresh')  # time at next scr refresh
                exp_target_image.setAutoDraw(False)
        
        # *exp_mask* updates
        if exp_mask.status == NOT_STARTED and tThisFlip >= 0.55-frameTolerance:
            # keep track of start time/frame for later
            exp_mask.frameNStart = frameN  # exact frame index
            exp_mask.tStart = t  # local t and not account for scr refresh
            exp_mask.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_mask, 'tStartRefresh')  # time at next scr refresh
            exp_mask.setAutoDraw(True)
        if exp_mask.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp_mask.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                exp_mask.tStop = t  # not accounting for scr refresh
                exp_mask.frameNStop = frameN  # exact frame index
                win.timeOnFlip(exp_mask, 'tStopRefresh')  # time at next scr refresh
                exp_mask.setAutoDraw(False)
        
        # *exp_right_image* updates
        if exp_right_image.status == NOT_STARTED and tThisFlip >= 1.55-frameTolerance:
            # keep track of start time/frame for later
            exp_right_image.frameNStart = frameN  # exact frame index
            exp_right_image.tStart = t  # local t and not account for scr refresh
            exp_right_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_right_image, 'tStartRefresh')  # time at next scr refresh
            exp_right_image.setAutoDraw(True)
        
        # *exp_left_image* updates
        if exp_left_image.status == NOT_STARTED and tThisFlip >= 1.55-frameTolerance:
            # keep track of start time/frame for later
            exp_left_image.frameNStart = frameN  # exact frame index
            exp_left_image.tStart = t  # local t and not account for scr refresh
            exp_left_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_left_image, 'tStartRefresh')  # time at next scr refresh
            exp_left_image.setAutoDraw(True)
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                text.setAutoDraw(False)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 1.55-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in exp_trialsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "exp_trials"-------
    for thisComponent in exp_trialsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loops.addData('exp_target_image.started', exp_target_image.tStartRefresh)
    exp_loops.addData('exp_target_image.stopped', exp_target_image.tStopRefresh)
    exp_loops.addData('exp_mask.started', exp_mask.tStartRefresh)
    exp_loops.addData('exp_mask.stopped', exp_mask.tStopRefresh)
    exp_loops.addData('exp_right_image.started', exp_right_image.tStartRefresh)
    exp_loops.addData('exp_right_image.stopped', exp_right_image.tStopRefresh)
    exp_loops.addData('exp_left_image.started', exp_left_image.tStartRefresh)
    exp_loops.addData('exp_left_image.stopped', exp_left_image.tStopRefresh)
    exp_loops.addData('text.started', text.tStartRefresh)
    exp_loops.addData('text.stopped', text.tStopRefresh)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    exp_loops.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        exp_loops.addData('key_resp_3.rt', key_resp_3.rt)
    exp_loops.addData('key_resp_3.started', key_resp_3.tStartRefresh)
    exp_loops.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
    # the Routine "exp_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'exp_loops'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
