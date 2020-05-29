### GitOps Conversation Kit (beta)

Congratulations! You have early access to the GitOps Conversation Kit (beta)!
We hope that this kit will provide you with the quotes, use cases, customer stories, training materials, and more so that you can move the needle with GitOps in your organization - with leadership, stakeholders, and dev and platform teams. 

This is a living kit that we will improve with your feedback with future versions.

## TL;DR

You’re probably looking for the [GitOps Days 2020 YouTube Playlist of talks](https://www.youtube.com/playlist?list=PL9lTuCFNLaD2NiNrdt7SaQjpYx_m37czS)! 

Don’t miss the topic-based guide below to the videos and, in the future, more resources such as blog posts, tutorials, etc.


### Need Help?

Anything missing? Did anything work well? Send us your feedback!

_Email: gitops@weave.works_

_Slack: Message @here in the #gitopsdays channel in Slack: [https://slack.weave.works/](https://slack.weave.works/)_

_Slack: We also have a general #gitops channel in Kubernetes Slack: [https://kubernetes.slack.com/archives/gitops](https://kubernetes.slack.com/archives/gitops)_

## What is GitOps?

GitOps is a paradigm, not a specific tool or technology. GitOps applies to everything and brings business value. (see 1:53)

(From [“If you remember one thing about GitOps today, it’s …” & Thanks! – Cornelia Davis](https://youtu.be/F4OnL1PWJXg)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vikjyipee95f)]

GitOps all the things! Don’t miss these stories and use cases where GitOps practitioners are using GitOps for development, operations, and so much more!

GitOps is an app dev and operations methodology that leverages 



1. an entire system that is described declaratively
2. code that is version controlled and
3. software agents that reconcile and ensure correctness (along with alerts, etc). 

Cornelia Davis (see 1:50) gives a great overview of the evolution of GitOps from being mostly a delivery process to going beyond that into all areas of application development and operations. (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]

Maya Kaczorowski adds that when you have everything “as code” with GitOps, you can make your code as automated and error-free as possible. With GitOps, you push a change to code that’s reviewed, and then you use automation to do the hard stuff of deploying, monitoring, etc. You also have a pipeline where devs only need to focus on developing their apps, and any operations or security control can be automatically verified or enforced as part of that pipeline. Teams have a clear separation of responsibilities. (From [Security and GitOps – Maya Kaczorowski (GitHub)](https://youtu.be/mneDm2ebl-g) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.skgltol7526x)]

Cornelia (see 14:00) adds that **GitOps = Continuous Delivery + Continuous Operation**

In some cases, there might be some requirements for CI, but **_not_** a replacement for CI.





![alt_text](/slides/0_More_to_GitOps_Than_Meets_the_Eye_18_GitOps=CD+COps.png "0_More_to_GitOps_Than_Meets_the_Eye_18_GitOps=CD+COps")


(From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]


## The 4 Principles of GitOps

You can start your GitOps journey with any one of the following 4 principles. Many of today’s GitOps practitioners advise to start small and in any category you can. Cornelia (see 7:12) breaks down the 4 principles.





![alt_text](/slides/1_More_to_GitOps_Than_Meets_the_Eye_15_Principles_of_GitOps.png "1_More_to_GitOps_Than_Meets_the_Eye_15_Principles_of_GitOps")


Most importantly, these are principles, **_not technologies_**. You can apply the principles across many of your existing technologies without replacing them. 

(From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]


## GitOps doesn’t mean replacing existing technologies

Getting started with GitOps doesn’t mean you have to replace your existing technologies. The 4 principles of GitOps are principles, not technologies. You can apply the principles across many of your existing and future technologies. 

(From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]

Javeria Kahn (see 11:00 and 18:15) lists out several technologies that your teams probably use already that can get you on the path towards GitOps. For operators, there is Atlantis for Terraform, Salt, Ansible, Puppet, Flux, and ArgoCD, and for app developers, there is Skaffold, Draft, GitKube, Helm, Kustomize, Flux, ArgoCD, and Flagger. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]


## “GitOps” doesn’t require Git

You aren’t constrained to Git. You can use container registries, even ServiceNow and other enterprise configuration management systems. You don’t have to throw out your existing systems.

Hear Cornelia Davis break this down (see 9:57) (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]

Kyle talks about “SheetOps” where, as long as you have version control, you can use something like Google Sheets as a UI for Gitops-types processes. 


## The Future of GitOps



1. **YAML:** The future of GitOps means that you can go beyond YAML with technologies like TypeScript, Python, cdk8s, jkcfg. Find the tool that’s best for the developer and DevOps engineer to describe their configs.
2. **Storing in Git:** You aren’t constrained to Git. You can use container registries, even ServiceNow and other enterprise configuration management systems. You don’t have to throw out your existing systems.
3. **What can you GitOps?:** You can GitOps not just apps, but infrastructure, things that go onto DNS and identity providers, Chaos experiments and Kubernetes Clusters, and more. In fact, you can GitOps all the things!

Hear Cornelia break this down (see 9:57) (From [There's More to GitOps than Meets the Eye ](https://youtu.be/_pdZnVzQIwc)– Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.krjjpx430k8e)]


## The Business value of GitOps

**Scaling the team and meeting CapEx and OpEx needs: **

Vuk Gojnic (29:45) shares that by having the team spend less time on repetitive tasks, they can scale and do more with the same streamlined team. Similarly, with a self-healing platform, that means that the service desk team is dealing with fewer tickets when the system can resolve some of them itself. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Kyle Rockman (see 7:03) says that the way to start scaling a team is not by throwing more people at the needs. Instead, you provide automation and self-service to developers. Kyle’s fairly small team could leverage automation and self-service through GitOps to do less manual work and more innovative work. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Uptime and Reliability:** 

Taylor Dolezal (25:55) shares how uptime is a common go-to shared benefit where leadership and teams can find agreement, so talking about how GitOps improves uptime can be a good starting point. From there, failure rates, SLOs, SLAs, and SLIs can be a place to find common goals and priorities. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)]

Kyle Rockman (see 5:54) says that GitOps brings Speed and Reliability to ship more quickly with confidence. This is because GitOps includes explicit review processes that eliminate human errors. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Automation:** 

Vuk Gojnic (see 16:55) talks about how they have infrastructure that manages itself by using Git as the source of truth. That means that the team no longer acts as admins that manage the infrastructure, but as observers or auditors who only intervene when something goes wrong. That’s the value of GitOps for them. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Kyle Rockman (see 4:40) also shares how the first motivation to look at GitOps was automation. For them, automation would empower the developers to self-service to do what they need to do faster and better. (gaining the **_App team autonomy _**that Cornelia covers in the talk, [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ)). (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Security:**

Maya Kaczorowski shares the 3 ways that GitOps contributes to security, and why security is important for business. The key business metric for security is no data loss, and having an approach like GitOps helps minimize costly human error and breaches and vulnerabilities before they become costly company-wide problems.

GitOps allows what Maya calls “Continuous Security” - the ability to be continuously integrating security at all times. When you have everything “as code” with GitOps, you can make your code as automated and error-free as possible. With GitOps, you push a change to code that’s reviewed, and then you use automation to do the hard stuff of deploying, monitoring, etc. You also have a pipeline where devs only need to focus on developing their apps, and any operations or security control can be automatically verified or enforced as part of that pipeline. Teams have a clear separation of responsibilities. 

So what is GitOps for Security? 

GitOps provides 1) Immutable infrastructure, 2) Single source of truth, and 3) Dev velocity to help you automate security.



1. **Immutable infrastructure:** immutability protects you from making changes and errors. Since deployments are separate from development, you can deploy frequently knowing that if something goes wrong, then you know immediately. 
2. **Single source of truth:** Having a single source of truth means that you have a single process to make changes. You can use Git to manage policies and implement necessary controls to meet your security needs.
3. **Dev velocity:** version control, test automation, and other tooling available with Git allow devs to move faster and securely. With GitOps, you can optimize your mean time to remediate (MTTR) because if an upgrade is susceptible to vulnerabilities, you can quickly deploy a fix without breaking the infrastructure. For instance, users of GitHub’s Dependabot feature receive an automatically triggered PR to update a vulnerable dependency to a known fixed version. Repos that have enabled Dependabot have shown an average MTTR of about 40 days, way lower than many industry metrics that range from 180 days to 2 years. 

GitOps also improves security of the dev pipeline in 3 ways: 



1. **Code:** using Git means that you have a static file for comparing requirements. In YAML it’s pretty easy to check if you’re meeting them. If your access policies are declared in a config file, you know who has access to what and you can verify it in code. 
2. **Changes:** you have versioning so you know what you shipped and can roll back. Your commit history is an audit of comments, reviews, and a history of decisions that were made to your repo. 
3. **Production:** the single source of truth with a single process removes the humans who are error prone. You implement a single set of tests, security scans, and permissions to make these changes securely.

GitOps provide Continuous Security, which will help you with supportability and security. If you want GitOps, discuss these benefits with your security team and how it will make both of your jobs easier. (From [Security and GitOps – Maya Kaczorowski (GitHub)](https://youtu.be/mneDm2ebl-g) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.skgltol7526x)]

Kyle Rockman (see 5:54) says that GitOps creates an audit trail so that you can show the auditors what’s been happening and you can meet PCI compliance requirements. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Transparency and Collaboration:**

Javeria Kahn (see 6:00) shares how GitOps brings transparency to the org primarily from two capabilities: 



1. **Reversibility:** You can do rollbacks and lower mean time to resolving config-based outages with version controlling.
2. **Audit trails:** You can track the history of a repo, its PRs, actions, etc.

Because of these 2 benefits, the teams are able to build <span style="text-decoration:underline;">transparency</span>: there are no more obscure system changes and you become less dependent on individual employees who reach burnout from being on call. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

Javeria (see 7:50) states that GitOps promotes <span style="text-decoration:underline;">collaboration</span> between teams that build and use their resources. Between transparency and collaboration through GitOps, teams are able to improve the entire software development lifecycle. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

**Reduce the risk of relying on single employees:**

Relying on individual employees who live with the pager both raises risk for the company and causes burnout with the employee. Javeria Kahn (see 6:00) states that automation based on GitOps helps employees not get burned out, helps them expand their role, and helps reduce risk for the company with a reliable system. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

**Use metrics from DevOps Research and Assessment (DORA):**

Cornelia Davis (see 3:37) refers to the [reports from DevOps Research and Assessment (DORA](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling)) that show that companies that perform well with profits and growing market share are companies the rank well in these 4 categories: 



1. Deployment frequency 
2. Lead time for changes 
3. Time to restore service 
4. Change failure rate 

Alternatively, companies that don’t rank well show metrics of losing profits and market share. Cornelia outlines the ways in which companies can use GitOps to improve profits and company growth in the 4 categories (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]





![alt_text](/slides/2_GitOps_BizValue_Cornelia_7_State_of_DevOps_Table.png "2_GitOps_BizValue_Cornelia_7_State_of_DevOps_Table")


**1) Metrics impacted by increasing _App team productivity:_**

Cornelia Davis (see 13:17) discusses how improving app team productivity with GitOps helps to reach the first two DORA metrics - increasing deployment frequency and reducing lead time. Giving application teams access to a GitOps-based platform allows application developers and DevOps engineers to use familiar tools and Git-based workflows like pull requests to optimize their efficiency. All of the concerns, beyond the development and testing of application functionality, such as security and compliance, are all baked into the platform (also managed in a GitOps manner). This keeps the application teams from spending time here and furthers their productivity. That is, applying GitOps approaches and using familiar tools makes it possible for app teams to increase their productivity, delivering on metrics that DORA has correlated with high-performing and profitable organizations. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]

**2) Metrics impacted through the realization of _App team autonomy: _**

GitOps allows for app teams to act more autonomously, or otherwise put, it enables a self-service model. App team independence contributes to both decreasing lead time (the amount of time from code complete to production deployment) and increasing deployment frequency.

Cornelia Davis (see 15:40) shows that the “full stack engineer” is an increasingly impossible role to maintain and doesn’t help toward the goal of shortening the lead time for changes. Individuals cannot know every part of the stack fully to be efficient. In fact, there have been known incidents because an engineer didn’t have full knowledge of the stack and made an error that caused outages. GitOps helps the App team be autonomous from other teams, and therefore helps them meet the [DevOps Research and Assessment](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling) (DORA) metrics of shortening the lead time for changes and increasing deployment frequency. With GitOps, the app and platform teams have different responsibilities and areas of expertise. The app team can focus on iteratively building and delivering diGital offerings to the consumer. 

The Platform team is responsible for enabling the app teams, while maintaining security, compliance, resilience, and cost efficiency. With GitOps, the app team manages its own configs for app config values and topology, and the platform team manages its own configs for security and other needs such as compliance configs. The platform team configurations provide a secure, compliant and resilient runtime environment to the app teams, making their deployments enterprise-ready by default. Through this process, they can shorten the lead time for changes and increase deployment frequency, DORA metrics that correlate with high-performing and profitable organizations. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]

