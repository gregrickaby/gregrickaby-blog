---
title: 'Home networking upgrade'
date: '2019-08-26'
excerpt: ''
category:
  - 'personal'
tags:
  - ''
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

## The Setup

We subscribe the Ultimate Internet Package (300/20 Mbps) from [Spectrum](https://www.spectrum.com/internet). The Ultimate Package costs extra, but offers 3x the bandwidth vs the base package. Since I work from home, via the Internet, it's easy to justify the extra expense.

To maximize that bandwidth, we connect with a [Motorola Surfboard](https://amzn.to/31JJKri) cable modem, a [Linksys WRT 1900AC](https://amzn.to/33A7q3b) router, an [8-port Netgear ProSafe](https://amzn.to/2KORBNl) gigabit switch, and [Monoprice CAT6](https://amzn.to/2YWYI0b) ethernet cable plugged into all the devices here in the Office.

When devices are plugged directly into the network, we often get download speeds ~400 Mbps and connecting to the 5 GHz wireless network, it's easy to reach speeds ~300 Mbps.

> TL;DR: The west side of our house has a fast and reliable Internet connection, which is required for my job. Thanks to the high-end equipment and wiring, we also get an extra ~100Mbps worth of bandwidth with speeds reaching ~400 Mbps. This makes me happy!

## The Problem

The east side of the house is 3 solid walls and 3 doors away from the west side of the house, which means: _the available bandwidth is severely reduced._ It is rare to get download speeds higher than ~60 Mbps.

![](images/2019-08-01-17.56.42.jpg)

In order to get Internet on that side of the house (and upstairs), we rely on a pair of [Netgear AC 1200](https://amzn.to/2YRuvPX) range extenders to rebroadcast the wireless signal from the Office. While range extenders are great at quickly extending a wireless signal, they come with some trade-offs.

First, the available bandwidth is [automatically cut in half](https://www.pcmag.com/news/363527/whats-the-difference-between-a-wi-fi-extender-and-mesh-syst). Second, if your wireless backhaul has a long run (like through 3 walls and doors), the bandwidth can be reduced even further. That's in part to questionable signal strength and plenty of multi-path distortion. Finally, the amount of devices on the range extender network also impacts performance.

Being a tech friendly family, we have _a lot_ of wireless devices throughout our home. Everything from phones to tablets, laptops, Echo's, Xbox's, and TVs. As a frugal dad in a tech-heavy home, I find the loss of bandwidth frustrating. This problem definitely goes into the _"first world problem"_ category, but paying extra for something we only used 1/3 of the time was really nagging me!

## Brainstorming

This spring I replaced all the CAT5 in the Office with CAT6, and upgraded to a gigabit switch. This was probably Phase I, and got us thinking: "how can we maximize the bandwidth throughout the _whole_ house?"

![](images/2019-08-16-10.57.29-1024x768.jpg)

500 feet of CAT6... worth every penny.

On one hand, we could move my cable modem/router to the Living Room. With that plan though, we're simply shifting the problem from the Living Room to the Office. Tara and I weren't thrilled with the idea of having all that equipment on the TV stand in the Living Room. It's kinda ugly.

The "light bulb" moment came when we noticed that both of my Netgear range extenders have ethernet ports. After a quick search, we learned that both can be switched over into "[Access Point Mode](https://www.speedguide.net/faq/wireless-repeater-extender-vs-access-point-385)".

Access points are different from range extenders, because they don't depend on a wireless backhaul, it's wired. In theory, _access points should be able to deliver the maximize available bandwidth to all our wireless devices_.

It was time to hatch a plan.

## The Plan

Since most family life (and devices) were in proximity to the Living Room, we decided that room would be the central hub for the east side of the house. We also thought it would be smart to run CAT6 to both the Dining Room and Master Bedroom, so they could both support connections in the future.

To connect the TV, Xbox, and access point backhaul to the Office, we would need another gigabit switch. Since Phase I of this project involved 500 feet of CAT6, we had plenty of cable still on the spool.

We also wanted to make sure the CAT6 and RG6 (for cable modem) backhauls were protected from the ridiculous Alabama weather, by wrapping it in some rigid conduit.

![](images/2019-08-16-10.55.39-768x1024.jpg)

The CAT6 wiring diagram.

## A little help from your friends

Running cable in a crawl space wasn't a big deal, and I could handle that myself. Drilling through 3-inch red brick plus a 6-inch cinder block and running it through a bunch of rigid conduit? Not so much! I lacked both the tools and the knowledge necessary to pull that off, without messing up the outside of our house.

I called my buddy Clint, who is the Director of Facilities at church. Clint and I go way back (last fall we even went to a Green Bay Packers game), so I knew he wouldn't mind rubber ducking the plan with me. I explained what I was trying to accomplish, I also sent him photos of the plan and outside of my house.

Because there's not a crawlspace under the west side of the house, we'd need to run cable outside. Expressing concern about having cables hanging off the side of my house, Clint agreed that they wouldn't last long out there house exposed to the elements, and some rigid conduit with a few "sweeping elbows and pull 90's" would protect the backhaul indefinitely.

By the end of the call, he agreed to come help...which was a huge relief!

![](images/2019-07-27-11.27.38-1024x768.jpg)

BEFORE: The RG6 being run to the cable modem tucked into the siding.

A few weeks later, my friend Jonny was at the house picking up some audio equipment, grass seed spreader, and a big 'ol yellow watermelon...and I told him Clint (we're all friends) was coming by after church on Sunday to help me upgrade my network. I asked Jonny if he wanted to join us, and he agreed. Awesome!

## The big day

After church, I got right to work by heading into the crawlspace with a flashlight, spider stick, a spool of CAT6. I was able to get the cable run in under an hour. The worse part was the cobwebs, otherwise it was relatively easy. Once Clint and Jonny arrived we drilled holes in the floorboards so I could feed the CAT6 through.

![](images/2019-08-04-19.04.01-768x1024.jpg)

Under the house, the CAT6 being run from the Living Room.

Next, we had to drill through 9 inches of brick. There was already a hole there from when Spectrum ran the dedicated RG6 to the cable modem, so we fed the RG6 back through and got to drilling. The only issue? The drill bit was a little shorter than 9 inches, so I had to bust through with a hammer.

![](images/2019-08-04-19.02.36-1024x768.jpg)

The CAT6 and RG6 backhaul through the cinder block.

Now it was time to pull the cable through, and start mounting the rigid conduit. Did I mention it was 94F out? ??

- [![](images/2019-08-04-19.07.43-768x1024.jpg)](https://gregrickaby.com/?attachment_id=22094)
- [![](images/2019-08-04-19.08.44-768x1024.jpg)](https://gregrickaby.com/?attachment_id=22095)
- [![](images/2019-08-04-17.29.55-768x1024.jpg)](https://gregrickaby.com/?attachment_id=22091)
- [![](images/2019-08-04-19.35.45-768x1024.jpg)](https://gregrickaby.com/?attachment_id=22096)

Finally, it was time to terminate the cable and seal up the conduits.

- [![](images/2019-08-04-19.36.19-768x1024.jpg)](https://gregrickaby.com/?attachment_id=22097)
- [![](images/2019-08-04-19.36.25-1024x768.jpg)](https://gregrickaby.com/?attachment_id=22098)

Once that was done, both Clint and Jonny headed home and I headed inside to hook up the switch, put the connectors on the CAT6, and configure the access point.

![](images/2019-08-04-20.35.50-768x1024.jpg)

The home stretch... and my favorite part. Making patch cables!

## The result

Check out the screenshot below:

![](images/img_6327.jpg)

‘Nuff said ?

Phase II was now complete. The Living Room has a speedy gigabit network, and is the central hub to the east side of the house. Having both the CAT6 and RG6 run through rigid conduit should help them stand the test of time, without decreasing the resale value of the house.

> By connecting the Xbox and TV to the wired network, we took two heavy hitters off the wireless network, freeing up space for our handheld devices. We also eliminated the long wireless backhaul, turning a wireless repeater into a wireless access point.

My favorite part though? The ping on Xbox Live also fell by 40%, from ~110 ms to a steady 65 ms! For online gaming, that kind of drop really helps.

Thanks to Clint, Jonny, and Tara for all their help. Mission accomplished.

## So What's next?

There will be a Phase III of this project, and it'll involve pulling another CAT6 cable upstairs to the other range extender. We also want to replace all the wireless equipment with hardware that supports newest WiFi spec: [AX](https://en.wikipedia.org/wiki/IEEE_802.11ax) (also called [_WiFi 6_](https://www.netgear.com/landings/wifi6/)).

And finally, we're part of Covington Electric Cooperative, and they're [floating the idea of running 1 Gbps fiber](https://covingtonbroadband.twncomm.com/front_end) to our area. If they do, our house will be ready!