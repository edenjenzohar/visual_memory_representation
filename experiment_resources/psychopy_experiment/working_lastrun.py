#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Sun Jun 18 16:46:37 2023
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
expName = 'working_memory'  # from the Builder filename that created this script
expInfo = {'ID': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['ID'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/edenzohar/Thesis/visual_memory_representation_final/experiment_resources/psychopy_experiment/working_lastrun.py',
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
    size=[1512, 982], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
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
    text='By pressing ‘i consent’ I hereby accept to participate in a visual memory experiment.\nI declare I understood the experiment includes the following parts: Experiment description and instructions, practice phase, study phase and test phase.\n\nThe goal of this study is to examine memory encoding processes.\n\nMethods: The experiment will be presented on a computer screen. In the first part you will study a series of neutral images and later will be asked to recognize them. Duration: up to 10 minutes. Time to complete the experiment from approval: 24 hours\nParticipants: Healthy population (Amazon Mechanical Turk workers)\nNumber of subjects: 100\nSide effects or discomfort: none\n\nBenefit from the experiment: Participants are not expected to gain personal benefit from this experiment. Through this experiment the research team hopes to uncover how human remember visual stimuli.\nPossible risk factors: none\n\nVoluntary participation: participants are free to quit the experiment at any moment with no penalty, since participation is voluntary.\n\nResearch team is located in Tel Aviv University, and the experimental protocol was approved by its ethics committee.\n\nBy pressing the "I conesnt" button, I hereby declare that I read the above information and agree to participate in this experiment.\n',
    font='Open Sans',
    pos=(0, 0.025), height=0.025, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
button = visual.ButtonStim(win, 
    text='I consent', font='Arvo',
    pos=(0, -0.38),
    letterHeight=0.03,
    size=[0.16, 0.07], borderWidth=0.0,
    fillColor='green', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button'
)
button.buttonClock = core.Clock()

# Initialize components for Routine "instructions_1"
instructions_1Clock = core.Clock()
key_resp_2 = keyboard.Keyboard()
text_instructions_first_slide = visual.TextStim(win=win, name='text_instructions_first_slide',
    text='This experiment contains two parts: \n\nPart 1: \n\n\nIn this part you are asked to memorize a series of breifly presented images. In each trial, following the images presentation, you will be presented with two images, one of which was previously presented during that trial. Please select the image you have previosly seen using the corresponding arrow key (left/right).  \n\n\nPart 2: \n\n\nYou are asked to rate the similarity between pairs of images. Rate the extent of the similarity by selecting the relevant score on the similarity scale at the bottom of the screen using the mouse. \n\n\nWe will begin with a short demo of part 1.\n\n\npress the space bar to begin.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "encoding_demo"
encoding_demoClock = core.Clock()
image_0_demo = visual.ImageStim(
    win=win,
    name='image_0_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_1_demo = visual.ImageStim(
    win=win,
    name='image_1_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_2_demo = visual.ImageStim(
    win=win,
    name='image_2_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_3_demo = visual.ImageStim(
    win=win,
    name='image_3_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
image_4_demo = visual.ImageStim(
    win=win,
    name='image_4_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
image_5_demo = visual.ImageStim(
    win=win,
    name='image_5_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
blank_screen_demo = visual.TextStim(win=win, name='blank_screen_demo',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
fixation_demo = visual.TextStim(win=win, name='fixation_demo',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "test_demo"
test_demoClock = core.Clock()
image_left_demo = visual.ImageStim(
    win=win,
    name='image_left_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_right_demo = visual.ImageStim(
    win=win,
    name='image_right_demo', 
    image='sin', mask=None,
    ori=0.0, pos=(0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
demo_test_key_resp = keyboard.Keyboard()
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "instructions_before_exp"
instructions_before_expClock = core.Clock()
key_resp_after_demo = keyboard.Keyboard()
text_after_demo_instr = visual.TextStim(win=win, name='text_after_demo_instr',
    text='Now Part 1 of the experiemnt will begin. \n\nReminder: \n\nIn this part you are asked to memorize a series of breifly presented images. In each trial, following the images presentation, you will be presented with two images, one of which was previously presented during that trial. Please select the image you have previosly seen using the corresponding arrow key (left/right).  \n\n\n\npress the spacebar to begin.\n\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "encoding"
encodingClock = core.Clock()
image_0 = visual.ImageStim(
    win=win,
    name='image_0', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_1 = visual.ImageStim(
    win=win,
    name='image_1', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
image_5 = visual.ImageStim(
    win=win,
    name='image_5', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
blank_screen = visual.TextStim(win=win, name='blank_screen',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
fixation_encoding = visual.TextStim(win=win, name='fixation_encoding',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "test"
testClock = core.Clock()
image_left = visual.ImageStim(
    win=win,
    name='image_left', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_right = visual.ImageStim(
    win=win,
    name='image_right', 
    image='sin', mask=None,
    ori=0.0, pos=(0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
test_key_resp = keyboard.Keyboard()
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "instructions_after_part1"
instructions_after_part1Clock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Now we will begin part 2. \n\n\n\nReminder: You are asked to rate the similarity between pairs of images. Rate the extent of the similarity by selecting the relevant score on the similarity scale at the bottom of the screen using the mouse. \n\n\n\nJudge the similarity of these images on the scale of:\n\n\n\n1 - not similar\n\n\n\n9 - very similar\n\n\n\nUse the mouse to select the value on the scale.\n\n\n\npress the spacebar to begin. ',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "part2_exp"
part2_expClock = core.Clock()
image_left_part2 = visual.ImageStim(
    win=win,
    name='image_left_part2', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_right_part2 = visual.ImageStim(
    win=win,
    name='image_right_part2', 
    image='sin', mask=None,
    ori=0.0, pos=(0.3, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider_part2 = visual.Slider(win=win, name='slider_part2',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.32), units=None,
    labels=["1 \nnot similar", 2, 3, 4, 5, 6, 7, 8, "9 \nvery similar"], ticks=(1,2,3,4,5,6,7,8,9), granularity=0.0,
    style='rating', styleTweaks=(), opacity=None,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.03,
    flip=False, depth=-2, readOnly=False)
text_5 = visual.TextStim(win=win, name='text_5',
    text='',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "last_slide"
last_slideClock = core.Clock()
key_resp_last_slide = keyboard.Keyboard()
text_last_slide = visual.TextStim(win=win, name='text_last_slide',
    text='Thank you!\n\n\n\nYour credit code is:\n\n\n\n‘tchcugsi’\n\n\n\nReport it in the M-turk platform. \n\n\n\nPlease press the space bar to finish',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

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
consent_formComponents = [key_resp, text_consent_form, button]
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
    
    # *button* updates
    if button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        button.frameNStart = frameN  # exact frame index
        button.tStart = t  # local t and not account for scr refresh
        button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button, 'tStartRefresh')  # time at next scr refresh
        button.setAutoDraw(True)
    if button.status == STARTED:
        # check whether button has been pressed
        if button.isClicked:
            if not button.wasClicked:
                button.timesOn.append(button.buttonClock.getTime()) # store time of first click
                button.timesOff.append(button.buttonClock.getTime()) # store time clicked until
            else:
                button.timesOff[-1] = button.buttonClock.getTime() # update time clicked until
            if not button.wasClicked:
                continueRoutine = False  # end routine when button is clicked
                None
            button.wasClicked = True  # if button is still clicked next frame, it is not a new click
        else:
            button.wasClicked = False  # if button is clicked next frame, it is a new click
    else:
        button.wasClicked = False  # if button is clicked next frame, it is a new click
    
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
thisExp.addData('button.started', button.tStartRefresh)
thisExp.addData('button.stopped', button.tStopRefresh)
thisExp.addData('button.numClicks', button.numClicks)
if button.numClicks:
   thisExp.addData('button.timesOn', button.timesOn)
   thisExp.addData('button.timesOff', button.timesOff)
else:
   thisExp.addData('button.timesOn', "")
   thisExp.addData('button.timesOff', "")
# the Routine "consent_form" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
instructions_1Components = [key_resp_2, text_instructions_first_slide]
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
    
    # *text_instructions_first_slide* updates
    if text_instructions_first_slide.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_instructions_first_slide.frameNStart = frameN  # exact frame index
        text_instructions_first_slide.tStart = t  # local t and not account for scr refresh
        text_instructions_first_slide.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_instructions_first_slide, 'tStartRefresh')  # time at next scr refresh
        text_instructions_first_slide.setAutoDraw(True)
    
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
thisExp.addData('text_instructions_first_slide.started', text_instructions_first_slide.tStartRefresh)
thisExp.addData('text_instructions_first_slide.stopped', text_instructions_first_slide.tStopRefresh)
# the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
demo_loops = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('demo_encoding.xlsx'),
    seed=None, name='demo_loops')
thisExp.addLoop(demo_loops)  # add the loop to the experiment
thisDemo_loop = demo_loops.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDemo_loop.rgb)
if thisDemo_loop != None:
    for paramName in thisDemo_loop:
        exec('{} = thisDemo_loop[paramName]'.format(paramName))

for thisDemo_loop in demo_loops:
    currentLoop = demo_loops
    # abbreviate parameter names if possible (e.g. rgb = thisDemo_loop.rgb)
    if thisDemo_loop != None:
        for paramName in thisDemo_loop:
            exec('{} = thisDemo_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "encoding_demo"-------
    continueRoutine = True
    routineTimer.add(2.700000)
    # update component parameters for each repeat
    image_0_demo.setImage(background_0)
    image_1_demo.setImage(background_1)
    image_2_demo.setImage(background_2)
    image_3_demo.setImage(background_3)
    image_4_demo.setImage(background_4)
    image_5_demo.setImage(background_5)
    blank_screen_demo.setText('')
    # keep track of which components have finished
    encoding_demoComponents = [image_0_demo, image_1_demo, image_2_demo, image_3_demo, image_4_demo, image_5_demo, blank_screen_demo, fixation_demo]
    for thisComponent in encoding_demoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    encoding_demoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "encoding_demo"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = encoding_demoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=encoding_demoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_0_demo* updates
        if image_0_demo.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            image_0_demo.frameNStart = frameN  # exact frame index
            image_0_demo.tStart = t  # local t and not account for scr refresh
            image_0_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_0_demo, 'tStartRefresh')  # time at next scr refresh
            image_0_demo.setAutoDraw(True)
        if image_0_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_0_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_0_demo.tStop = t  # not accounting for scr refresh
                image_0_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_0_demo, 'tStopRefresh')  # time at next scr refresh
                image_0_demo.setAutoDraw(False)
        
        # *image_1_demo* updates
        if image_1_demo.status == NOT_STARTED and tThisFlip >= 0.7-frameTolerance:
            # keep track of start time/frame for later
            image_1_demo.frameNStart = frameN  # exact frame index
            image_1_demo.tStart = t  # local t and not account for scr refresh
            image_1_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_1_demo, 'tStartRefresh')  # time at next scr refresh
            image_1_demo.setAutoDraw(True)
        if image_1_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_1_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_1_demo.tStop = t  # not accounting for scr refresh
                image_1_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_1_demo, 'tStopRefresh')  # time at next scr refresh
                image_1_demo.setAutoDraw(False)
        
        # *image_2_demo* updates
        if image_2_demo.status == NOT_STARTED and tThisFlip >= 0.9-frameTolerance:
            # keep track of start time/frame for later
            image_2_demo.frameNStart = frameN  # exact frame index
            image_2_demo.tStart = t  # local t and not account for scr refresh
            image_2_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2_demo, 'tStartRefresh')  # time at next scr refresh
            image_2_demo.setAutoDraw(True)
        if image_2_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_2_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_2_demo.tStop = t  # not accounting for scr refresh
                image_2_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_2_demo, 'tStopRefresh')  # time at next scr refresh
                image_2_demo.setAutoDraw(False)
        
        # *image_3_demo* updates
        if image_3_demo.status == NOT_STARTED and tThisFlip >= 1.1-frameTolerance:
            # keep track of start time/frame for later
            image_3_demo.frameNStart = frameN  # exact frame index
            image_3_demo.tStart = t  # local t and not account for scr refresh
            image_3_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3_demo, 'tStartRefresh')  # time at next scr refresh
            image_3_demo.setAutoDraw(True)
        if image_3_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_3_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_3_demo.tStop = t  # not accounting for scr refresh
                image_3_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_3_demo, 'tStopRefresh')  # time at next scr refresh
                image_3_demo.setAutoDraw(False)
        
        # *image_4_demo* updates
        if image_4_demo.status == NOT_STARTED and tThisFlip >= 1.3-frameTolerance:
            # keep track of start time/frame for later
            image_4_demo.frameNStart = frameN  # exact frame index
            image_4_demo.tStart = t  # local t and not account for scr refresh
            image_4_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_4_demo, 'tStartRefresh')  # time at next scr refresh
            image_4_demo.setAutoDraw(True)
        if image_4_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_4_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_4_demo.tStop = t  # not accounting for scr refresh
                image_4_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_4_demo, 'tStopRefresh')  # time at next scr refresh
                image_4_demo.setAutoDraw(False)
        
        # *image_5_demo* updates
        if image_5_demo.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            image_5_demo.frameNStart = frameN  # exact frame index
            image_5_demo.tStart = t  # local t and not account for scr refresh
            image_5_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_5_demo, 'tStartRefresh')  # time at next scr refresh
            image_5_demo.setAutoDraw(True)
        if image_5_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_5_demo.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                image_5_demo.tStop = t  # not accounting for scr refresh
                image_5_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_5_demo, 'tStopRefresh')  # time at next scr refresh
                image_5_demo.setAutoDraw(False)
        
        # *blank_screen_demo* updates
        if blank_screen_demo.status == NOT_STARTED and tThisFlip >= 1.7-frameTolerance:
            # keep track of start time/frame for later
            blank_screen_demo.frameNStart = frameN  # exact frame index
            blank_screen_demo.tStart = t  # local t and not account for scr refresh
            blank_screen_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blank_screen_demo, 'tStartRefresh')  # time at next scr refresh
            blank_screen_demo.setAutoDraw(True)
        if blank_screen_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > blank_screen_demo.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                blank_screen_demo.tStop = t  # not accounting for scr refresh
                blank_screen_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(blank_screen_demo, 'tStopRefresh')  # time at next scr refresh
                blank_screen_demo.setAutoDraw(False)
        
        # *fixation_demo* updates
        if fixation_demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_demo.frameNStart = frameN  # exact frame index
            fixation_demo.tStart = t  # local t and not account for scr refresh
            fixation_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_demo, 'tStartRefresh')  # time at next scr refresh
            fixation_demo.setAutoDraw(True)
        if fixation_demo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_demo.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_demo.tStop = t  # not accounting for scr refresh
                fixation_demo.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_demo, 'tStopRefresh')  # time at next scr refresh
                fixation_demo.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in encoding_demoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "encoding_demo"-------
    for thisComponent in encoding_demoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    demo_loops.addData('image_0_demo.started', image_0_demo.tStartRefresh)
    demo_loops.addData('image_0_demo.stopped', image_0_demo.tStopRefresh)
    demo_loops.addData('image_1_demo.started', image_1_demo.tStartRefresh)
    demo_loops.addData('image_1_demo.stopped', image_1_demo.tStopRefresh)
    demo_loops.addData('image_2_demo.started', image_2_demo.tStartRefresh)
    demo_loops.addData('image_2_demo.stopped', image_2_demo.tStopRefresh)
    demo_loops.addData('image_3_demo.started', image_3_demo.tStartRefresh)
    demo_loops.addData('image_3_demo.stopped', image_3_demo.tStopRefresh)
    demo_loops.addData('image_4_demo.started', image_4_demo.tStartRefresh)
    demo_loops.addData('image_4_demo.stopped', image_4_demo.tStopRefresh)
    demo_loops.addData('image_5_demo.started', image_5_demo.tStartRefresh)
    demo_loops.addData('image_5_demo.stopped', image_5_demo.tStopRefresh)
    demo_loops.addData('blank_screen_demo.started', blank_screen_demo.tStartRefresh)
    demo_loops.addData('blank_screen_demo.stopped', blank_screen_demo.tStopRefresh)
    demo_loops.addData('fixation_demo.started', fixation_demo.tStartRefresh)
    demo_loops.addData('fixation_demo.stopped', fixation_demo.tStopRefresh)
    
    # ------Prepare to start Routine "test_demo"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_left_demo.setImage(image1)
    image_right_demo.setImage(image2)
    demo_test_key_resp.keys = []
    demo_test_key_resp.rt = []
    _demo_test_key_resp_allKeys = []
    text_4.setText('choose the image you have previously seen')
    # keep track of which components have finished
    test_demoComponents = [image_left_demo, image_right_demo, demo_test_key_resp, text_4]
    for thisComponent in test_demoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    test_demoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test_demo"-------
    while continueRoutine:
        # get current time
        t = test_demoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=test_demoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_left_demo* updates
        if image_left_demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_left_demo.frameNStart = frameN  # exact frame index
            image_left_demo.tStart = t  # local t and not account for scr refresh
            image_left_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_left_demo, 'tStartRefresh')  # time at next scr refresh
            image_left_demo.setAutoDraw(True)
        
        # *image_right_demo* updates
        if image_right_demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_right_demo.frameNStart = frameN  # exact frame index
            image_right_demo.tStart = t  # local t and not account for scr refresh
            image_right_demo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_right_demo, 'tStartRefresh')  # time at next scr refresh
            image_right_demo.setAutoDraw(True)
        
        # *demo_test_key_resp* updates
        waitOnFlip = False
        if demo_test_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            demo_test_key_resp.frameNStart = frameN  # exact frame index
            demo_test_key_resp.tStart = t  # local t and not account for scr refresh
            demo_test_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demo_test_key_resp, 'tStartRefresh')  # time at next scr refresh
            demo_test_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(demo_test_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(demo_test_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if demo_test_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = demo_test_key_resp.getKeys(keyList=['left', 'right'], waitRelease=False)
            _demo_test_key_resp_allKeys.extend(theseKeys)
            if len(_demo_test_key_resp_allKeys):
                demo_test_key_resp.keys = _demo_test_key_resp_allKeys[-1].name  # just the last key pressed
                demo_test_key_resp.rt = _demo_test_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_demoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test_demo"-------
    for thisComponent in test_demoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    demo_loops.addData('image_left_demo.started', image_left_demo.tStartRefresh)
    demo_loops.addData('image_left_demo.stopped', image_left_demo.tStopRefresh)
    demo_loops.addData('image_right_demo.started', image_right_demo.tStartRefresh)
    demo_loops.addData('image_right_demo.stopped', image_right_demo.tStopRefresh)
    # check responses
    if demo_test_key_resp.keys in ['', [], None]:  # No response was made
        demo_test_key_resp.keys = None
    demo_loops.addData('demo_test_key_resp.keys',demo_test_key_resp.keys)
    if demo_test_key_resp.keys != None:  # we had a response
        demo_loops.addData('demo_test_key_resp.rt', demo_test_key_resp.rt)
    demo_loops.addData('demo_test_key_resp.started', demo_test_key_resp.tStartRefresh)
    demo_loops.addData('demo_test_key_resp.stopped', demo_test_key_resp.tStopRefresh)
    demo_loops.addData('text_4.started', text_4.tStartRefresh)
    demo_loops.addData('text_4.stopped', text_4.tStopRefresh)
    # the Routine "test_demo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'demo_loops'


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
exp_loops = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('sub_4.csv'),
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
    
    # ------Prepare to start Routine "encoding"-------
    continueRoutine = True
    routineTimer.add(3.500000)
    # update component parameters for each repeat
    image_0.setImage(background_0)
    image_1.setImage(background_1)
    image_2.setImage(background_2)
    image_3.setImage(background_3)
    image_4.setImage(background_4)
    image_5.setImage(background_5)
    blank_screen.setText('')
    fixation_encoding.setText('+')
    # keep track of which components have finished
    encodingComponents = [image_0, image_1, image_2, image_3, image_4, image_5, blank_screen, fixation_encoding]
    for thisComponent in encodingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    encodingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "encoding"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = encodingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=encodingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_0* updates
        if image_0.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            image_0.frameNStart = frameN  # exact frame index
            image_0.tStart = t  # local t and not account for scr refresh
            image_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_0, 'tStartRefresh')  # time at next scr refresh
            image_0.setAutoDraw(True)
        if image_0.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_0.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_0.tStop = t  # not accounting for scr refresh
                image_0.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_0, 'tStopRefresh')  # time at next scr refresh
                image_0.setAutoDraw(False)
        
        # *image_1* updates
        if image_1.status == NOT_STARTED and tThisFlip >= 1.25-frameTolerance:
            # keep track of start time/frame for later
            image_1.frameNStart = frameN  # exact frame index
            image_1.tStart = t  # local t and not account for scr refresh
            image_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
            image_1.setAutoDraw(True)
        if image_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_1.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_1.tStop = t  # not accounting for scr refresh
                image_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_1, 'tStopRefresh')  # time at next scr refresh
                image_1.setAutoDraw(False)
        
        # *image_2* updates
        if image_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            image_2.frameNStart = frameN  # exact frame index
            image_2.tStart = t  # local t and not account for scr refresh
            image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
            image_2.setAutoDraw(True)
        if image_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_2.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_2.tStop = t  # not accounting for scr refresh
                image_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_2, 'tStopRefresh')  # time at next scr refresh
                image_2.setAutoDraw(False)
        
        # *image_3* updates
        if image_3.status == NOT_STARTED and tThisFlip >= 1.75-frameTolerance:
            # keep track of start time/frame for later
            image_3.frameNStart = frameN  # exact frame index
            image_3.tStart = t  # local t and not account for scr refresh
            image_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
            image_3.setAutoDraw(True)
        if image_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_3.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_3.tStop = t  # not accounting for scr refresh
                image_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_3, 'tStopRefresh')  # time at next scr refresh
                image_3.setAutoDraw(False)
        
        # *image_4* updates
        if image_4.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_4.frameNStart = frameN  # exact frame index
            image_4.tStart = t  # local t and not account for scr refresh
            image_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
            image_4.setAutoDraw(True)
        if image_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_4.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_4.tStop = t  # not accounting for scr refresh
                image_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_4, 'tStopRefresh')  # time at next scr refresh
                image_4.setAutoDraw(False)
        
        # *image_5* updates
        if image_5.status == NOT_STARTED and tThisFlip >= 2.25-frameTolerance:
            # keep track of start time/frame for later
            image_5.frameNStart = frameN  # exact frame index
            image_5.tStart = t  # local t and not account for scr refresh
            image_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
            image_5.setAutoDraw(True)
        if image_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_5.tStartRefresh + 0.25-frameTolerance:
                # keep track of stop time/frame for later
                image_5.tStop = t  # not accounting for scr refresh
                image_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_5, 'tStopRefresh')  # time at next scr refresh
                image_5.setAutoDraw(False)
        
        # *blank_screen* updates
        if blank_screen.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            blank_screen.frameNStart = frameN  # exact frame index
            blank_screen.tStart = t  # local t and not account for scr refresh
            blank_screen.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blank_screen, 'tStartRefresh')  # time at next scr refresh
            blank_screen.setAutoDraw(True)
        if blank_screen.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > blank_screen.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                blank_screen.tStop = t  # not accounting for scr refresh
                blank_screen.frameNStop = frameN  # exact frame index
                win.timeOnFlip(blank_screen, 'tStopRefresh')  # time at next scr refresh
                blank_screen.setAutoDraw(False)
        
        # *fixation_encoding* updates
        if fixation_encoding.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_encoding.frameNStart = frameN  # exact frame index
            fixation_encoding.tStart = t  # local t and not account for scr refresh
            fixation_encoding.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_encoding, 'tStartRefresh')  # time at next scr refresh
            fixation_encoding.setAutoDraw(True)
        if fixation_encoding.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_encoding.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                fixation_encoding.tStop = t  # not accounting for scr refresh
                fixation_encoding.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_encoding, 'tStopRefresh')  # time at next scr refresh
                fixation_encoding.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in encodingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "encoding"-------
    for thisComponent in encodingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loops.addData('image_0.started', image_0.tStartRefresh)
    exp_loops.addData('image_0.stopped', image_0.tStopRefresh)
    exp_loops.addData('image_1.started', image_1.tStartRefresh)
    exp_loops.addData('image_1.stopped', image_1.tStopRefresh)
    exp_loops.addData('image_2.started', image_2.tStartRefresh)
    exp_loops.addData('image_2.stopped', image_2.tStopRefresh)
    exp_loops.addData('image_3.started', image_3.tStartRefresh)
    exp_loops.addData('image_3.stopped', image_3.tStopRefresh)
    exp_loops.addData('image_4.started', image_4.tStartRefresh)
    exp_loops.addData('image_4.stopped', image_4.tStopRefresh)
    exp_loops.addData('image_5.started', image_5.tStartRefresh)
    exp_loops.addData('image_5.stopped', image_5.tStopRefresh)
    exp_loops.addData('blank_screen.started', blank_screen.tStartRefresh)
    exp_loops.addData('blank_screen.stopped', blank_screen.tStopRefresh)
    exp_loops.addData('fixation_encoding.started', fixation_encoding.tStartRefresh)
    exp_loops.addData('fixation_encoding.stopped', fixation_encoding.tStopRefresh)
    
    # ------Prepare to start Routine "test"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_left.setImage(image1)
    image_right.setImage(image2)
    test_key_resp.keys = []
    test_key_resp.rt = []
    _test_key_resp_allKeys = []
    text_6.setText('choose the image you have previously seen')
    # keep track of which components have finished
    testComponents = [image_left, image_right, test_key_resp, text_6]
    for thisComponent in testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test"-------
    while continueRoutine:
        # get current time
        t = testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_left* updates
        if image_left.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_left.frameNStart = frameN  # exact frame index
            image_left.tStart = t  # local t and not account for scr refresh
            image_left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_left, 'tStartRefresh')  # time at next scr refresh
            image_left.setAutoDraw(True)
        
        # *image_right* updates
        if image_right.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_right.frameNStart = frameN  # exact frame index
            image_right.tStart = t  # local t and not account for scr refresh
            image_right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_right, 'tStartRefresh')  # time at next scr refresh
            image_right.setAutoDraw(True)
        
        # *test_key_resp* updates
        waitOnFlip = False
        if test_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test_key_resp.frameNStart = frameN  # exact frame index
            test_key_resp.tStart = t  # local t and not account for scr refresh
            test_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test_key_resp, 'tStartRefresh')  # time at next scr refresh
            test_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(test_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(test_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if test_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = test_key_resp.getKeys(keyList=['left', 'right'], waitRelease=False)
            _test_key_resp_allKeys.extend(theseKeys)
            if len(_test_key_resp_allKeys):
                test_key_resp.keys = _test_key_resp_allKeys[-1].name  # just the last key pressed
                test_key_resp.rt = _test_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test"-------
    for thisComponent in testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loops.addData('image_left.started', image_left.tStartRefresh)
    exp_loops.addData('image_left.stopped', image_left.tStopRefresh)
    exp_loops.addData('image_right.started', image_right.tStartRefresh)
    exp_loops.addData('image_right.stopped', image_right.tStopRefresh)
    # check responses
    if test_key_resp.keys in ['', [], None]:  # No response was made
        test_key_resp.keys = None
    exp_loops.addData('test_key_resp.keys',test_key_resp.keys)
    if test_key_resp.keys != None:  # we had a response
        exp_loops.addData('test_key_resp.rt', test_key_resp.rt)
    exp_loops.addData('test_key_resp.started', test_key_resp.tStartRefresh)
    exp_loops.addData('test_key_resp.stopped', test_key_resp.tStopRefresh)
    exp_loops.addData('text_6.started', text_6.tStartRefresh)
    exp_loops.addData('text_6.stopped', text_6.tStopRefresh)
    # the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'exp_loops'


# ------Prepare to start Routine "instructions_after_part1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
instructions_after_part1Components = [text_2, key_resp_4]
for thisComponent in instructions_after_part1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_after_part1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_after_part1"-------
while continueRoutine:
    # get current time
    t = instructions_after_part1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_after_part1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_after_part1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_after_part1"-------
for thisComponent in instructions_after_part1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_after_part1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
exp_loops_part2 = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('sub_0.csv'),
    seed=None, name='exp_loops_part2')
thisExp.addLoop(exp_loops_part2)  # add the loop to the experiment
thisExp_loops_part2 = exp_loops_part2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp_loops_part2.rgb)
if thisExp_loops_part2 != None:
    for paramName in thisExp_loops_part2:
        exec('{} = thisExp_loops_part2[paramName]'.format(paramName))

