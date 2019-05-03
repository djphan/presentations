# Performance  with Intersection Observer API

# TLDR Notes of the Presentation
### Introduction (What is the problem I'm trying to solve?)

* Have an expensive resource on the page that is currently loading on page load (e.g. video file, high quality image, or slow JS code)
    * Want to improve user experience on the page (delay loading the resource).
        * Consider only requesting the expensive resource if the user is engaged in the page.
    * Want to improve performance of the website. Time to first byte? time to first meaningful paint? time to first interactive?

### The Intersection Observer API and Lazy Loading Solutions

Demos:
1. Intersection Observer in a black box (a visual demo)

* Built in VanillaJS API that is bound to a target ancestor to your observed element in the DOM. The API fires when you are "viewing" the target element, executing the callback function assigned to the IntersectionObserver object. You pass the target element to the observer.
    * Basic configurable fields to assist you:
        * root - default is the viewport 
            * if overflow is occuring on the root, then it's the length of the content
            * if set then it's the bounding rectangle of the ancestor element to the target element
        * margin around the target element (same as the CSS property margin). Allows you to fire before the element is "technically" viewable if you have timing issues.
        * threshold (array of numbers from 0 to 1 as a floating point values) at what approximate threshold(s) should we fire the callback
            * 0 = first pixel of our target element is viewable
            * 0.5 ~= half the pixels of our target element is viewable
            * 1 = all pixels are within the viewable screen
* The calculations are a rectangle around the target element. 
* It is not pixel perfect, but it is an approximiation of N threshold to determine if you are intersecting the object.


### Other Current (as of 01-05-2019) Solutions
* IE 11 Native Property exists (le gasp!)
    * 0 - default priority loading
    * 1 - load resource after higher priority loading
    * Priority is inheritly built into browser on which order the resources are loaded
* Some lazy loading JS libraries avaliable to use today:
    * [jquery.lazy](https://github.com/eisbehr-/jquery.lazy)
    * [lazysizes](https://github.com/aFarkas/lazysizes)
    * [lazyload](https://github.com/verlok/lazyload)


### What's Coming Up?

* Chrome 75 tentatively is expected to support the "loading" attribute. The primary attributes will be:
    * lazy - the resource will be requested when viewable
    * eager - the resource will be loaded immediately
    * auto - the browser will determine if a resource should be lazy loaded or not (default value if unspecified)
 * Safari 12 Webkit will support intersection Observer   


### Other applications of the Intersection Observer outside of performance?
* Fancy CSS and Animations!
    * Intersection observer is tied to the DOM element we target. It allows us to fire a callback when the element is within our defined viewability and therefore we can manipulate elements on the page for smoother animations!

# References
1. [Intersection Observer API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
2. [Network prioritization in IE11](https://msdn.microsoft.com/en-ca/vstudio/dn265036(v=vs.90))
3. [A native lazy load for the Web platform](https://calibreapp.com/blog/native-lazy-load/)
4. [Lazyload images and iframes Github Issue](https://github.com/whatwg/html/pull/3752)
5. [IntersectionObserver in WebKit](https://webkit.org/blog/8582/intersectionobserver-in-webkit/)

# Additional Readings
* [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
    * Great all in one summary introduction article into lazy loading and performance. Also provides great example snippets on how to use the Intersection Observer API
* [Resource Prioritization – Getting the Browser to Help You](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
    * Great resource into preload, prefetch, preconnect when you're optimizing resource loading in the browser
* [The ultimate guide to proper use of animation in UX](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)
    * Great introduction resource in understanding what are good timing values to plan animations in UX design

# Libraries Used
* [highlight.js](https://highlightjs.org/)
* [Dracula Theme for highlight.js](https://draculatheme.com/highlightjs/)