Kyle Rockman (see 4:40) underscores the importance of empowering their developers through self-service. With autonomy, the app team developers could do what they need to do faster and better. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**3) Metrics impacted through _Implementation of safety nets:_**

According to DORA, companies that deploy more frequently and have fewer failed deployments are among those that perform well on profitability and growth metrics. GitOps provides the safety nets to improve both of these metrics.

Cornelia (see 20:37) shows that GitOps provides safety nets in at least two key ways. First, since the entire state is captured in that version history, you can deploy more frequently, knowing that you can roll back should something go awry. Another safety net is in the GitOps runtime: Using a project like Weave Flagger lets you do canary deployments and rollbacks both for delivery and in the operational mechanics inside of the runtime environment. 

These two safety nets (that are a part of the GitOps process and platform) support improvements to the DORA metrics by reducing the change failure rate and increasing deployment frequency. These both contribute positively to business outcomes. (From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]

**4) Metrics impacted through _Repeatability_**

The final category that DORA links to company profitability and success is the reduction of mean time to recovery (MTTR). GitOps puts in place systems that deliver on repeatability, which makes it possible to reduce MTTR and the change failure rate.

Cornelia Davis (see 23:50) talks about how repeatability across different environments and across time decreases the change failure rate and mean time to recovery. This is because 