for thisExp_loops_part2 in exp_loops_part2:
    currentLoop = exp_loops_part2
    # abbreviate parameter names if possible (e.g. rgb = thisExp_loops_part2.rgb)
    if thisExp_loops_part2 != None:
        for paramName in thisExp_loops_part2:
            exec('{} = thisExp_loops_part2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "part2_exp"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_left_part2.setImage(image1)
    image_right_part2.setImage(image2)
    slider_part2.reset()
    text_5.setText('how similar are the images?')
    # keep track of which components have finished
    part2_expComponents = [image_left_part2, image_right_part2, slider_part2, text_5]
    for thisComponent in part2_expComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    part2_expClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "part2_exp"-------
    while continueRoutine:
        # get current time
        t = part2_expClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=part2_expClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_left_part2* updates
        if image_left_part2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_left_part2.frameNStart = frameN  # exact frame index
            image_left_part2.tStart = t  # local t and not account for scr refresh
            image_left_part2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_left_part2, 'tStartRefresh')  # time at next scr refresh
            image_left_part2.setAutoDraw(True)
        
        # *image_right_part2* updates
        if image_right_part2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_right_part2.frameNStart = frameN  # exact frame index
            image_right_part2.tStart = t  # local t and not account for scr refresh
            image_right_part2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_right_part2, 'tStartRefresh')  # time at next scr refresh
            image_right_part2.setAutoDraw(True)
        
        # *slider_part2* updates
        if slider_part2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_part2.frameNStart = frameN  # exact frame index
            slider_part2.tStart = t  # local t and not account for scr refresh
            slider_part2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_part2, 'tStartRefresh')  # time at next scr refresh
            slider_part2.setAutoDraw(True)
        
        # Check slider_part2 for response to end routine
        if slider_part2.getRating() is not None and slider_part2.status == STARTED:
            continueRoutine = False
        
        # *text_5* updates
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            text_5.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in part2_expComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "part2_exp"-------
    for thisComponent in part2_expComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loops_part2.addData('image_left_part2.started', image_left_part2.tStartRefresh)
    exp_loops_part2.addData('image_left_part2.stopped', image_left_part2.tStopRefresh)
    exp_loops_part2.addData('image_right_part2.started', image_right_part2.tStartRefresh)
    exp_loops_part2.addData('image_right_part2.stopped', image_right_part2.tStopRefresh)
    exp_loops_part2.addData('slider_part2.response', slider_part2.getRating())
    exp_loops_part2.addData('slider_part2.rt', slider_part2.getRT())
    exp_loops_part2.addData('slider_part2.started', slider_part2.tStartRefresh)
    exp_loops_part2.addData('slider_part2.stopped', slider_part2.tStopRefresh)
    exp_loops_part2.addData('text_5.started', text_5.tStartRefresh)
    exp_loops_part2.addData('text_5.stopped', text_5.tStopRefresh)
    # the Routine "part2_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'exp_loops_part2'


