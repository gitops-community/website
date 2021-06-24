---
sidebarDepth: 2
---

# GitOps Conversation Kit (beta)

Congratulations! You have early access to the GitOps Conversation Kit (beta)! 

If you joined us for GitOps Days 2021 here's the [video link](/#gitops-days-2021-youtube-playlist) - and here are the video links for GitOps Days 2020: [GitOps Days EMEA 2020](/#gitops-days-emea-2020-youtube-playlist) and [GitOps Days Americas 2020](#gitops-days-2020-youtube-playlist)

We hope that this kit will provide you with the quotes, use cases, user stories, training materials, and more so that you can move the needle with GitOps in your organization - with leadership, stakeholders, and dev and platform teams. 

[Weaveworks](https://www.weave.works/) is donating this kit to the GitOps community to improve together moving forward. Please contribute, send requests, and share your feedback for future versions.


<!-- ## TL;DR -->

<!--You’re probably looking for the [GitOps Days 2020 YouTube Playlist of talks](https://www.youtube.com/playlist?list=PL9lTuCFNLaD2NiNrdt7SaQjpYx_m37czS)!  -->

<!--Don’t miss the topic-based guide below to the videos and, in the future, more resources such as blog posts, tutorials, etc. -->

## Need Help or want updates?

_Want updates about this kit?_

* [Get updates through the very non-spammy GitOps Community list](https://mailchi.mp/7e9e02588c50/gitops-community)

_Confused about anything or have feedback?_

* Contribute here: [https://github.com/gitops-community/website](https://github.com/gitops-community/website)

* Email us: [gitops@weave.works](mailto:gitops@weave.works)


_Want to chat with the commmunity?_

* Join the #gitopsdays channel in Slack: [https://slack.weave.works/](https://slack.weave.works/)

* Ping us also on the #gitops channel in Kubernetes Slack: [https://kubernetes.slack.com/archives/Gitops](https://kubernetes.slack.com/archives/gitops)


## What is GitOps?

GitOps is an app dev and operations methodology that leverages: 

1. an entire system that is described declaratively
2. code that is version controlled and
3. software agents that reconcile and ensure correctness (along with alerts, etc). 

GitOps is a paradigm, not a specific tool or technology. GitOps applies to everything and brings business, dev, and operational value. (see 1:53) (From [“If you remember one thing about GitOps today, it’s …” & Thanks! – Cornelia Davis](https://youtu.be/F4OnL1PWJXg)) 

Cornelia adds that **GitOps = Continuous Delivery + Continuous Operation**

In some cases, there might be some requirements for CI, but **_not_** a replacement for CI. (see 14:00) 
(From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) 

What do you GitOps? GitOps all the things! Don’t miss the stories and use cases in this kit from GitOps practitioners who are using GitOps for development, operations, and so much more!

Cornelia Davis (see 1:50) gives a great overview of the evolution of GitOps from being mostly a delivery process to going beyond that into all areas of application development and operations. (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) 

Maya Kaczorowski adds that when you have everything “as code” with GitOps, you can make your code as automated and error-free as possible. With GitOps, you push a change to code that’s reviewed, and then you use automation to do the hard stuff of deploying, monitoring, etc. You also have a pipeline where devs only need to focus on developing their apps, and any operations or security control can be automatically verified or enforced as part of that pipeline. Teams have a clear separation of responsibilities. (From [Security and GitOps – Maya Kaczorowski (GitHub))](https://youtu.be/mneDm2ebl-g) 


### The 4 Principles of GitOps

You can start your GitOps journey with any one of the following principles. Many of today’s GitOps practitioners advise to start small and in any category you can. Cornelia breaks down the 4 principles. (see 7:12) 

![alt_text](/slides/1_More_to_GitOps_Than_Meets_the_Eye_15_Principles_of_GitOps.png "1_More_to_GitOps_Than_Meets_the_Eye_15_Principles_of_GitOps")


Most importantly, these are principles, **_not technologies_**. You can apply the principles across many of your existing technologies without replacing them. (From [There's More to GitOps than Meets the Eye](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) 

See also the new [GitOps Working Group](https://github.com/gitops-working-group/gitops-working-group#gitops-principles) in the CNCF, which has been building out the Principles and other GitOps starting points. 

### GitOps doesn’t mean replacing existing technologies

Getting started with GitOps doesn’t mean you have to replace your existing technologies. You can apply the principles across many of your existing and future technologies. 

(From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) 

For example, Javeria Kahn (see 11:00 and 18:15) lists out several technologies that your teams probably use already that can get you on the path towards GitOps. For operators, Javeria's team uses Atlantis for Terraform, Salt, Ansible, Puppet, Flux, and ArgoCD, and for app developers, they use Skaffold, Draft, GitKube, Helm, Kustomize, Flux, ArgoCD, and Flagger. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 


### “GitOps” doesn’t require Git

You aren’t constrained to Git. You can use container registries, ServiceNow and other enterprise configuration management systems. You don’t have to throw out your existing systems.

Cornelia Davis breaks this down in her talk (see 9:57) (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) and Kyle Rockman event talks about “SheetOps” where, as long as you have version control, you can use something like Google Sheets as a UI for Gitops-types processes. (See 21:48) Kyle describes how by using GitOps methodology they are now able to easily manage a cost-attribution process that is high impact to the business, but low impact to the system. (From [GitOps Everywhere!](https://youtu.be/VYwfZQc7hxc)– Kyle Rockman in conversation with Cornelia Davis) 
>*"The real value of 'SheetOps' is bringing value to departments that are unfamiliar with Git - someone working in spreadsheets all day can now do operations easily."* - Kyle Rockman, Lead Infrastructure Engineer, Under Armour

### The Future of GitOps

1. **Beyond YAML:** The future of GitOps means that you can go beyond YAML with technologies like TypeScript, Python, cdk8s, jkcfg. Find the tool that’s best for the developers and DevOps engineers to describe their configs.
2. **Storing in Git:** You aren’t constrained to Git. You can use container registries, even ServiceNow and other enterprise configuration management systems. You don’t have to throw out your existing systems.
3. **What can you GitOps?:** You can GitOps not just apps, but infrastructure, things that go onto DNS and identity providers, Chaos experiments and Kubernetes Clusters, and more. You can GitOps all the things!

Hear Cornelia break this down (see 9:57) (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) 


## The Business value of GitOps

### Use metrics from DevOps Research and Assessment (DORA):

Cornelia Davis (see 3:37) refers to the [reports from DevOps Research and Assessment (DORA](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling)) that show that companies that perform well with profits and growing market share are companies the rank well in these 4 categories: 

1. Deployment frequency 
2. Lead time for changes 
3. Time to restore service 
4. Change failure rate 

Alternatively, companies that don’t rank well show metrics of losing profits and market share. Cornelia outlines the ways in which companies can use GitOps to improve profits and company growth in the 4 categories (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

![alt_text](/slides/2_GitOps_BizValue_Cornelia_7_State_of_DevOps_Table.png "2_GitOps_BizValue_Cornelia_7_State_of_DevOps_Table")

**1) Metrics impacted by increasing _App team productivity:_**

Cornelia Davis (see 13:17) discusses how improving app team productivity with GitOps helps to reach the first two DORA metrics - increasing deployment frequency and reducing lead time. Giving application teams access to a GitOps-based platform allows application developers and DevOps engineers to use familiar tools and Git-based workflows like pull requests to optimize their efficiency. All of the concerns, beyond the development and testing of application functionality, such as security and compliance, are all baked into the platform (also managed in a GitOps manner). This keeps the application teams from spending time here and furthers their productivity. That is, applying GitOps approaches and using familiar tools makes it possible for app teams to increase their productivity, delivering on metrics that DORA has correlated with high-performing and profitable organizations. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

**2) Metrics impacted through the realization of _App team autonomy:_**

GitOps allows for app teams to act more autonomously, or otherwise put, it enables a self-service model. App team independence contributes to both decreasing lead time (the amount of time from code complete to production deployment) and increasing deployment frequency.

Cornelia Davis (see 15:40) shows that the “full stack engineer” is an increasingly impossible role to maintain and doesn’t help toward the goal of shortening the lead time for changes. Individuals cannot know every part of the stack fully to be efficient. In fact, there have been known incidents because an engineer didn’t have full knowledge of the stack and made an error that caused outages. GitOps helps the App team be autonomous from other teams, and therefore helps them meet the [DevOps Research and Assessment](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling) (DORA) metrics of shortening the lead time for changes and increasing deployment frequency. With GitOps, the app and platform teams have different responsibilities and areas of expertise. The app team can focus on iteratively building and delivering diGital offerings to the consumer. 

The Platform team is responsible for enabling the app teams, while maintaining security, compliance, resilience, and cost efficiency. With GitOps, the app team manages its own configs for app config values and topology, and the platform team manages its own configs for security and other needs such as compliance configs. The platform team configurations provide a secure, compliant and resilient runtime environment to the app teams, making their deployments enterprise-ready by default. Through this process, they can shorten the lead time for changes and increase deployment frequency, DORA metrics that correlate with high-performing and profitable organizations. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

Kyle Rockman (see 4:40) underscores the importance of empowering their developers through self-service. With autonomy, the app team developers could do what they need to do faster and better. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

**3) Metrics impacted through _Implementation of safety nets:_**

According to DORA, companies that deploy more frequently and have fewer failed deployments are among those that perform well on profitability and growth metrics. GitOps provides the safety nets to improve both of these metrics.

Cornelia (see 20:37) shows that GitOps provides safety nets in at least two key ways. First, since the entire state is captured in that version history, you can deploy more frequently, knowing that you can roll back should something go awry. Another safety net is in the GitOps runtime: Using a project like Weave Flagger lets you do canary deployments and rollbacks both for delivery and in the operational mechanics inside of the runtime environment. 

These two safety nets (that are a part of the GitOps process and platform) support improvements to the DORA metrics by reducing the change failure rate and increasing deployment frequency. These both contribute positively to business outcomes. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

**4) Metrics impacted through _Repeatability_**

The final category that DORA links to company profitability and success is the reduction of mean time to recovery (MTTR). GitOps puts in place systems that deliver on repeatability, which makes it possible to reduce MTTR and the change failure rate.

Cornelia Davis (see 23:50) talks about how repeatability across different environments and across time decreases the change failure rate and mean time to recovery. This is because 
1. we have a declarative specification of the **entire system** and 
2. with synchronization, delivery isn’t the last step in the CI pipeline. 

If you rerun a CI pipeline, you aren’t able to lower the change failure rate in the same way that you can by decoupling the delivery process from the CI process. We want to use an agent to guard from drift, arguably is one of the top ways to hurt MTTR. GitOps helps to guard against drift by continuously synchronizing the desired state stored in Git with what is deployed into Kubernetes.

With GitOps, the entire system is being versioned in Git and the reconcilers ensure that what is deployed matches that desired state. This combination delivers on the [DevOps Research and Assessment](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling) (DORA) metrics of decreasing the change failure rate and decreasing the MTTR, key metrics for companies high on profitability and growing market share. ([From GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

Note that another benefit of GitOps-driven repeatability is as a lever for **Cost control.** If developers can trust that a self-serve system will deliver them the environments they need upon request, they are less likely to hang on to systems that are not currently in use. This also allows you to put automation in place to harvest and manage those unused environments.

**5) Availability through _Redundancy_**

Finally, DORA tracks a fifth metric, Availability, which is almost always realized through redundancy, something that GitOps helps provide. 

Cornelia Davis (see 26:10) covers how, through GitOps-based Redundancy, organizations can make consistent deployments to different environments, for example, different data centers, with only slightly different configs - all stored in Git. GitOps makes it possible to scale the deployment process across many things by creating the same process across different systems. 

GitOps provides distinct solutions to the DORA categories so that you can connect these operational and process changes directly to your company’s ability to make profits and gain market share.

![alt_text](/slides/3_GitOps_BizValue_Cornelia_32_GitOps=Cloud_native_Delivery_and_Ops.png "3_GitOps_BizValue_Cornelia_32_GitOps=Cloud_native_Delivery_and_Ops")

(From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) 

## Why do GitOps?

GitOps brings together developer best practices and operations. It takes advantage of a declarative system to manage the configuration and operations of every element of the platform, from the infrastructure through to the applications. GitOps also provides observability and control - ensuring that the platform is reliable and operable.

### Real GitOps practicioners share their stores

#### Scaling the team and meeting CapEx and OpEx needs:

**Vuk Gojnic** of **Deutsche Telekom** (29:45) shares that, by having the team spend less time on repetitive tasks, they can scale and do more with the same streamlined team. Similarly, with a self-healing platform, that means that the service desk team is dealing with fewer tickets when the system can resolve some of them itself. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Kyle Rockman** (see 7:03) says that the way to start scaling a team is not by throwing more people at the needs. Instead, you provide automation and self-service to developers. Kyle’s fairly small team could leverage automation and self-service through GitOps to do less manual work and more innovative work. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

#### Uptime and Reliability:

**Taylor Dolezal** (25:55) shares how uptime is a common go-to shared benefit where leadership and teams can find agreement. GitOps brings improvements to uptime, failure rates, SLOs, SLAs, and SLIs. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) 

**Kyle Rockman** (see 5:54) says that GitOps brings Speed and Reliability to ship more quickly with confidence. This is because GitOps includes explicit review processes that eliminate human errors. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

#### Automation:

**Vuk Gojnic** (see 16:55) talks about how they have infrastructure that manages itself by using Git as the source of truth. That means that the team no longer acts as admins that manage the infrastructure, but as observers or auditors who only intervene when something goes wrong. That’s the value of GitOps for them. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Kyle Rockman** (see 4:40) also shares how the first motivation to look at GitOps was automation. For them, automation would empower the developers to self-service and do what they need to do faster and better. (gaining the **_App team autonomy_** that Cornelia covers in the talk, [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ)). (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

#### Security:

**Maya Kaczorowski (GitHub)** shares the ways that GitOps contributes to security, which is important for business. The key business metric for security is no data loss, and having an approach like GitOps helps minimize costly human error, breaches, and vulnerabilities before they become costly company-wide problems.

GitOps allows what Maya calls “Continuous Security” - the ability to be continuously integrating security at all times. When you have everything “as code” with GitOps, you can make your code as automated and error-free as possible. With GitOps, you push a change to code that’s reviewed, and then you use automation to do the hard stuff of deploying, monitoring, etc. You also have a pipeline where devs only need to focus on developing their apps, and any operations or security control can be automatically verified or enforced as part of that pipeline. Teams have a clear separation of responsibilities. 

So what is GitOps for Security? 

GitOps provides 1) Immutable infrastructure, 2) Single source of truth, and 3) Dev velocity to help you automate security.
1. **Immutable infrastructure:** immutability protects you from making changes and errors. Since deployments are separate from development, you can deploy frequently knowing that if something goes wrong, then you find out immediately. 
2. **Single source of truth:** Having a single source of truth means that you have a single process to make changes. You can use Git to manage policies and implement necessary controls to meet your security needs.
3. **Dev velocity:** version control, test automation, and other tooling available with Git allow devs to move faster and securely. With GitOps, you can optimize your mean time to remediate (MTTR) because if an upgrade is susceptible to vulnerabilities, you can quickly deploy a fix without breaking the infrastructure. For instance, users of GitHub’s Dependabot feature receive an automatically triggered PR to update a vulnerable dependency to a known fixed version. Repos that have enabled Dependabot have shown an average MTTR of about 40 days, way lower than many industry metrics that range from 180 days to 2 years. 

GitOps also improves security of the dev pipeline in 3 ways: 
1. **Code:** using Git means that you have a static file for comparing requirements. In YAML it’s pretty easy to check if you’re meeting them. If your access policies are declared in a config file, you know who has access to what and you can verify it in code. 
2. **Changes:** you have versioning so you know what you shipped and can roll back. Your commit history is an audit of comments, reviews, and a history of decisions that were made to your repo. 
3. **Production:** the single source of truth with a single process removes the humans who are error prone. You implement a single set of tests, security scans, and permissions to make these changes securely.

GitOps provide Continuous Security, which will help you with supportability and security. If you want GitOps, discuss these benefits with your security team and how it will make both of your jobs easier. (From [Security and GitOps – Maya Kaczorowski (GitHub)](https://youtu.be/mneDm2ebl-g) 

Kyle Rockman (see 5:54) says that GitOps creates an audit trail so that you can show the auditors what’s been happening and you can meet PCI compliance requirements. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

#### Transparency and Collaboration:

**Javeria Kahn (Palo Alto Networks)** shares how GitOps brings transparency to the org primarily from two capabilities: 
1. **Reversibility:** You can do rollbacks and lower mean time to resolving config-based outages with version controlling.
2. **Audit trails:** You can track the history of a repo, its PRs, actions, etc.

Because of these benefits, the teams are able to build **transparency**: there are no more obscure system changes and you become less dependent on individual employees who reach burnout from being on call. (See 6:00 from [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 

Javeria also states that GitOps promotes **collaboration** between teams that build and use their resources. Between transparency and collaboration through GitOps, teams are able to improve the entire software development lifecycle. (See 7:50 from [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 

### Reduce the risk of relying on single employees:

Relying on individual employees who live with the pager both raises risk for the company and causes burnout with the employee. Javeria Kahn (see 6:00) states that automation based on GitOps helps employees not get burned out, helps them expand their role, and helps reduce risk for the company with a reliable system. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 


## Starting the Conversation

### Show Demos to make the GitOps benefits real

**Demo something tangible:**

Kyle Rockman (see 14:48) took a pipeline that took 6 hours and, by using GitOps, demo’d how to shrink it down to a pipeline that one dev could do in 10 minutes. This demo built huge trust in the org and interest in GitOps. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk))

Steve Wade (see 33:26) describes how Mettle demo'd a new way of working during an incident or major outage. They cut the mean-time to recovery to only 20-30 minutes, from a time that was previously unknown. "We videoed it!" says Steve. Since it seemed too hard to believe for others in the org that they could spin up a brand new environment from absolutely nothing in 20-30 minutes, Steve's team captured a video that proved that they could. He captured a video from the starting point of creating the account in Amazon, spinning up the the platform, to having workloads actually running on it with live URLs. Steve shared, "**The ability for us to show that the technology works and that these new, cool, bleeding-edge best practices that we’ve implemented are actually serving us well.**" (From [GitOps Days Day 2 Roundtable: Teaching GitOps to your Teams"](https://youtu.be/HHE11BzqXMA))

**Demos to assuage concerns of major changes:** 

Dan Brubaker Horst (33:30) hopes to put together demos that show “this is actually more boring than you were expecting.” The “boring” part shows that you are showing tools that are familiar together with approaches and tools that are new. You’re also showing that you’re trying to solve problems for everyone, not trying to do something crazy for no reason. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Small Blast Radius:** 

Taylor Dolezal (see 20:00) talks about the value of starting with a small blast radius, something safe to show the value of GitOps. A common point of resistance is that people sometimes feel that the current infra “works” so why change it? Change is hard and being able to demonstrate change in a safe way will help assuage concerns. As Taylor shares, the people who see the demo might say, “You weren’t trying to do anything crazy! This is actually very helpful.” They will be able to see the benefits of GitOps at work. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Bottoms Up Approach:** 

Vuk Gojnic (see 22:40) shares how creating a loud and forceful revolution will just create resentment and resistance. Instead, in some organizational cultures, a bottoms up approach might work. Vuk created small demos and invited a few people to watch and learn. Maybe you get your first fan who sees the value, then another and another. You start to build virtual circles of people until you might have different teams taking small steps to adopt GitOps approaches (maybe one team starts building immutable declarative infrastructure while another team is using config management-based tools). So when detractors notice and ask why the process and tools are different from what they are used to, you have actual working instances to show the value. If the concepts work, you can “take whole organizations by storm in a positive way.” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Vuk Gojnic (see 36:25) later adds that doing a Hello World demo especially with a new and unestablished DevOps team can be a great opportunity to get some interest and traction. Also, providing the demo and leaving the option open for them to try it or return to it later provides an open door without being forceful. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Taylor Dolezal (see 39:15) agrees that, especially if you’re in a large organization, your efforts for change will be likely throwing sand in the ocean. Find small groups and test out how they respond to your position and demo. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) 

Kyle Rockman (see 7:45) shares how, at Under Armour, GitOps started with the goal of automating the infrastructure. Then, over time, as the practice became pervasive and known, they handed over the keys to the engineers. This way, they took small steps with particular teams, gained a level of comfort with GitOps across the various teams, and “leveled up” across the org. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 


### Be empathetic and Work as a team

**People are busy and change is difficult:** 

As Taylor Dolezal (see 20:00) shared, it’s reasonable for people in your teams to say “I don’t understand that. I don’t have the time to learn that.” It isn’t that they don’t get it, but they have a lot on their plate, often have limited resources, and they need an easily digestible way to understand the value. They need to understand that it’s worth carving out the time to learn something new. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Kyle Rockman (see 12:45) gives great advice about how you message your value prop and to use words that are familiar and not challenging. Kyle even re-named Chaos engineering as “resiliency engineering” and renamed the team “the resiliency team.” Using words that are familiar to your stakeholders and are associated with how they are measured will go a long way to minimizing mental friction with the people you are trying to persuade. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

**Find shared goals, including shared language:** 

See the [Business Value of GitOps](#the-business-value-of-gitops) for great talking points shared by our GitOps Days speakers and community.

Kyle Rockman (see 11:00) emphasizes the importance of working together to make sure that the change makes everyone’s lives easier, not just one group over another. Find the common problems that you’re trying to solve. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

**Hear concerns and understand the context and culture:** 

Taylor Dolezal (see 20:00) shares the importance of being honest as a team about various concerns and time constraints. Instead of butting heads over agreeing or disagreeing to a change, be aware that 1) people are busy and don’t have time to learn new things all of the time or right away, and 2) maybe they have constraints or information that you don’t know about - so ask more questions and find out more information from the team. 

Work as a team! As Taylor says, “Let’s both dig into that.” Work together to hear each other's constraints and find where you have shared priorities and benefits that you want for the organization. That way, your peers and stakeholders will realize that you weren’t trying to hurt them or force them into an uncomfortable place. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Taylor Dolezal (see 39:15) adds the importance of being an active listener. Really work to listen to their concerns, where they are coming from, and their context. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Stakeholders:** 

Javeria Kahn (see 8:40) outlines the key stakeholders that you’ll want to include in the conversations around GitOps. 

For the infrastructure layer, you’ll want to talk with the 
1. SREs, 
2. Infrastructure engineers, and 
3. Management. 

For the app layer (see 18:15), include stakeholders such as the 
1. Developers and the 
2. DevOps/Test Engineers. 

(From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 

Dan Brubaker Horst (33:30) resolved to take the people most concerned about change and to make them key stakeholders in the conversation early and for each of the steps in the journey. He also hopes to show through demos that “this is actually more boring than you were expecting.” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Make management and onboarding to GitOps a positive experience for your teams:** 

Taylor Dolezal (see 20:00) and Dan Brubaker Horst (28:10) commented on the value of looking at the human side of change. Aside from GitOps benefits such as deploy frequency, lead time, meantime to restore, change/fail percentage, there’s the need to measure the human elements. Ask yourself: “Is this service easy to manage? Is it easy to get onboarded with GitOps? Is it easy to pull down all of these tools that we’ve set up for the team?” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Taylor Dolezal (see 39:15) adds that if your team already knows Git, that’s a great starting point because you’re starting with something they already know. Demo how it works with Git instead of jumping into changing pipelines. You might come across as too demanding and not credible. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

**Create solutions for frustrating shifts and slowdowns that happen with change management:**

Kyle Rockman (see 9:20) shares the importance of being empathetic and taking seriously the frustrations and slowdown that come with change. For instance, speed of getting code into production got impacted, so it was imperative for them to troubleshoot and optimize pipeline speed. Similarly, power users got frustrated with giving up manual control that they had optimized until now. They felt that the manual way was quicker. Instead of dismissing this feedback, Kyle's team crafted new solutions and worked together to share knowledge about the new practices. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

**Be Prepared:**

Several GitOps Days speakers agreed that there is an upfront investment of needing to study up on GitOps so that you can be prepared with your position and to answer questions. We hope that the resources in this GitOps Conversation Kit (beta) and moving forward will provide you with those necessary resources. 

Also, reach out to us for help [(gitops@weave.works)](mailto:gitops@weave.works). We offer some free and paid options to work with and train your stakeholders and team. 


### Start with Small Steps

**Solve existing business drivers:**

Dan Brubaker Horst (42:20) shared the valuable position that it’s ok to treat GitOps as a viable option no matter where you are in the journey. Understand the business drivers in your organization and find the ways that GitOps can help with those needs. GitOps is not an end goal in itself, but a solution to existing needs. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) 

**Solve pain points:**

Kyle Rockman (see 16:15) talked about how they started by identifying and categorizing pain points that they could start to solve. They used data-driven analysis of what they wanted to improve. Doing this also builds trust because you can start to automate things that are painful or time-consuming, which frees up time for you and others to solve bigger problems. Start with things that you can control and slowly start to build relationships with people outside of your team. Then you can demo what you did. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

**_Pain point for Devs: Lower dependence on admins_**

One pain point that Javeria Kahn (see 23:45) mentions for devs is the dependency on admins. If you’re preparing to introduce GitOps to your dev teams, Javeria recommends socializing this benefit to devs because it is likely something they want already. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 

**Start with something familiar:**

Steve Wade (see 41:00) Starting with something you're familiar with has a small blast radius. If that thing doesn't work, then it's not going to be the end of the world. "For us, it was just a dashbaord. A dashboard not being online isn't great, but it's not an outage." Starting small with something familiar also allows you to learn the steps. Steve goes on to say they started with the platform workload, but didn't touch any of the developer workloads. Iterating on a number of different approaches on various things and learning lessons there first. "If you’re the GitOps enthusiast within your organization, start with something that you’re familiar with, look at the different approaches, see how it works, and then breed that into a couple of other microservices. Then slowly but surely, drip feed your developers into this process." (From [GitOps Days Day 2 Roundtable: Teaching GitOps to your Teams"](https://youtu.be/HHE11BzqXMA)) 

**Start with staging and dev environments first for infrastrcuture changes**

Javeria Khan (see 42:33) explains as an operator and platform architect, starting out small for her meant rolling out GitOps tools in staging and dev environments first to really get a feel for the tools, processes, features, etc. "When you're adding GitOps tools like Flux or Flagger to your kubernetes environments, you should enable them on staging clusters first and get a feel of what you like and what you don’t like about it. This really allows you to decide which of their features tie in better with your environment and how you're going to integrate them with your workflows. When I was testing out, Flux I realized I didn’t want it pulling the images directly because that kind of made rollbacks harder. Instead I just changed the CI to update the image key and the yaml configs and the config repos. This was also beneficial for keeping the deployment specs up to date. Any kind of new thing that you’re starting out with, just start out with the dev environment within your infrastructure. That’s a good first starting step." (From [GitOps Days Day 2 Roundtable: Teaching GitOps to your Teams"](https://youtu.be/HHE11BzqXMA)) 

## Use Cases

### **On-prem example using Kubernetes:** 
Javeria Kahn (see 14:50) breaks down their particular use case and tools first for infrastructure:

![alt_text](/slides/4_Practitioner_Highlight_Javeria_IaC_GitOps_in_Practice.png "4_Practitioner_Highlight_Javeria_IaC_GitOps_in_Practice")

And then for the app layer (see 20:30):

![alt_text](/slides/5_Practitioner_Highlight_Javeria_App_GitOps_in_Practice.png "5_Practitioner_Highlight_Javeria_App_GitOps_in_Practice")

(From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) 

### **GitOps for Human and other sources:** 
Carlos Sanchez (see 12:30) shares how we often talk about GitOps for triggers from human beings but changes can come from UIs, APIs, and from human beings (devs, SREs, people on call, etc). At Adobe, they’ve set up a system so that all of these sources end in Git so that they can get a consistent and up-to-date view of the system. They use APIs or messaging queues between the different systems and translate those events into messages. They use a plug-in in Jenkins that helps you run jobs based on messages as well as microservices to do that. They listen to the messages and API calls, and transform them into Git commits. The commit gets applied to the repo, and then the GitOps pipeline runs. So they merge all of these events from different sources, centralize them in a Git repo through this system, and then span out to the pipeline to deploy. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

### **GitOps for DNS and CDN:**
Carlos Sanchez (see 11:13) shares how, at Adobe, they use GitOps for DNS, which shows how you can GitOps all the things! They have files that define which DNS records they need to create for which users. Those files are stored in Git. Every time there’s a change in Git, that triggers an event and a pipeline. They use templating to transform these DNS configs into docs that the DNS API services can consume. They have the same process for CDN where they have definitions in Git, templating, and Jenkins pipelines to call the CDN provider APIs. That way, they have all the things (apps, infrastructure, DNS, CDN - as well as Grafana and Prometheus configs) all stored in Git and managed by GitOps. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

### **Reconciliation is the key to GitOps + Pull model for scale:** 
Is GitOps just infrastructure as code? GitOps brings the CD part to the infra as code through reconciliation. Carlos Sanchez (see 5:58) talks about, at Adobe, how they use GitOps approaches with Terraform and cloud providers’ infra as code offerings. They make changes to the Git repos to deploy and update the infra as needed. They also use GitOps for their apps. For that, they have apps defined in Git that are automatically deployed across clusters and namespaces. For this, they learned that the push model wouldn’t scale to their needs so moved to a pull model. With the pull model, the Jenkins pipelines push the Git configs somewhere and then from inside the clusters services pull the configs and reapply the changes as needed to the namespaces, Kubernetes environments, etc. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

### **Fidelity Infrastructure team using EKS and GitOps tools to provide a platform with “bundled” features:**
Niraj Amin (see 9:41) shares how his platform team at Fidelity uses EKS and about 15-16 different components to enable their dev teams (things like ALB ingress controller, external DNS, etc.). They combine features from EKS, open source, infrastructure code, and custom operators to provide their dev teams with a set of features such as automation. This “bundle” of offerings is their platform that provides services across business units and environments. For instance, if they make a change to the ingress rule for a security group, that group would essentially receive another version of the platform “bundle.” So dev teams, DevOps teams, SRE teams, etc. would be able to upgrade their platform to include the set of features that are “bundled” together by the platform team. The end goal is for those teams is not to have to think about the platform at all and to focus on their roles. (From [GitOps Days Day 2 Roundtable](https://youtu.be/HHE11BzqXMA)

### **Culture based on stability:** 
Dan Brubaker Horst (see 33:30) shares how, in a work culture based on job security, there can be general concerns when new approaches, processes, or tools are introduced. Also, their success metrics are not necessarily based on velocity where workflow processes may be scheduled out for weeks. The culture also includes employees whose main role is to maintain legacy systems and to be on call. For these types of use cases, being able to leverage approaches that improve automation and reliability doesn’t mean lower job security. In fact, as Vuk Gojnic shares, it means that the team can scale and do more with existing tools and team members, not lose their jobs. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s))  

Kyle Rockman shares similar stories that the team worked to automate themselves out of their current jobs, but onto more improvements because there’s always more to do! (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 

### **GitOps that started with the infrastructure team:**
Kyle Rockman (see 7:45) shares how, at Under Armour, GitOps started with the goal of automating the infrastructure. Then, over time, as the practice became pervasive and known, they handed over the keys to the engineers. This way, they took small steps with particular teams, gained a level of comfort with GitOps across the various teams, and “leveled up” across the org. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 


## First GitOps steps for your dev and platform teams

### GitOps Resources:

**GitOps Hands-On:**

[ ] Try [this GitOps Hands-On](https://eks.handson.flagger.dev/) to get a tangible experience of GitOps and a canary deployment

[ ] [Watch this video](https://youtu.be/TbFu4hG73wg) that walks you through the steps of the GitOps Hands-On

[ ] [This video](https://www.youtube.com/watch?v=WHzxunv4DKk&t=6582s) shows us guiding the audience through the GitOps Hands-On (including troubleshooting). [Contact us](mailto:gitops@weave.works) if you would like us to do this again!

### GitOps Tools:

Tools mentioned by GitOps Days speakers include:

*   [Ansible](https://www.ansible.com) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [ArgoCD](https://argoproj.github.io/argo-cd/) - [Mentioned at GitOps Days](https://youtu.be/LLzH_ADdjEA)
*   [Atlantis](https://www.runatlantis.io) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [Chef](https://www.chef.io)
*   [Draft](https://draft.sh) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [eksctl](https://eksctl.io) - [Mentioned at GitOps Days](https://youtu.be/LLzH_ADdjEA)
*   [FluxCD](https://fluxcd.io) - [Mentioned at GitOps Days](https://youtu.be/vQbjv7AffVg)
*   [Flagger](https://flagger.app) (Weave Flagger) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=eMJ0uDvXoH0)
*   [Git](https://git-scm.com)
*   [GitKube](https://gitkube.sh) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [GitOps Toolkit](https://toolkit.fluxcd.io/) - [Read the blog post](https://www.weave.works/blog/gitops-with-flux-v2)
*   [Helm](https://helm.sh) - [Mentioned at GitOps Days](https://youtu.be/vQbjv7AffVg)
*   [Keiko](https://medium.com/keikoproj/keiko-running-kubernetes-at-scale-1178491c1440) - [Mentioned at GitOps Days](https://youtu.be/LLzH_ADdjEA)
*   [Kubernetes](https://kubernetes.io)
*   [Kustomize](https://kustomize.io) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [Jenkins](https://www.jenkins.io) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=CU9AseP_DOI)
*   [Jenkins X](https://jenkins-x.io)
*   [Pulumi](https://www.pulumi.com)
*   [Puppet](https://puppet.com) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [Salt](http://salt.io) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [Skaffold](https://skaffold.dev) - [Mentioned at GitOps Days](https://www.youtube.com/watch?v=HJHLIGL8NfQ)
*   [Terraform](https://www.terraform.io)

### Things to teach:

**Teach YAML to your teams (if that’s what you choose to use to describe your configs):**

Kyle Rockman (see 8:24) shares how, at Under Armour, they use YAML and training up their devs to understand the YAML they are writing has paid spades. Trained team mates help each other out, everybody across the org knows best practices, and they organically continue to learn as new features come out.
(From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) 
>*"The reason that we wanted people to understand and be able to write the yaml is it’s a base building block. So, if you understand what’s going on down there, you’re gonna do better at the higher level...and you’re gonna understand how that translates down. We initially started out with Helm..and we didn’t like the black boxy nature of it - we had some issues with not understanding what it was doing under the hood. That really drove us to understand the yaml so that we understand exactly what kubernetes is gonna do, and then we can put a layer of abstraction on top of it."* - Kyle Rockman, Lead Infrastructure Engineer, Under Armour

(see 19:05 from [GitOps Everywhere!](https://youtu.be/VYwfZQc7hxc)– Kyle Rockman in conversation with Cornelia Davis)

**Continuous Delivery and Progressive Delivery:**

Stefan Prodan and Leigh Capili teach you both how to get started with GitOps with some open source technologies, but also how to share key points with your team to get them excited about GitOps in these two sessions:
- [Flux and Helm: Intro and How to teach your teams!](https://youtu.be/vQbjv7AffVg) - [Slides](https://drive.google.com/file/d/1FgzOxoSCfc2R148T5J-Xlee7WBJmb8Mq/view?usp=sharing) Topics include: how to decouple CI from CD (and the value of doing so), continuous operations with controllers and reconcilers, deploying inside the cluster, plus a demo of how to install Flux and Helm.
- [Flagger and Service Meshes: Intro and How to teach your teams!](https://youtu.be/eMJ0uDvXoH0)- [Slides](https://drive.google.com/file/d/1SXNQqwmBH1O1PwrKq4nx4ascG--fIdF9/view?usp=sharing) Stefan explains how to do Progressive Delivery with a GitOps mindset using tools like Flagger and service meshes. Topics covered include: what is progressive delivery, how Flagger automates the release process by gradually shifting traffic, deployment strategies such as canary, a/b testing, and blue/green (traffic monitoring vs. switiching), declaritive releases, release automation, traffic management, validation process, metric templates, alterting, testing webhooks, manual gating, Flux + Flagger = GitOps Pipeline.

>*"If you get to a point where your team has good maturity, you're doing frequent enough releases where things are breaking and you've got the metrics and the storage and you're now starting to look at why things are breaking, then you're in a perfect place to adopt some progressive delivery and explaining the value of adopting Flagger as opposed to trying to do your own thing."* - Leigh Capili, Developer Experience Engineer, Weaveworks

More teaching resources to come!


# GitOps Days

## GitOps Days 2021 YouTube Playlist
Check out the [GitOps Days 2021 YouTube Playlist of talks](https://youtube.com/playlist?list=PL9lTuCFNLaD3bglbKKia5ELAoutBupygT)

## GitOps Days 2021 Slides

* [Keynote: Has GitOps Reached an Inflection Point? - Cornelia Davis](https://drive.google.com/file/d/1f7OcEc6u8CQVCjpUtVWfcMdbbyxTUY6D/view?usp=sharing)

* [Keynote: GitOps in Microsoft Azure with Flux - Chris Sanders & Jonathan Innis (Microsoft)](https://drive.google.com/file/d/1KBid56IVQwAgmlqRJDSUuEXBk7RoldF5/view?usp=sharing)

* [Keynote: Evolving DevOps to GitOps - Nathan Taber (AWS)](https://drive.google.com/file/d/1PIAFQkUWsD4CPHXOPfPZ8mLMAbhEZ1NX/view?usp=sharing)

* [Keynote: GitOps in the Next Five Years - Justin Cormack (Docker)](https://drive.google.com/file/d/1PBXFFw3EGEZbpgFqGUERHLyI2JDh91cC/view?usp=sharing)

* [How We Sailed into Production - GitOps-based CaaS at Deutche Telekom - Maximilian Rink & Marcel Fest (Deutsche Telekom)](https://drive.google.com/file/d/1PCHr5mIBrHLNCvtVVeBCl5y0yeA3W_nu/view?usp=sharing)

* [GitOps Loops: A Step Twoards Autonomous Infrastructure - Vuk Gojnic (Deutsche Telekom)](https://drive.google.com/file/d/1P7KM4mOzUyCmtMb3lidw8MD0NrOLhW6w/view?usp=sharing)

* From Wild West to Flux Multi-Tenancy - Mae Large & Russ Parmer (State Farm)

* [GitOps Maturity Model - Paul Fremantle & Tiffany Wang](https://drive.google.com/file/d/1e2snotEWPrkHVq963P_ttlccOtv6I41r/view?usp=sharing)

* [MLOps - GitOps for Machine Learning - Paul Curtis](https://drive.google.com/file/d/1PHBOak2IjxDa6m5QBzkzVJNot8SKrzRH/view?usp=sharing)

* [Flux Deep Dive - Stefan Prodan](https://drive.google.com/file/d/1be0-pT3zVbDh0PhOmS4AmllmxBpug6GC/view?usp=sharing)

* [Orchestrating SLO-driven Multi-stage Delivery with Keptn: Merging GitOps and Data-driven Delivery - Jürgen Etzlstorfer (Dynatrace)](https://drive.google.com/file/d/1Hvqj99-y4mLd5PLdEaGLTFfrwv294jpE/view?usp=sharing)

* [Implementing Continuous Deployment in Kubernetes - Miguel Fontanilla (Sennder) & Jose Talavera](https://drive.google.com/file/d/1PiPP-DZqMXx5bl_q3r8FtJsjgds-hT4K/view?usp=sharing)

* Using Source Code Management Patterns to Configure and Secure your Kubernetes Clusters - Giovanni Galloro (Giovanni Galloro)

* [GitOps at scale using Fleet - Saiyam Pathak (Civo)](https://drive.google.com/file/d/1QHP6dbMT-IzahlnvhqnvBsYUcoeutc67/view?usp=sharing)

* GitOpsify All The Things 🔨 – Tools, Apps, Even Your Organization and Teams! - Cansu Kavili Örnek & Donal Spring (Red Hat)

* [Visualizing the GitOps Journey of a container - Samiya Akhtar (Microsoft)](https://drive.google.com/file/d/1E5y5ZmdHetzLsnQA6Sl58REYGkHBNepE/view?usp=sharing)

* So Many GitOps Tools, So Little Time: GitOps on AWS Best Practices - Paul Roberts (AWS)

* [Closing Keynote: Building a Web-Scale Internal Developer Platform at Alibaba - Lei "Harry" Zhang (Alibaba Cloud)](https://drive.google.com/file/d/1PkC-b-FvzX1Vz8dnxrT9VVUpiivaxdZT/view?usp=sharing)


## GitOps Days EMEA 2020 YouTube Playlist
Check out the [GitOps Days EMEA 2020 YouTube Playlist of talks](https://www.youtube.com/playlist?list=PL9lTuCFNLaD1AufVruv-0vFQWZGyu15G2)

## GitOps Days EMEA 2020 Slides

* [What is GitOps? - Alexis Richardson](https://drive.google.com/file/d/1lzlAsx8t0yUBE_O-N2z0MOplML34QaH9/view?usp=sharing)

* [The Business Value of GitOps - Paul Fremantle](https://drive.google.com/file/d/1lNrtMlW77BjDL6UYzCXz8TpZc6BrcoFO/view?usp=sharing)

* [The GitOps Ecosystem Today - Alison Dowdney](https://drive.google.com/file/d/12VqrkqzHn54MhZD2ZzhIPtiqbT9JD1Ad/view?usp=sharing)

* [Our Journey Building a Self-Service Platform - Steve Wade & Gavin McNair](https://drive.google.com/file/d/1WzYSuWUMvswlvtQz1rjRuClHQoYOfMQ7/view?usp=sharing)

* [Security Benefits from Adopting GitOps - Ivan Pedrazas (Control Plane)](https://drive.google.com/file/d/1O2STg6wgVnbaJ4s5jAsmYjJpeAyzGvb6/view?usp=sharing)

* [Customer Perspectives on GitOps - Tiffany Wang](https://drive.google.com/file/d/1etFArLS1_UtWk4K7C7975u9zFXBYWYAw/view?usp=sharing)

* [Continuous Security – Building Security Into Your Pipelines - Matt Jarvis (Snyk)](https://drive.google.com/file/d/1iVJbuJXYrz2S4qsGvltN_1Zg9kRcYo3E/view?usp=sharing)

* [Everything C-levels Want to Know About Regulatory Compliance with GitOps - Michael Hausenblas](https://drive.google.com/file/d/1_AkXMzFhcfddAdl0mjEq8fb_c5yyPmLT/view?usp=sharing)

* [Security, Compliance, & Governance for Your Enterprise Use Case - Kenichi Shibata](https://drive.google.com/file/d/1lKyDyC3x0cucxlD_vHaKK2J4t_JpVxJm/view?usp=sharing)

* [Dr. Strange-Bugs: GitOps for Data Science & Dev Teams - David Allen (Hypergiant)](https://drive.google.com/file/d/1Dp4P29oBdd5pAgCC_VCZ-kQAYGH111st/view?usp=sharing)

* [GitOps for Helm Business Value - Scott Rigby](https://drive.google.com/file/d/1wJOP-m_3lhyQUSpHkRQRrm_BU9XAPvfy/view?usp=sharing)

* [From Business Value to Technical Value of GitOps - Paul Fremantle](https://drive.google.com/file/d/1gKl-BRlZVdCXY0RVVWaF9msOBq4-q4n_/view?usp=sharing)

* [Applying the Law of Demeter to GitOps - David McKay (Rawkode)](https://drive.google.com/file/d/1Esxu7UFAWN9U4CbME7qss4NDdTfEo80y/view?usp=sharing)

* [Helm Users! What Flux 2 can do for you! - Scott Rigby](https://drive.google.com/file/d/1cR2MYCgVLi8_Pi__xU6BwJWCg_ZKRIny/view?usp=sharing)


## GitOps Days 2020 YouTube Playlist
Check out the [GitOps Days 2020 YouTube Playlist of talks](https://www.youtube.com/playlist?list=PL9lTuCFNLaD2NiNrdt7SaQjpYx_m37czS)! 

## GitOps Days 2020 Slides

* [Welcome! GitOps Today: What is it and why you should care – Alexis Richardson](https://drive.google.com/file/d/1KQ6l4yIsubjyaq8z4WMTQwMrZCPwguhJ/view?usp=sharing)

* [There’s More to GitOps than Meets the Eye – Cornelia Davis](https://drive.google.com/file/d/1MJxYN5yhK6w7ijnLlyWlnC_Oi6XraYZV/view?usp=sharing)

* [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://drive.google.com/file/d/1VVxs4BwoUzyBMnV8vC8cVObQd8KcNZuX/view?usp=sharing)

* [GitOps at Adobe – Carlos Sanchez (Adobe)](https://carlossg.github.io/presentations/2020-05_gitopsdays/#/)

* [GitOps for Machine Learning Ops – David Aronchick (Microsoft)](https://drive.google.com/file/d/1yoR452m4XsjXgQ3pB94zv9lyu4eHCD-_/view?usp=sharing)

* [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more! – Cornelia Davis](https://drive.google.com/file/d/11kzZqyhLdAAfquhlH3XVuIBOk2j6INKy/view?usp=sharing)

* [Security and GitOps – Maya Kaczorowski (GitHub)](https://github.com/mayakacz/presentation-slides/blob/master/20200520%20-%20GitOps%20Day%202020%20-%20Security%20and%20GitOps.pdf)

* [Day 1 Closing Keynote: 2020 is the year of GitOps and Progressive Delivery – James Governor (Redmonk)](https://drive.google.com/file/d/1BF4a598OeRw41yioLUZZIsVeLaTh1l1S/view?usp=sharing)

* [GitOps Today and Tomorrow: Conceptual Overview and Technical Deep Dive – Cornelia Davis](https://drive.google.com/file/d/1YMlZLSaevuYoZ6ZjtCbQ0JpkU3L7ZrBi/view?usp=sharing)

* [Flux and Helm: Intro and How to teach your teams – Stefan Prodan and Leigh Capili](https://drive.google.com/file/d/1FgzOxoSCfc2R148T5J-Xlee7WBJmb8Mq/view?usp=sharing)

* [Flagger and Service Meshes: Intro and How to teach your teams – Stefan Prodan and Leigh Capili](https://drive.google.com/file/d/1SXNQqwmBH1O1PwrKq4nx4ascG--fIdF9/view?usp=sharing)

* [Thanks, and What’s your next step to GitOps? – Cornelia Davis and Tamao Nakahara](https://drive.google.com/file/d/1JJ4vw9wh5j0tqbq1MUxeKOpqRNepCydR/view?usp=sharing)