1. we have a declarative specification of the **entire system** and 
2. with synchronization, delivery isn’t the last step in the CI pipeline. 

If you rerun a CI pipeline, you aren’t able to lower the change failure rate in the same way that you can by decoupling the delivery process from the CI process. We want to use an agent to guard from drift, arguably is one of the top ways to hurt MTTR. GitOps helps to guard against drift by continuously synchronizing the desired state stored in Git with what is deployed into Kubernetes.

With GitOps, the entire system is being versioned in Git and the reconcilers ensure that what is deployed matches that desired state. This combination delivers on the [DevOps Research and Assessment](https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling) (DORA) metrics of decreasing the change failure rate and decreasing the MTTR, key metrics for companies high on profitability and growing market share. ([From GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]

Note that another benefit of GitOps-driven repeatability is as a lever for **Cost control.** If developers can trust that a self-serve system will deliver them the environments they need upon request, they are less likely to hang on to systems that are not currently in use. This also allows you to put automation in place to harvest and manage those unused environments.

**5) Availability through _Redundancy_**

Finally, DORA tracks a fifth metric, Availability, which is almost always realized through redundancy, something that GitOps helps provide. 

Cornelia Davis (see 26:10) covers how, through GitOps-based Redundancy, organizations can make consistent deployments to different environments, for example, different data centers, with only slightly different configs - all stored in Git. GitOps makes it possible to scale the deployment process across many things by creating the same process across different systems. 