# ------Prepare to start Routine "last_slide"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_last_slide.keys = []
key_resp_last_slide.rt = []
_key_resp_last_slide_allKeys = []
# keep track of which components have finished
last_slideComponents = [key_resp_last_slide, text_last_slide]
for thisComponent in last_slideComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
last_slideClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "last_slide"-------
while continueRoutine:
    # get current time
    t = last_slideClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=last_slideClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_last_slide* updates
    waitOnFlip = False
    if key_resp_last_slide.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_last_slide.frameNStart = frameN  # exact frame index
        key_resp_last_slide.tStart = t  # local t and not account for scr refresh
        key_resp_last_slide.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_last_slide, 'tStartRefresh')  # time at next scr refresh
        key_resp_last_slide.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_last_slide.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_last_slide.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_last_slide.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_last_slide.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_last_slide_allKeys.extend(theseKeys)
        if len(_key_resp_last_slide_allKeys):
            key_resp_last_slide.keys = _key_resp_last_slide_allKeys[-1].name  # just the last key pressed
            key_resp_last_slide.rt = _key_resp_last_slide_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_last_slide* updates
    if text_last_slide.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_last_slide.frameNStart = frameN  # exact frame index
        text_last_slide.tStart = t  # local t and not account for scr refresh
        text_last_slide.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_last_slide, 'tStartRefresh')  # time at next scr refresh
        text_last_slide.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in last_slideComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "last_slide"-------
for thisComponent in last_slideComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_last_slide.keys in ['', [], None]:  # No response was made
    key_resp_last_slide.keys = None
thisExp.addData('key_resp_last_slide.keys',key_resp_last_slide.keys)
if key_resp_last_slide.keys != None:  # we had a response
    thisExp.addData('key_resp_last_slide.rt', key_resp_last_slide.rt)
thisExp.addData('key_resp_last_slide.started', key_resp_last_slide.tStartRefresh)
thisExp.addData('key_resp_last_slide.stopped', key_resp_last_slide.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_last_slide.started', text_last_slide.tStartRefresh)
thisExp.addData('text_last_slide.stopped', text_last_slide.tStopRefresh)
# the Routine "last_slide" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

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
