export default {
  id: 1,
  title: 'Let\'s get it (this site) started!',
  post: `
### Let's get it (this site) started!

This site is really just for me to have a place to play around. Building it as a blog gives me a reason to keep revisiting it and making improvements. It will also serve as a convienent place to keep an online resume. My plan is to post about once a month. With that out of the way let's move on to what I used to build this site.

I wanted to use [React](https://facebook.github.io/react) in large part due to it's current popularity and because it appears to be a well done component framework.
To get started I used Facebook's own [create react app](https://github.com/facebookincubator/create-react-app) tool which I highly recommend to anybody just getting started with react, and possibly to those already familiar with it.
With that I have a simple hello world app, now I just need to figure out what I'm going to build.

I'm not a designer.
I'm not artistic.
I can build just about anything, but for me to pick the colors and layout is a recipe for disaster.
With that said I wanted a nice set of base tools to build with.
I'm familiar with [bootstrap](http://getbootstrap.com/) and it's a great set of basic tools.
Thankfully there's a [bootstrap for react](https://react-bootstrap.github.io/) that gets me what I want.
Add in [react router](https://github.com/reacttraining/react-router) and [react router bootstrap](https://github.com/react-bootstrap/react-router-bootstrap) and we have the tools for a simple but functional site.

The final piece I need to finish the site, at least this beginning basic site, is a way to author blog posts.
The obvious solution is to pick a CMS solution and integrate that.
There are several very good options in that direction and I looked into several that would have worked just fine.
However at the end of the day I wanted to keep it simple.
I don't need much of a feature set.
All I need is a means to write a blog post and display some summary information in a list.
Additionally it'd be nice to write a blog post have have it wait to publish.
Comments would be a nice feature, but I'm going to push that off for future work and not worry about it for now.
*Update: Comments have been added using the free version of Disqus.*
What I decided on is to create my blog posts as individual files written in markdown (template literals in a js file) and keep a json file that holds the metadata for the blog post.
So my workflow for creating a blog post is to add a new entry to the json file and write the blog which really isn't any more work than most publishing tools, it's just a bit more manual and I"m okay with that.
Thanks to the live nature of the \`create-react-app\` I can even preview as I type just by saving the file.

Now there are a ton of things I dont' yet have.
Permalinks don't exist.
The site is not very SEO friendly.
There are no comments as I previously mentioned (stealth edit - have comments now).
There's no RSS feed (or JSON feed as is the new hotness).
Were I building this site for anybody else, or for any organization, I probably wouldn't have made nearly any of the same choices.
For me though, I think this will work just fine, and all those missing pieces are just opportunities to add a little more later.
`};