GitOps provides distinct solutions to the DORA categories so that you can connect these operational and process changes directly to your company’s ability to make profits and gain market share.





![alt_text](/slides/3_GitOps_BizValue_Cornelia_32_GitOps=Cloud_native_Delivery_and_Ops.png "3_GitOps_BizValue_Cornelia_32_GitOps=Cloud_native_Delivery_and_Ops")


(From [GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more!](https://youtu.be/huKH5xhzQwQ) – Cornelia Davis) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.25rg6z50223i)]


## Show Demos to make the GitOps benefits real

**Demo something tangible:**

Kyle Rockman (see 14:48) took a pipeline that took 6 hours and, by using GitOps, demo’d how to shrink it down to a pipeline that one dev could do in 10 minutes. This demo built huge trust in the org and interest in GitOps. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Demos to assuage concerns of major changes:** Dan Brubaker Horst (33:30) hopes to put together demos that show “this is actually more boring than you were expecting.” The “boring” part shows that you are showing tools that are familiar together with approaches and tools that are new. You’re also showing that you’re trying to solve problems for everyone, not trying to do something crazy for no reason. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

**Small Blast Radius:** Taylor Dolezal (see 20:00) talks about the value of starting with a small blast radius, something safe to show the value of GitOps. A common point of resistance is that people sometimes feel that the current infra “works” so why change it? Change is hard and being able to demonstrate change in a safe way will help assuage concerns. As Taylor shares, the people who see the demo might say, “You weren’t trying to do anything crazy! This is actually very helpful.” They will be able to see the benefits of GitOps at work. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

**Bottoms Up Approach:** 

Vuk Gojnic (see 22:40) shares how creating a loud and forceful revolution will just create resentment and resistance. Instead, in some organizational cultures, a bottoms up approach might work. Vuk created small demos and invited a few people to watch and learn. Maybe you get your first fan who sees the value, then another and another. You start to build virtual circles of people until you might have different teams taking small steps to adopt GitOps approaches (maybe one team starts building immutable declarative infrastructure while another team is using config management-based tools). So when detractors notice and ask why the process and tools are different from what they are used to, you have actual working instances to show the value. If the concepts work, you can “take whole organizations by storm in a positive way.” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Vuk Gojnic (see 36:25) later adds that doing a Hello World demo especially with a new and unestablished DevOps team can be a great opportunity to get some interest and traction. Also, providing the demo and leaving the option open for them to try it or return to it later provides an open door without being forceful. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Taylor Dolezal (see 39:15) agrees that, especially if you’re in a large organization, your efforts for change will be likely throwing sand in the ocean. Find small groups and test out how they respond to your position and demo. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)]

