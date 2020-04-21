import { KEYFRAMES } from '../animations';
import { EasingType, EASING_FUNCTIONS } from '../easing/easing';
import { IAnimatable } from '../models/animatable';

/**
 * Create a new animation.
 * @param param0 - The data of the new animation.
 */
function createAnimation (
  element: HTMLElement,
  context: IAnimatable
): Animation {
  const newKeyFrames = context.keyFrames
    || (context.animation && KEYFRAMES[context.animation])
    || (context.keyFramesData && JSON.parse(context.keyFramesData))
    || [];
  const options = getAnimationOptions(context);
  const newAnimation = element.animate(newKeyFrames, options);
  newAnimation.pause();
  if (context.currentTime !== undefined)
    newAnimation.currentTime = context.currentTime;
  if (context.startTime !== undefined)
    newAnimation.startTime = context.startTime;

  return newAnimation;
}

/**
 * Clear props of the animatable context.
 * @param context - Animatable context.
 * @param options - Keyframe options.
 */
export function clearPropsWithOptions (
  context: IAnimatable,
  options: KeyframeAnimationOptions
) {
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      if (key === 'id') {
        context.animateId = undefined;
      } else {
        context[key] = undefined;
      }
    }
  }
}

/**
 * Load the options of the animation.
 * @param param0 - The data of the new animation.
 */
export function getAnimationOptions (
  context: IAnimatable
): KeyframeAnimationOptions {
  const animationOptions: KeyframeAnimationOptions = context.options
    || (context.optionsData && JSON.parse(context.optionsData))
    || {};
  if (context.delay !== undefined)
    animationOptions.delay = context.delay;
  if (context.duration !== undefined)
    animationOptions.duration = context.duration;
  if (context.direction !== undefined)
    animationOptions.direction = context.direction;
  if (context.composite !== undefined)
    animationOptions.composite = context.composite;
  const easingType = (context.easing || animationOptions.easing) as EasingType;
  animationOptions.easing = EASING_FUNCTIONS[easingType] || easingType;
  if (context.endDelay !== undefined)
    animationOptions.endDelay = context.endDelay;
  if (context.fill !== undefined)
    animationOptions.fill = context.fill;
  if (context.animateId !== undefined)
    animationOptions.id = context.animateId;
  if (context.iterations !== undefined)
    animationOptions.iterations = context.iterations;
  if (context.iterationStart !== undefined)
    animationOptions.iterationStart = context.iterationStart;
  if (context.iterationComposite !== undefined)
    animationOptions.iterationComposite = context.iterationComposite;

  return animationOptions;
}

export class AnimationManager {
  private element: HTMLElement
  private state: IAnimatable
  private animation: Animation = null
  private previousAnimation: Animation = null 

  get currentAnimation(): Animation {
    return this.animation || this.loadAnimation();
  }

  set currentAnimation (value: Animation) {
    this.animation = value;
  }

  loadAnimation() {
    const { element, state } = this;
    const newAnimation = createAnimation(element, state);
    
    /**
     * Add listeners
     */
    newAnimation.addEventListener('finish', this.onFinishAnimation);
    newAnimation.addEventListener('cancel', this.onCancelAnimation);

    return this.animation = newAnimation;
  }

  clearAnimation() {
    if (this.animation === null) return;
    this.animation.removeEventListener('finish', this.onFinishAnimation);
    this.animation.removeEventListener('cancel', this.onCancelAnimation);
    this.animation = null;
  }

  destroyAnimation() {
    const currentAnimation = this.previousAnimation || this.animation;
    if (currentAnimation !== null) {
      currentAnimation.removeEventListener('finish', this.onFinishAnimation);
      currentAnimation.removeEventListener('cancel', this.onCancelAnimation);
      currentAnimation.cancel();
    }
  }

  playAnimation() {
    /**
     * Prevent emit start event if playState is running
     */
    if (this.currentAnimation.playState === 'running') return;
    this.onStartAnimation();
    this.currentAnimation.play();
  }

  setState(element: HTMLElement, newState: IAnimatable) {
    this.element = element;
    this.state = newState;

    this.previousAnimation = this.currentAnimation;
    /**
     * Check if `autoPlay` is enabled to emit the event and play the animation
     */
    if (this.state.autoPlay) this.playAnimation();
  }

  onStartAnimation = () => {
    const { element, state } = this;
    state.onStart.emit(element);
    if (state.fromClassName !== undefined)
      element.className = state.fromClassName;
  }

  onCancelAnimation = () => {
    this.state.onCancel.emit(this.element);
  }

  onFinishAnimation = () => {
    const { element, state } = this;
    state.onFinish.emit(element);
    if (state.toClassName !== undefined)
      element.className = state.toClassName;
  }
}