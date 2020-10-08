---
layout:     post   				    # 使用的布局（不需要改）
title:      	Your Side Projects are Your Future 		# 标题
subtitle:      #副标题
date:       2020-10-08 				# 时间
author:     Joel 						# 作者
header-img: img/post-bg-2015.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	Career							#标签
---

# [Your Side Projects are Your Future](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#your-side-projects-are-your-future)

> _Note_: This is a blog about my thoughts and experiences
designing a complete JavaScript website from scratch including payments.
  The code is rough and being developed in the open for educational
purposes. Grab the [RSS](https://learnjsthehardway.com/feed.rss) or follow [@lzsthw](https://twitter.com/lzsthw) on Twitter if you want to follow along.

Let me tell you a story about the Enterprise Java Programmers from eBay.  When eBay was founded Java was _hot_.  Everyone was using Java.  If you were a _serious real programmer_,
 you did everything in Java.  I know because I got sucked into endless
terrible Java projects up until 2008 when the banks collapsed and
swirled around the economic toilet, taking the turd Enterprise Java with
 them.  People laugh, but the banks dying in 2008 is really what wiped
out Enterprise Java as we know it and killed off [Sun](https://en.wikipedia.org/wiki/Sun_acquisition_by_Oracle).

Apparently, in 2008 about 40-50% of Sun's money came from banks running Java.  When the banks collapsed because of the [mortgage backed securities fraud](https://en.wikipedia.org/wiki/Subprime_mortgage_crisis)
a huge chunk of Sun's money evaporated practically overnight.  As
smaller banks were absorbed into the three remaining larger banks the
contractual obligations to Sun were canceled.  There was also a form of
"guilt by association" because Java was associated with inflexible old
systems that couldn't be changed fast enough to survive the 2008 crash.
 I know this because I literally worked on one of these inflexible Java
systems at Bear Stearns and watched this all unfold in real time in
2008.

I say Enterprise Java because Java continued on life support when
Google/Android used it in their phones.  If it weren't for Android
Java--the language--would have died the miserable death it deserved in
2008.  That's why I keep saying "Enterprise", because that version of
Java was a special brand of obnoxious hell most programmers from then
hate.  It was this bizarre infinitely indirect convoluted code that
seemed to only exist to keep Enterprise Programmers in their jobs.  I
remember to this day obnoxious "old beard" Java programmers who would
brow beat you and harass you if you didn't wrap everything in an `AbstractFactoryIndirectFactoryFactory`.

This use of convoluted code full of `AbstractFactory` [shibboleths](https://en.wikipedia.org/wiki/Shibboleth)
did actually do its job of excluding new entrants to the industry and
also keeping programmers employed.  You couldn't fire those Enterprise
Java programmers because they were the only ones who knew that
incredibly convoluted code to fix that bug once a year that weirdly
showed up right about the time they were supposed to get bonuses.  You
had to pay 8000 people a year to basically sit and watch a bunch of Java
 virtual machines do nothing or else one day (right before bonuses)
these VMs would implode and you'd have nobody around to fix them.

The problem with the Enterprise Java Programmer (EJP) and their job
protectionism is companies die, and when they do you need to find a new
job.  You would think the collapse of 2008 would teach these programmers
 this lesson, but they did not learn it at all.  You'd think they'd
realize no job is safe anymore, and that they need to always have a
second language in their back pocket and a plethora of alternative
projects just in case they need to jump off the burning ship.

Nope, and the programmers at eBay are an excellent example.

## [eBay Wised Up](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#e-bay-wised-up)

I used eBay a few times, and even in 2014 it still had old creaky
garbage user interfaces.  When you did a checkout it would inject `<iframe>`
tags back to its own services to show you simple things like...an
invoice.  That might be fine here and there, but eBay was riddled with
these iframe cockroaches.  Paypal (which was owned by eBay at the time)
was nearly the same way, with terrible UIs all over and creaky
infrastructure.

I'm pretty sure the cause of this perpetual terrible UI was the EJPs
and their job protective code.  In order to maintain their jobs they
created a system that was difficult to change without their help.  That _also_ makes the code difficult for _them_
to change, so most likely when they're asked to "please make the UI
modern", they claim its "impossible".  You'd ask if they can puhhleaze
just use something like bootstrap, and the EJP will go look at their
creaky old Java code with its hand coded HTML embedded in a `FactoryFactoryImplInterface` and say, "No that'd be impossible."

This impossibility was demonstrated as a lie.  Eventually Paypal was spun off on its own and _suddenly_
their UI started to improve.  Paypal shared the same programmers as
eBay, but after the spinoff they were able to fire those crotchety old
EJPs and hire some better UI designers to improve the application.
Paypal had to do this because of competition from Stripe which was
owning them in the developer market with nice UIs and documentation.

After Paypal showed you _could_ improve this supposedly
"impossible" code I believe it started a war within eBay that eventually
 culminated in eBay firing about 3000 Enterprise Java Programmers.
There's no official number, but the information I have from sources
inside puts it at around 3000-8000 fired and the CTO trying to hire _anyone else_ to improve the company.

Eventually companies like eBay either die, or get smart and realize
that firing inflexible "impossible" programmers is the only way forward.
  When you look at many of the banks from 2008, you can always find some
 piece of inflexible technology controlled by a programmer who thinks
keeping it inflexible will save their job.  The irony of this attitude
is that being inflexible eventually kills the company, costing them
their job, but _also_ makes it difficult for them to find work after.

The eBay programmers are excellent demonstrations of this effect.
Many of them couldn't even switch over to Android development.  I know
many that switched over to non-programming jobs or just retired
entirely.  Most of them didn't have anything else to show for their
decades at eBay and had no ability to learn any new languages.  They had
 no potential side businesses to start, no additional demonstrations of
skill, and no way to explain how they spent 20 years keeping  invoicing `AbstractInterfaceImpl` `<iframe>` Virtual Machine running.

## [The Truths](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#the-truths)

A lot of the people who tell you not to code at home try to cast this
 viewpoint as some sort of proletariat revolt against the machinery of
late capitalism.  I grew up extremely poor and I can tell you that none
of these people have ever been truly poor.  People who are actually poor
 want to work, and know that you can lose everything in an instant so
they do everything they can to keep working.  Work is not shameful or a
sign that you're a loser.  Many people want to work and people saying
they don't doesn't make them edgy or socialist.  It makes them
privileged.

Anyone telling you to work _less_ is _not_ your friend.
   The same goes for anyone shaming you for wanting to make more money.
 Usually these people are privileged with a family or spouse who can
take care of them. If they suddenly lose their job, they have an
alternative degree and programming is just a minor stepping stone to
something else, or they're just delusional and think they'll have their
cushy job forever.  Their experience is completely different from mine
and yours, so if you need to work, and you want to keep working in
programming, then you definitely should ignore someone who has the
luxury of learning one programming language to work at one company.

The truth is having side projects is _the main_ way you build
leverage against corporate greed.  It's harder to exploit someone who
has options, and in my experience working on additional projects after
work has given me far more benefit than any job has.  I can safely say
that _everything_ I learned over my career has been from the
personal work I do, not from any job I've had.  I can also say that the
most fun and enjoyment I've had in programming has been working on my
own projects.

Therefore, I'm going to give you my list of true reasons that side projects benefit you as a programmer of any experience level.

## [Truth 0: Side Projects Mean Freedom](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-0-side-projects-mean-freedom)

To this day there's hordes of programmers who think it's a form of
oppression to have to work on side projects, when the truth is side
projects give you choice, and choice is freedom.  With additional code
done outside of work in another language you can choose to leave when
you find a better position in the new language.  You can also
potentially turn these side projects into new businesses you own.

If all you do is work on your company's code you effectively become
stuck in their particular brand of code and their way of doing things.
Unless that company is one of the FAANGs your experience is in many ways
 going to work against you when trying to find new work.  That's because
 (as I'll explain later), your version of a language is almost always
totally weird and incompatible with all the other totally weird uses of
that language.

The company you work for likes this situation because they know
you'll never leave since you have lost your experience with new
technology, and learning it is difficult.  You'll just sit there
babysitting the JVM that keeps the cornflower blue buttons running and
not try to find a job doing Go because that's harder.

You shouldn't think of your side projects as some kind of calling
card that you reluctantly do so you can get a job after your big mega
corp dies.  You should think of it as keeping your options open through
training and study so that you are free to get a new job when you see
one or need one.

### [Truth 1: You Never Get a Raise](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-1-you-never-get-a-raise)

Why would you need to go get a new job if you're making decent money at a nice and easy job?  Because _companies never give programmers wages that match their impact_.
  You might get a 2% raise a year, which is less than the inflation of
your currency.  You might get a tiny bonus.  Meanwhile, your code will
be the main reason your company makes billions and trillions of dollars.
  You _might_ be able to get some stock options, and that's about the only way you'll get a raise.  Ever.

However, the industry frequently needs people at new companies, so
one of the easiest ways to get a raise is to just get a new job.
Changing jobs can get you a 20% to a _whopping 100% or more_ pay raise for doing the same thing.

Companies will do anything to keep you from changing jobs.  Just read about the [Apple/Google/Intel wage theft scandal](https://en.wikipedia.org/wiki/High-Tech_Employee_Antitrust_Litigation)
to see how far they'll go to keep you from following the money.  If you
 think your boss has your best interests in mind then you're delusional.
  They want to get the most they can from you while paying you the least
 money possible, and you should act accordingly by keeping your skills
portable and finding the best jobs you can.

One great way to keep your options open is to have publicly available side projects.

## [Truth 2: New Languages Pay More](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-2-new-languages-pay-more)

Changing jobs to a new hot programming language is one sure fire way
to boost your pay, but, you can't jump jobs to a higher paying position
if you're still the troll who keeps a single ancient code working.  You
need to demonstrate you can code in Go, Rust, Nim, Zig, or whatever else
 is hot.  Companies hire you to be able to build something, and you can
most easily demonstrate that by...building things using new technologies
 in side projects.

## [Truth 3: You Never Get Training](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-3-you-never-get-training)

Hold on a minute! If a language is new, then how do you have the job experience to get that job?  IBM recently demanded [12 years experience in Kubernetes](https://www.theregister.com/2020/07/13/ibm_kubernetes_experience_job_ad/)
when Kubernetes has only been around for 6 years.  This is actually
very common, with companies demanding experience in new technologies
even though nobody actually has experience in those technologies.

How do you get experience in fresh new technologies?  Side projects.

Companies know that if they train you in new technologies then you'll
 leave.  Why wouldn't you leave a company that refuses to give you a pay
 raise when your code is the reason the company is worth a trillion
dollars?  If you get training it will most likely be trips to
conferences where you'll learn nothing.  At work, you'll be chastised as
 a "snowflake" for trying to use any new technology as it's "risky",
even if that technology is a massive jump in capability and used by
Google or Facebook.

The only way you can get training in new technologies is to train
yourself, and the only training that actually works in programming is
building things.  People don't pay you to know how a Monad works in
Haskell.  They pay you to build things with Monads in Haskell, so if
you've never built something then they don't trust you can actually do
what they need.

## [Truth 4: You Never Get Recognition](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-4-you-never-get-recognition)

You will never get your name in any kind of credits for your work.
The gaming industry is the one place I see credit for people's work, and
 outside of that you are a faceless cog in a machine.  You actually have
 no proof you did anything at most companies, which is why new jobs want
 to see side projects.  It's too easy to lie and say you did all this
work at eBay when you actually just kept an `iframe` working, but a side project in a new language shows that you can actually do the work.

Until movie style credits are a norm in programming, you need side projects to show your skills.  Probably even after that.

## [Truth 5: You Don't Know Java](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-5-you-don-t-know-java)

You might be wondering why the eBay Java programmers couldn't just go
 do another Java job.  Why not just quickly slip into Android
development?  Oh silly goose, that's because they don't know Java, they
know `eBay Enterprise Java`.

Every programmer working at a company in any programming language is operating under the delusion that _their_
use of that language is "standard" when the truth is it's not.  Your
usage of that language is very specific and tailored to that company and
 based on a history of convolution that makes it weird compared to
everyone else's use of the language (who all also think their use of the
 language is standard).

The only way to break this delusion (and to keep yourself sane) is to
 work on a side project that is outside of your company's code base, and
 in a totally different programming language.  This will help you land
future jobs because you'll be more in line with the new trends in
programming usage from your outside experience.

Programming only in `eBay Java` means you can only work on `eBay Java`.
  The industry changes fast, and the new jobs follow trends, so you
should keep up on the trends in the event you need or want a new job.

## [Truth 6: MBAs Love Cogs](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-6-mb-as-love-cogs)

The work environment at many companies is incredibly oppressive for
programmers given the creative nature of the discipline.  When you go
work at a company you will be forced to use whatever tools _they_ think you should use, not what works best for you.  If they are an Eclipse+Java shop, then you _will_ use _their_ specific brand of Eclipse.  If they use WebStorm you _will_ use WebStorm. You _will_
be ridiculed and harassed constantly for using anything different.
Many programming environments are oppressive abusive threats to your
efficiency and skills, and they want it that way so you can be replaced.

The reason is MBAs love nicely uniform slotted cogs they can replace
at any notice.  You are not a creative human making intelligent educated
 creative decisions.  You are a piece of machinery they feed vague
sentences into and expect solid software out the back end. Anything that
 threatens your generic nature is seen as an affront to the business and
 is shut down, _and_ it's shut down by other programmers who have
 internalized this abusive attitude.  This is quadruple true if you are
in any shop that uses Pair Programming.

If you value your sanity you'll spend some of your free time using
and doing things you enjoy with computers, and that means working on
side projects you enjoy with the text editor you enjoy.

## [Truth 7: It _Is_ a Performance, Fair or Not](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-7-it-is-a-performance-fair-or-not)

One complaint people have about side projects is they think it's
unfair that companies ask to see their published work before hiring.
They find it offensive that some corporation would dare to ask them to _prove_ they can code.   Programming isn't a performance art!

The reality is that programming is now a performance art.  You have
to show your work when you are at a job. You have to work on a team. You
 have to submit to code reviews. You have to whiteboard ideas and speak
intelligently about what you are trying to do. You have to write about
it. You have to attend conferences to sell your things to programmers.
Let's not forget that there's an entire contingent of programmers who
fervently claim that code is political and there's nothing anyone can do
 about it.

If code is political, then it is also performative.  Sorry, but you
can't have it both ways.  You don't have politics without performance,
and the people who lament the performance aspects of the profession have
 only their self to blame for turning code political.

But, what we see from the people who lament having to prove they can
code with side projects is they seem to have no problem with _every other form of industry performance_.
  They manage a perfectly curated LinkedIn, Instagram, and Twitter that
espouses their awesome job in developer relations speaking at 30
conferences a year with fantastic high gloss professional head
shots....but yeah, showing me 2 small JavaScript projects is demanding
performance from them.

The truth is your side projects demonstrate that you can do the job, _and_
that you can do it on your own.  It sucks that programming is
performative now, but if code is political now then, oh well, I guess we
 all have to suck it up and put on a show.

## [Truth 8: You Can Use Code Everywhere](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-8-you-can-use-code-everywhere)

You don't have to code what your boss makes you code.  You can make _anything_
you want, so why not make code that improves your life?  If your entire
 experience of programming is just what you do at your company then
obviously you're going to hate it.

If you're going home and working on things that interest you or have direct impact on your life, then _that's_
where the power of learning to code comes from.  I can see why some new
 programmers think programming is only what they do in their first job,
but it's so much more.  You have this skill that allows you to automate
almost any part of your life, so why would you complain about...having
that skill?

I've used code to figure out new theories of music, automate boring
tax collection, create life changing business websites for friends and
relatives, and to create my _entire online business which started as a side project_.
  Side projects literally gave me freedom to move, travel, and not be
afraid to take chances.  They were and are my safety net against bad
economies, bad bosses, bad companies, and global pandemics.  I have
confidence that I can work anywhere on anything and that I can _prove_ I can work on anything anywhere.

You don't _have_ to code after you get off work, but if you
want to have options in your career and utilize this skill you have to
its full potential, then I highly recommend you do.

## [Truth 9: You Own The Means of Production](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-9-you-own-the-means-of-production)

I find it bizarre that the people who are lamenting having to work on
 side projects also seem to be incredibly Marxist and then don't realize
 that being able to code is the ultimate ownership of the means of
production.  You can start an online business for almost zero dollars
these days.  So many services are free to start, and simply skim off the
 top that you don't even need to be a programmer to start one.  Hardest
thing about starting a business is paying for all the government
licenses and requirements.

As a programmer you have the _ultimate_ tool for starting your
 own business with almost zero capital and totally owning it.  You can
setup your own hosting, register your company, create your domain, even
accept your own Bitcoin with something like [btcpayserver](https://btcpayserver.org/)
and honestly never really have to talk to anyone.  You can also work as
 a consultant, offer programming services in your local area, help out
small businesses, and so many other things.

For many people a side project is the difference between being
homeless after they're ticket to independence, so shaming people who are
 working on a potential side business is stupid.  Many people who work
on something else are doing it to improve their lives by...owning the
means of production.

Sucks for the complainer if they're so risk averse they never think to do that too.

## [Truth 10: The Lack of Time](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#truth-10-the-lack-of-time)

I understand people who have children, families, or similar social
commitments might not have the time, but the vast majority of people who
 complain they have no time for side projects clearly do have the time.
 I'm thinking of one person who probably posts about 200 Twitter posts a
 day but has "no time to work on side projects" (that they posted in
their 200th tweet that day).

I suggest that if you think you don't have time for anything else
then prove it.  Track every half hour of your day for 2 weeks and see
where you spend your time.  Be honest, and I bet you'll find out you've
got loads of time if you just cut out something stupid.  I'm positive
people have lots of free time they don't want to admit they have, but
analyzing your time will help you find it and be honest with what you
have to work on your own things.

But, remember Truth 9?  I bet if you tracked where you spend time,
you might find a programming project that can automate something out of
the way to free up some of your time so you can do more programming.

Welcome to [Yak Shaving](https://en.wiktionary.org/wiki/yak_shaving) my favorite kind of programming side project.

# [Conclusion](https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future#conclusion)

I'm a huge fan of people doing what ultimately makes them happy.  If
it makes you sad and angry to have to work on side projects at home then
 don't.  Find something else to fill your time.  But, if you want to
have a long career and the ultimate freedom in this profession then you
have to accept the performative nature of the job and work on your own
in your spare time.  Side projects are honestly the only way to make
sure that you aren't blind sided by a tragic turn of events that makes
you unemployable, and side projects are also where the real fun in
programming resides.
You must login to post a question.
[Login to Your Account](https://learnjsthehardway.com/auth) No comments yet. This website and all content is Copyright © Zed A. Shaw since 2016 and beyond. Read our [radical privacy policy](https://learnjsthehardway.com/privacy) to find out how we built this website to
        make sharing your personal data almost impossible.