Kyle Rockman (see 7:45) shares how, at Under Armour, GitOps started with the goal of automating the infrastructure. Then, over time, as the practice became pervasive and known, they handed over the keys to the engineers. This way, they took small steps with particular teams, gained a level of comfort with GitOps across the various teams, and “leveled up” across the org. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]


## Be empathetic and Work as a team

**People are busy and change is difficult:** 

As Taylor Dolezal (see 20:00) shared, it’s reasonable for people in your teams to say “I don’t understand that. I don’t have the time to learn that.” It isn’t that they don’t get it, but they have a lot on their plate, often have limited resources, and they need an easily digestible way to understand the value. They need to understand that it’s worth carving out the time to learn something new. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Kyle Rockman (see 12:45) gives great advice about how you message your value prop and to use words that are familiar and not challenging. Kyle even re-named Chaos engineering as “resiliency engineering” and renamed the team “the resiliency team.” Using words that are familiar to your stakeholders and are associated with how they are measured will go a long way to minimizing mental friction with the people you are trying to persuade. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Find shared goals, including shared language:** 

See the [Business Value of GitOps](#the-business-value-of-gitops) for great talking points shared by our GitOps Days speakers and community.

Kyle Rockman (see 11:00) emphasizes the importance of working together to make sure that the change makes everyone’s lives easier, not just one group over another. Find the common problems that you’re trying to solve. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Hear concerns and understand the context and culture:** 

Taylor Dolezal (see 20:00) shares the importance of being honest as a team about various concerns and time constraints. Instead of butting heads over agreeing or disagreeing to a change, be aware that 1) people are busy and don’t have time to learn new things all of the time or right away, and 2) maybe they have constraints or information that you don’t know about - so ask more questions and find out more information from the team. 

Work as a team! As Taylor says, “Let’s both dig into that.” Work together to hear each other's constraints and find where you have shared priorities and benefits that you want for the organization. That way, your peers and stakeholders will realize that you weren’t trying to hurt them or force them into an uncomfortable place. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Taylor Dolezal (see 39:15) adds the importance of being an active listener. Really work to listen to their concerns, where they are coming from, and their context. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

**Stakeholders:** 

Javeria Kahn (see 8:40) outlines the key stakeholders that you’ll want to include in the conversations around GitOps. 

For the infrastructure layer, you’ll want to talk with the 



