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

## 程序员摸鱼指南：副业成就未来

                                                                    Zed A. Shaw
[InfoQ](javascript:void(0);)
**InfoQ**

 微信号
infoqchina

 功能介绍
为一线互联网公司核心技术人员提供优质内容。科技圈的观察者，前沿技术的传播者。

_2020-08-09_ 收录于话题作者 | Zed A. Shaw 译者 | Sambodhi 策划 | Tina  你可知道，大名鼎鼎的 eBay 在当年就是由[副业项目](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651027200&idx=2&sn=818092e4ada245e2373750ec63c65adf&scene=21#wechat_redirect) 发展壮大起来的。今天，摸鱼大神 Zed A. Shaw 给我们娓娓道来他的摸鱼经验，要知道，他在上班期间就摸了好多鱼，不仅开发了网站，还在业余时间写了一套丛书。另外副业也是你对抗贪婪企业的主要手段。

这是一则关于 eBay 的 Java 企业版程序员的故事。

eBay 刚成立的时候，Java 正如日中天。彼时，每个人都在用 Java 编程。如果你是一名真正的程序员，那么你所做的一切都是基于 Java。我之所以知道这一点，是因为我曾被卷入到一个无休止的、可怕的 Java 项目中。直到 2008 年银行倒闭潮，这个糟糕的 Java 项目才随之而去。

2008 年银行的倒闭潮确实对 Java 企业版带来了毁灭性的打击，该事件最终还扼杀掉了 Sun（2009 年被 Oracle 公司收购，Java 是 Sun 在 1995 年 5 月正式发布的产品）。在 2008 年，Sun 大约 40~50% 的资金来自运行 Java 的各个银行。当银行因为抵押贷款欺诈而倒闭时，Sun 的一大笔收入几乎在一夜之间蒸发殆尽。随着较小的银行被并入其余三家较大的银行，对 Sun 的合同义务也随即被取消了。

还有一种形式的 "罪恶关联" ，因为 Java 与僵化的旧系统联系在一起，这些旧系统无法以足够快的速度做出改变，以至于未能在 2008 年的崩溃事件中幸存下来。要问我怎么知道的，那是因为我曾在 Bear Stearns（贝尔斯登公司，成立于 1923 年的美国第五大投资银行与主要证劵交易公司之一）一个僵化的 Java 系统上工作过，亲眼见证了整个崩溃的过程。

要不是因为 Android，Java 这门语言早就在 2008 年悲惨地消亡了。这就是我为什么一直说 "企业版" 的原因，因为这个版本的 Java 比较特殊，从那时起，大多数程序员都很讨厌这个版本。这种怪异的、无限的、迂回的、晦涩的代码，似乎是为了让企业程序员保住饭碗才存在的。我至今还记得那些令人讨厌的 "老胡子" Java 程序员，如果你没有把所有的东西都封包在 AbstractFactoryIndirectFactoryFactory 中，他们就会辱骂你、骚扰你。

这种使用错综复杂、晦涩难解的代码写法，因其充满 AbstractFactory 特征，确实起到了将新人排除在行业之外的壁垒作用，同时也保住了程序员的饭碗。

你不能解雇那些 Java 企业版程序员，因为只有他们才懂那些令人难以置信的晦涩代码，每年一次的 Bug 修复还得靠他们，而且这 Bug 还有一个诡异之处：每次在他们应该得到奖金的时候就会出现。你不得不一年又一年地支付 8000 人的工资，而他们上班所做的事基本就是：坐在那里，看着一堆 Java 虚拟机无所事事，否则有一天（就在要发奖金之前），这些虚拟机就会崩溃，到那时你就找不到人来修复它们了。

这些企业版 Java 程序员存在的问题是，一旦公司倒闭，你就需要找到一份新工作。你可能会认为，2008 年那场崩溃事件会给这些程序员上一课，但他们根本就没有吸取教训。你可能还会以为，他们已经意识到没有一份工作是安全的，他们需要掌握第二门编程语言，并有大量替代项目，以防万一因公司倒闭而失业。

eBay 的程序员就是一个很好的例子。
eBay 大裁员

我曾用过几次 eBay，即使到了 2014 年，它的用户界面仍然是恐龙级老古董。当用户结账时，它会把<iframe>标签注入到自己的服务中，显示比如发票之类的简单内容。这种做法在某些地方用用还是可以的，但在 eBay 上，到处都是这些 <iframe>  "蟑螂" 。Paypal（当时为 eBay 所有）差不多也是这样的情况，到处都是糟糕的用户界面、陈旧的基础设施。

这些糟糕的用户界面万年不变，原因在于它是企业版 Java 程序员及其工作的保护代码。为了保住饭碗，他们创建了在没有他们帮助的情况下很难更改的系统。但这是一把双刃剑，这一策略也使得他们自己难以更改代码，所以当公司要求他们让网站的风格看上去更 "现代化" 一些时，他们会声称："这是不可能的任务。"  你可能会问他们，是否可以只使用诸如 bootstrap 之类的东西，企业版 Java 程序员就会看着他们的老古董 Java 代码，用手工编码的 HTML 代码嵌入到 FactoryFactoryImplInterface 中，然后说："不，那是不可能的。"

然而，这种 "不可能" 被证明是一个谎言。最终，PayPal 独立出来了，用户界面突然开始改善。PayPal 与 eBay 原本共享同一批程序员，但在分拆之后，他们解雇了那些老气横秋的企业版 Java 程序员，并雇佣了一些更好的用户界面设计人员来改进应用。PayPal 之所以要这样做，是因为面临 Stripe 的竞争，后者凭借漂亮的用户界面和文档占据了开发商市场。

在 PayPal 给你展示了这个所谓 "不可能" 的代码其实可以改进之后，这事儿在 eBay 内部引发了一场战争，最终，eBay 解雇了大约 3000 名企业版 Java 程序员。官方虽然没有给出数字，但我从内部得到的信息是，有 3000~8000 名左右的企业版 Java 程序员被炒了鱿鱼，因为 CTO 想找别人来改进公司。

只要你去看看 2008 年以来的许多银行，你会发现总有一些由程序员控制的僵化技术，他们认为保持僵化就可以保住饭碗。这种态度的讽刺之处在于，这种顽冥不化最终会毁了公司，从而让他们丢掉工作，而且也让他们以后很难找到工作。

eBay 程序员就是这种恶果的极好例证。他们中的许多人甚至无法切换到 Android 开发。我知道有很多人转而从事与编程无关的工作，或者干脆退休。他们中的大多数人在 eBay 工作了几十年，没有其他成就，也没有能力学习任何新的编程语言。他们没有潜在的副业可做，没有额外的技能可供展示，也没有办法解释他们是如何花了 20 年时间来维持 AbstractInterfaceImpl <iframe> 虚拟机的运行。
真相

很多人会告诉你：不要在家里用额外的时间来写代码，他们试图把这种观点看作是无产阶级对晚期资本主义机器的某种反抗。我出生在一个非常贫穷的家庭，我可以告诉你，这些人没有一个是真正贫穷的。那些真正贫穷的人想要工作，他们知道有可能会在一瞬间失去一切，所以，他们会尽其所能继续工作。工作并不可耻，也不是失败的标志。

但凡让你少工作的人都不是你的朋友。对于任何想赚更多钱而感到羞耻的人也是如此。通常情况下，这号人一般都有家庭或配偶罩着。如果他们突然失去了工作，他们还有第二学位，而编程技能只不过是通往其他工作的一块小小的踏脚石；或者他们只是在妄想，认为自己会永远拥有轻松的工作。他们的经历和你我完全不同，所以，如果你需要工作，并且你还想继续从事程序员这份职业，那么你绝对应该离那些在一家公司只学习一门编程语言的人远点儿。

事实上， **做副业就是你对抗公司贪婪的主要手段**。要利用一个拥有选择权的人很难，根据我的经验，工作之余从事一些额外项目，给我带来的好处比任何工作都要多得多。我可以有把握地说，我在职业生涯中所学到的一切都是从我的个人项目中学到的，而不是从我从事的工作中学到的。我还可以说，我在编程中最大的乐趣和享受，就是从事我自己的项目。

因此，我将给你列举一些理由，来说明副业对任何经验水平的程序员都是有好处的。
真相 0：副业意味着自由

时至今日，仍然有一大群程序员还天真地认为从事副业是一种压迫。但事实是，副业给了你选择权，而拥有选择权就意味着自由。如果副业是用另一种编程语言完成的，当你用新语言找到更好的职位时，你就可以选择离开。你也可以把这些副业转化为你自己的新业务。

**如果你所做的全部工作就是处理公司的代码，那么你实际上就会陷入他们特定的代码品牌和做事方式中。**除非那家公司是 Facebook、Apple、Amazon、Netflix、Google 等科技巨擘之一，否则，在找新工作时，你的经验在很多方面都会对你不利。

你工作的公司就喜欢这样的，因为他们知道你永远不会跳槽，因为你已经没有新技术的经验，而且新技术学习起来非常困难。你将只需坐在那里看护 JVM，而不是试图找一份依靠 Go 编程语言的新工作，因为学习 Go 非常难。

你不应该把副业看成是不情愿的事儿，这样，一旦公司倒闭后，你还能找到新工作。你应该将它看作是通过培训和学习让你有更多的选择余地，这样你就可以更自由地找到一份新工作。
真相 1：你永远不会得到加薪

公司永远不会给程序员与他们影响力相匹配的工资。你每年可能会得到 2% 的加薪，这还赶不上货币的通胀率。当然你也可能会得到一点点奖金。但与此同时，你的代码却是你的公司赚取数十亿美元乃至数万亿美元的主要原因。你也许会得到一些股票期权，这大概是你得到加薪的唯一途径，永远。

这个行业经常需要新的人才，所以加薪的最简单方法就是换一位工作。换工作可以让你因为做同样的事情而得到增长 20% 到 100% 的报酬。

如果你认为你的老板会把你的最大利益放在心上，那么你就是在妄想。他们只想从你身上得到最大的回报，同时又能给你尽可能少的报酬。你也应该采取相应的行动，保持掌握你的技能，并找到你所能找到的、最好的工作。有一个好方法可以让你的选择留有余地，那就是你有公开可用的副业项目。
真相 2：新语言薪水更多

将工作换到一种新的热门编程语言是提高工资的有效方法。如果你坚持让古老代码正常工作，你就别想能够跳槽到薪水更高的职位。你需要证明你可以用 Go、Rust、Nim、Zig 或其他热门编程语言来编写代码。公司雇佣你就是为了让你能够开发一些东西，通过在副业项目中使用新技术开发东西，而你可以很容易证明这一点。
真相 3：你从未接受过培训

如果一门语言是新的，那么你该如何获得这份工作呢？最近有一则新闻说 IBM 想招聘在 Kubernetes 上具有 12 年工作经验的程序员，要知道 Kubernetes 诞生才 6 年，但要求有一定的工作经验实际上是非常普遍。那你该如何获得新技术方面的经验呢？答案就是：副业项目。

公司知道，如果他们在新技术方面提供培训，员工学成后就会选择离开。当你的代码是该公司市值达到一万亿美元的原因时，你为什么还不离开一家拒绝给你加薪的公司呢？

在工作中，你会因为试图使用任何新技术而被指责为 "特立独行" ，哪怕这项技术在性能上是一个巨大的飞跃，并被 Google 或 Facebook 使用。

所以，获得新技术唯一途径就是自己培训自己，而在编程方面唯一有效的培训就是去构建东西。人们付钱给你不是为了让你知道 Haskell 中的 Monad 是如何工作的，而是为了让你用 Haskell 中的 Monad 来构建东西。所以，如果你从来没有构建过什么东西的话，那他们怎么相信你能真正做出他们需要的东西呢？
真相 4：你永远得不到认可

你永远不会因为你的工作而收到任何实质形式的"致谢"。你只不过是机器上的一个小小齿轮，没有直接证据可以证明你在大多数公司做过什么。如果在 eBay 只用 iframe 完成所有的工作，找新工作时就只得撒谎了。但是在副业项目上使用一门新的编程语言，可以表明你实际上是能胜任的。

除非电影风格的致谢名单成为编程的规范之前，你还得需要副业项目来展示你的技能。
真相 5：你不懂 Java

你可能会感到奇怪，为什么 eBay 的 Java 程序员不能直接去做另一个 Java 工作呢？为什么不直接进入 Android 开发领域呢？那是因为他们实际并不懂 Java，他们懂的只是 eBay Enterprise Java。

程序员都有一种错觉，认为自己在公司里所使用的语言是 "标准" 的，然而事实并非如此。你对这种语言的使用是非常特殊的，并且还是为这家公司量身定做的，它基于错综复杂的历史，这使得它与其他人对这门语言的使用相比，显得很奇怪（因为其他人也都认为自己对这种语言的使用是标准的）。

要打破这种错觉（并使自己保持清醒）的唯一方法，就是在公司代码库之外，用完全不同的编程语言做一个副业项目。这将帮助你在未来找到新工作，因为从外部经验来看，你更符合新的编程趋势。

如果仅在 eBay Java 上编程，就意味着你将只能在 eBay Java 上工作。行业变化是很快的，新工作紧跟潮流，所以当你需要或想要一份新工作的时候，你需要做的是：紧跟趋势。
真相 6：MBA 喜欢齿轮

鉴于编程工作的创造性，许多公司的工作环境对程序员来说是令人难以置信的压抑。当你在一家公司工作时，你将被迫使用他们认为你应该使用的工具，而不是最适合你的工具。如果这家公司采用 Eclipse 和 Java，那么你将使用他们特有的 Eclipse 品牌。要是他们使用 WebStorm，那你也将会使用 WebStorm。如果你使用了任何不同的东西，等待你的就是不断的嘲笑和骚扰。许多编程环境对程序员的效率和技能来说，都是压迫性的虐待和威胁，而他们希望通过这样的方式，让程序员随时可以被替代。

那些 MBA 们喜欢整齐划一的齿轮，让他们可以随时更换，他们并不认为你是一个有创造力的人。你只不过是一台机器，他们将模糊的句子灌输进去，然后期望后端能生产出可靠的软件。任何不够通用的东西，都会被视为对企业的冒犯而被关闭。如果你重视自己心智的健全，你就会花一些空暇时间做一些你喜欢的事情。
真相 7：不管公平与否，只是一场表演而已

很多人认为公司在招聘之前要求查看他们作品是不公平的。他们觉得，有些公司竟然还敢要求他们证明自己会编程，认为这很令人反感：编程可不是表演艺术！

而现实是，编程确实已经成为一种表演艺术。你必须展示你的工作，参与团队协作，提交代码审查。你必须将想法写在白板上，并谈论你想要做的事情。你必须参加会议，将你的东西兜售给其他人。

但是，那些能用副业项目来证明自己确实能写代码的人，他们同时对其他任何形式的行业表演都没有问题。他们管理着一个精心策划的 LinkedIn、Instagram 和 Twitter 账户，这些社交网站支持他们展示在开发方面的杰出工作，每年在 30 个会议上发表演讲，还拍了一些梦幻般的专业照片......

事实上，你的副业项目已经证明你可以胜任这项工作，而且可以独立完成。现在编程是表演性质的，这很令人讨厌，但我们必须接受。
真相 8：你可以随处使用代码

你不一定非要写老板让你编写的代码。你可以去做任何你想做的事，那么为什么不去编写能改善你生活的代码呢？如果你所有的编程经验仅仅是你在公司所做的工作，那么很显然你会讨厌它的。

如果你回家后，做一些你感兴趣或者对你生活有直接影响的事，那么这就是学习编程的力量来源。我能理解为什么有些程序员新手认为编程只是他们的第一份工作中要做的事情，但实际上，它远不止这些。当你掌握了这项技能，你甚至可以让你的生活实现自动化。

我用代码研究新的音乐理论，将枯燥的税收工作自动化，为亲朋好友搭建商业网站，还创建了我的整个网络业务，这些最初只是我的一个副业。副业给我了行动和旅行的自由，让我不再惧怕冒险。它们成为了我抵御糟糕的经济、糟糕的老板、糟糕的公司以及全球大瘟疫的安全网。我有信心，我可以在任何地方工作，我可以证明我可以在任何地方做任何事。

当然了，下班后写代码并不是必须的，但如果你想在你的职业生涯中能有所选择，并且充分利用这项技能，那么我强烈建议你这样做。
真相 9：你拥有生产资料

那些哀叹不得不从事副业的人，没有意识到编程能力就是你的生产资料。现在，你几乎可以不花一分美元就能开展线上业务。很多服务都是免费开始的，甚至不需要招聘一位额外的程序员就可以启动项目。

作为程序员，你自己就拥有终极工具，可以无成本的开创自己的新事业。你可以设置自己的虚拟主机，注册你的公司，创建你的域名，甚至可以使用 btcpayserver 之类的东西来接收你的比特币。你也可以做顾问，在你所在的地区提供编程服务，帮助小微企业等等。
真相 10：时间不够

我能理解那些有孩子、家庭的人可能没有时间，但是，绝大多数抱怨自己没有时间做副业的人显然是有时间的。我想起一个人，他每天发布大约 200 条推文，但就是 "没有时间做副业" 。

我建议，如果你认为自己没有时间，就每半个小时记录一次，连续两周，看看你把时间都花在哪里了。老实说，如果你不去干一些傻事，你就会发现自己实际有大把大把的时间。
结论

我非常喜欢做那些最终能让自己感到快乐的事情。如果不得不在家里从事副业，让你感到悲伤和愤怒，我劝你还是别做了。找点别的事情来打发你的时间吧。但是，如果你想在这个行业拥有长久的职业生涯和最终的自由，那么你就必须接纳这份工作的表演性质，并在业余时间独立工作。老实说，副业项目就是确保你不会因为悲剧性的事件而失业的唯一方法，而且，副业也是编程中真正乐趣所在。
作者介绍：

Zed A. Shaw，由 Addison/Wesley 出版的《 "笨办法" 学......》系列丛书（The Hard Way Series）的作者，包括《 "笨办法" 学 Python》（Learn Python The Hard Way）等等。

参考阅读：

https://learnjsthehardway.com/blog/07-your-side-projects-are-your-future
本周好文推荐

[只加两行代码，为什么要用两天？](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651036678&idx=1&sn=6543af70f095bda97c95b5dd43266ea1&chksm=bdbe64558ac9ed4376abe6a0761928efe914660dfd05719ce6588b34201512e4aa4af6c4209e&token=2090280940&lang=zh_CN&scene=21#wechat_redirect)

[暴雪员工集体"开源"工资单：裁员加活不加价，年年盈利却不涨工资](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651036949&idx=1&sn=d7793132f8c715bd62071f62c124604f&chksm=bdbe65468ac9ec50c2516a6cd695a29de79ce92fdcd623e0604b9511d5a652429b013043b9b0&token=2090280940&lang=zh_CN&scene=21#wechat_redirect)

[Arm 中国的内斗与失控](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651037034&idx=1&sn=2fdf76c258c648b23e2e773df7dafa58&chksm=bdbe65398ac9ec2f962cabc32df7599770f1a2e7d614de78e7ecf800f224dc41026ba26504d2&token=2090280940&lang=zh_CN&scene=21#wechat_redirect)

[被逼出海，滴滴：我太难了](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651037124&idx=1&sn=c40f6c9f42de86f3b67d8a47e10e9c78&chksm=bdbe65978ac9ec81f22e0323a4dfacd3329f26bc2f83718f21b99e680bc3f665605d252058fd&token=2090280940&lang=zh_CN&scene=21#wechat_redirect)

**InfoQ 读者交流群上线啦！各位小伙伴可以扫描下方二维码，添加 InfoQ 小助手，回复关键字"** **进群** **"申请入群。大家可以和 InfoQ 读者一起畅所欲言，和编辑们零距离接触，超值的技术礼包等你领取** **，还有超值活动等你参加，快来加入我们吧！**

<br>

<br>

![图片](%E7%A8%8B%E5%BA%8F%E5%91%98%E6%91%B8%E9%B1%BC%E6%8C%87%E5%8D%97%EF%BC%9A%E5%89%AF%E4%B8%9A%E6%88%90%E5%B0%B1%E6%9C%AA%E6%9D%A5_files/640.webp)

<br>

点个在看少个 bug 
 预览时标签不可点收录于话题 #个

                      上一篇

                      下一篇

阅读

 已同步到看一看[写下你的想法](javascript:;)

前往"发现"-"看一看"浏览"朋友在看"

![](%E7%A8%8B%E5%BA%8F%E5%91%98%E6%91%B8%E9%B1%BC%E6%8C%87%E5%8D%97%EF%BC%9A%E5%89%AF%E4%B8%9A%E6%88%90%E5%B0%B1%E6%9C%AA%E6%9D%A5_files/pic_like_comment531a3f.png)

**看一看入口已关闭** 在"设置"-"通用"-"发现页管理"打开"看一看"入口[我知道了](javascript:;)

已发送

#### 发送到看一看

 程序员摸鱼指南：副业成就未来
最多200字，当前共字

发送中
 喜欢此内容的人还喜欢[安利一个单篇赚1000+的副业 安利一个单篇赚1000+的副业... 约稿投稿平台 不看的原因

* 内容质量低
* 不看此公众号](javascript:void(0);) [牛年普通人副业年赚10万的方法 牛年普通人副业年赚10万的方法... 郭耀天 不看的原因

* 内容质量低
* 不看此公众号](javascript:void(0);) [副业带给我的三个收获 副业带给我的三个收获... 曹将 不看的原因

* 内容质量低
* 不看此公众号](javascript:void(0);)![](%E7%A8%8B%E5%BA%8F%E5%91%98%E6%91%B8%E9%B1%BC%E6%8C%87%E5%8D%97%EF%BC%9A%E5%89%AF%E4%B8%9A%E6%88%90%E5%B0%B1%E6%9C%AA%E6%9D%A5_files/qrcode.bmp)

微信扫一扫<br>
关注该公众号

 微信扫一扫<br>
 使用小程序
[取消](javascript:void(0);) [允许](javascript:void(0);)
[取消](javascript:void(0);) [允许](javascript:void(0);)

[知道了](javascript:;)

**长按识别前往小程序**