1. SREs, 
2. 2) Infrastructure engineers, and 
3. 3) Management. 

For the app layer (see 18:15), include stakeholders such as the 



1. Developers and the 
2. DevOps/Test Engineers. 

(From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

Dan Brubaker Horst (33:30) resolved to take the people most concerned about change and to make them key stakeholders in the conversation early and for each of the steps in the journey. He also hopes to show through demos that “this is actually more boring than you were expecting.” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

**Make management and onboarding to GitOps is a positive experience for your teams:** 

Taylor Dolezal (see 20:00) and Dan Brubaker Horst (28:10) commented on the value of looking at the human side of change. Aside from GitOps benefits such as deploy frequency, lead time, meantime to restore, change/fail percentage, there’s the need to measure the human elements. Ask yourself: “Is this service easy to manage? Is it easy to get onboarded with GitOps? Is it easy to pull down all of these tools that we’ve set up for the team?” (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Taylor Dolezal (see 39:15) adds that if your team already knows Git, that’s a great starting point because you’re starting with something they already know. Demo how it works with Git instead of jumping into changing pipelines. You might come across as too demanding and not credible. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

**Create solutions for frustrating shifts and slowdowns that happen with change management:**

Kyle Rockman (see 9:20) shares the importance of being empathetic and taking seriously the frustrations and slowdown that come with change. For instance, speed of getting code into production got impacted, so it was imperative for them to troubleshoot and optimize pipeline speed. Similarly, power users got frustrated with giving up manual control that they had optimized until now. They felt that the manual way was quicker. Instead of dismissing this feedback, Kyle's team crafted new solutions and worked together to share knowledge about the new practices. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**Be Prepared:**

Several GitOps Days speakers agreed that there is an upfront investment of needing to study up on GitOps so that you can be prepared with your position and to answer questions. We hope that the resources in this GitOps Conversation Kit (beta) and moving forward will provide you with those necessary resources. 

Also, reach out to us for help (gitops@weave.works). We offer some free and paid options to work with and train your stakeholders and team. 


## Start with Small Steps

**Solve existing business drivers: **

Dan Brubaker Horst (42:20) shared the valuable position that it’s ok to treat GitOps as a viable option no matter where you are in the journey. Understand the business drivers in your organization and find the ways that GitOps can help with those needs. GitOps is not an end goal in itself, but a solution to existing needs. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)]

**Solve pain points:**

Kyle Rockman (see 16:15) talked about how they started by identifying and categorizing pain points that they could start to solve. They used data-driven analysis of what they wanted to improve. Doing this also builds trust because you can start to automate things that are painful or time-consuming, which frees up time for you and others to solve bigger problems. Start with things that you can control and slowly start to build relationships with people outside of your team. Then you can demo what you did. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**_Pain point for Devs: Lower dependence on admins_**

One pain point that Javeria Kahn (see 23:45) mentions for devs is the dependency on admins. If you’re preparing to introduce GitOps to your dev teams, Javeria recommends socializing this benefit to devs because it is likely something they want already. (From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

Use Cases

**On-prem example using Kubernetes:** Javeria Kahn (see 14:50) breaks down their particular use case and tools first for infrastructure:





![alt_text](/slides/4_Practitioner_Highlight_Javeria_IaC_GitOps_in_Practice.png "4_Practitioner_Highlight_Javeria_IaC_GitOps_in_Practice")


And then for the app layer (see 20:30):



![alt_text](/slides/5_Practitioner_Highlight_Javeria_App_GitOps_in_Practice.png "5_Practitioner_Highlight_Javeria_App_GitOps_in_Practice")


(From [GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://youtu.be/HJHLIGL8NfQ)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.vet48adl9vy1)]

**GitOps for Human and other sources:** Carlos Sanchez (see 12:30) shares how we often talk about GitOps for triggers from human beings but changes can come from UIs, APIs, and from human beings (devs, SREs, people on call, etc). At Adobe, they’ve set up a system so that all of these sources end in Git so that they can get a consistent and up-to-date view of the system. They use APIs or messaging queues between the different systems and translate those events into messages. They use a plug-in in Jenkins that helps you run jobs based on messages as well as microservices to do that. They listen to the messages and API calls, and transform them into Git commits. The commit gets applied to the repo, and then the GitOps pipeline runs. So they merge all of these events from different sources, centralize them in a Git repo through this system, and then span out to the pipeline to deploy. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

**GitOps for DNS and CDN:** Carlos Sanchez (see 11:13) shares how, at Adobe, they use GitOps for DNS, which shows how you can GitOps all the things! They have files that define which DNS records they need to create for which users. Those files are stored in Git. Every time there’s a change in Git, that triggers an event and a pipeline. They use templating to transform these DNS configs into docs that the DNS API services can consume. They have the same process for CDN where they have definitions in Git, templating, and Jenkins pipelines to call the CDN provider APIs. That way, they have all the things (apps, infrastructure, DNS, CDN - as well as Grafana and Prometheus configs) all stored in Git and managed by GitOps. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

**Reconciliation is the key to GitOps:** Is it GitOps just infrastructure as code? GitOps brings the CD part to the infra as code through reconciliation. At Adobe, Carlos Sanchez (see 5:58) talks about they want the desired state in Git to automatically be checked against what’s running the services. They use different scripts and Jenkins pipelines that will take that state and call APIs and do whatever is necessary to make sure it gets applied as fast as possible to the production or the environments that need to be updated. They want to reduce the time from dev to prod not only for velocity, but also to catch errors as soon as possible. Together with reconciliation, GitOps 



    1. ADDED TO GCK 7:00 Traceability: Git logs, etc. will create an audit trail. 
    2. 7:20 PRs make it possible to to run tests before things are merged, they can run validations, deploy to different environments to test, etc. 
    3. ADDED TO GCK 7:48 CD: every time I change something on git, I get git commit, git event, this triggers Jenkins pipelines that they use to test and deploy definitions, git pull request, master, and pipelines can do different things. The end result is that these changes get promoted to production and to different environments. 
    4. ADDED TO GCK 8:22 Use case: gitops for apps: apps defined in git, automatically deployed across namespaces. for services and We realized that a push model wouldn’t work at a certain level of <span style="text-decoration:underline;">scale</span>. With the pull model, the pipelines push the git configs somewhere and then from inside the clusters we have services that pull the configs and reapply the changes as needed to the namespaces, k8s eonvironmenst, etc. 
    5. 9:20 they switched to asynchronous ? distributed model. You get more ? You lose some visibility, but you rely on monitoring and alerts. 
    6. 9:45 infra use case: use terraform, cloud providers infra as code offerings (cloudformation, etc). then you make changes to the git repos and deploy and update the infra as needed. 
    7. (From [GitOps at Adobe – Carlos Sanchez (Adobe)](https://youtu.be/CU9AseP_DOI))

**Culture based on stability:** Dan Brubaker Horst (see 33:30) shares how, in a work culture based on job security, there can be general concerns when new approaches, processes, or tools are introduced. Also, their success metrics are not necessarily based on velocity where workflow processes may be scheduled out for weeks. The culture also includes employees whose main role is to maintain legacy systems and to be on call. For these types of use cases, being able to leverage approaches that improve automation and reliability doesn’t mean lower job security. In fact, as Vuk Gojnic shares, it means that the team can scale and do more with existing tools and team members, not lose their jobs. (From [GitOps Days Day 1 Roundtable](https://youtu.be/MHgV_9FNU3s)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.dkpvw5nlaxv2)] 

Kyle Rockman shares similar stories that the team worked to automate themselves out of their current jobs, but onto more improvements because there’s always more to do! (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

**GitOps that started with the infrastructure team:** 

Kyle Rockman (see 7:45) shares how, at Under Armour, GitOps started with the goal of automating the infrastructure. Then, over time, as the practice became pervasive and known, they handed over the keys to the engineers. This way, they took small steps with particular teams, gained a level of comfort with GitOps across the various teams, and “leveled up” across the org. (From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]


## First GitOps steps for your dev and platform teams

**GitOps Hands-On:**

[ ] Try [this GitOps Hands-On](https://eks.handson.flagger.dev/) to get a tangible experience of GitOps and a canary deployment

[ ] [Watch this video](https://youtu.be/TbFu4hG73wg) that walks you through the steps of the GitOps Hands-On

[ ] [This video](https://www.youtube.com/watch?v=WHzxunv4DKk&t=6582s) shows us guiding the audience through the GitOps Hands-On (including troubleshooting). Contact us if you would like us to do this again!

**GitOps Tools:**

Tools mentioned by GitOps Days speakers include:



*   [Ansible](https://www.ansible.com)
*   [ArgoCD](https://argoproj.github.io/argo-cd/)
*   [Atlantis](https://www.runatlantis.io)
*   [Chef](https://www.chef.io)
*   [Draft](https://draft.sh)
*   [FluxCD](https://fluxcd.io)
*   [Flagger](https://flagger.app) (Weave Flagger)
*   [Git](https://git-scm.com)
*   [GitKube](https://gitkube.sh)
*   [Helm](https://helm.sh)
*   [Kubernetes](https://kubernetes.io)
*   [Kustomize](https://kustomize.io)
*   [Jenkins](https://www.jenkins.io)
*   [Jenkins X](https://jenkins-x.io)
*   [Pulumi](https://www.pulumi.com)
*   [Puppet](https://puppet.com)
*   [Salt](http://salt.io)
*   [Skaffold](https://skaffold.dev)
*   [Terraform](https://www.terraform.io)

**Teach YAML to your teams (if that’s what you choose to use to describe your configs):**

Kyle Rockman (see 8:24) shares how, at Under Armour, they use YAML and training up their devs to understand the YAML they are writing has paid spades. Trained team mates help each other out, everybody across the org knows best practices, and they organically continue to learn as new features come out.

(From [GitOps Practitioner Highlight – Under Armour – Kyle Rockman](https://youtu.be/00MCUAgzLQk)) [[notes](https://docs.google.com/document/d/1TYLyole1Gs8p0cJiqefvi0IBSWY39xZF2HVsd3fVmlM/edit#bookmark=id.6p3yfcynnjtt)]

More resources to come!


## GitOps Days 2020 Session Slides

[Welcome! GitOps Today: What is it and why you should care – Alexis Richardson](https://drive.google.com/file/d/1KQ6l4yIsubjyaq8z4WMTQwMrZCPwguhJ/view?usp=sharing)

[There’s More to GitOps than Meets the Eye – Cornelia Davis](https://drive.google.com/file/d/1MJxYN5yhK6w7ijnLlyWlnC_Oi6XraYZV/view?usp=sharing)

[GitOps Practitioner Highlight – Palo Alto Networks – Javeria Khan](https://drive.google.com/file/d/1VVxs4BwoUzyBMnV8vC8cVObQd8KcNZuX/view?usp=sharing)

[GitOps at Adobe – Carlos Sanchez (Adobe)](https://carlossg.github.io/presentations/2020-05_gitopsdays/#/)

[GitOps for Machine Learning Ops – David Aronchick (Microsoft)](https://drive.google.com/file/d/1yoR452m4XsjXgQ3pB94zv9lyu4eHCD-_/view?usp=sharing)

[GitOps for Cost Efficiency, Compliance, Velocity, Security, Resilience, and more! – Cornelia Davis](https://drive.google.com/file/d/11kzZqyhLdAAfquhlH3XVuIBOk2j6INKy/view?usp=sharing)

[Security and GitOps – Maya Kaczorowski (GitHub)](https://github.com/mayakacz/presentation-slides/blob/master/20200520%20-%20GitOps%20Day%202020%20-%20Security%20and%20GitOps.pdf)

[Day 1 Closing Keynote: 2020 is the year of GitOps and Progressive Delivery – James Governor (Redmonk)](https://drive.google.com/file/d/1BF4a598OeRw41yioLUZZIsVeLaTh1l1S/view?usp=sharing)

[GitOps Today and Tomorrow: Conceptual Overview and Technical Deep Dive – Cornelia Davis](https://drive.google.com/file/d/1YMlZLSaevuYoZ6ZjtCbQ0JpkU3L7ZrBi/view?usp=sharing)

Flux and Helm: Intro and How to teach your teams – Stefan Prodan and Leigh Capili (link coming soon)

Flagger and Service Meshes: Intro and How to teach your teams – Stefan Prodan and Leigh Capili (link coming soon)
