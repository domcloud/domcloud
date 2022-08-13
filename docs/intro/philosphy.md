---
title: Our Philosophy
---
# Our Philosoply, And some disclaimer

We want students, teachers, developers with their hobby time make use of our platform for a better experience with putting things online. Personally, the reason I created this because I once struggled to find a host service that's good enough for a university project.

With that said, there are couple drawbacks to our platform:

### 1. Not Scalable

Roughly saying, a system can be defined as *scalable* if it can handle a large number of users, say, hundred thousands of visitor every day; or it's targeted for global launch and visitor wouldn't worry about latency wherever they are.

Honestly, our platform don't solves both problem, because it's monolithic by design. 

We have to admit there are other better cloud providers that gives scalability for free, especially static websites. But for other websites that need a backend code, it's way too complex. 

So far we (the world) have three solutions for scalability (what I know, so far) (Be warned, it's very technical): 

1. **Serverless Functions**. They're small function represents small pieces of code that can be deployed globally using e.g. AWS Lambda. The problem with that, not every framework can be chunked into small functions (e.g. WordPress and Laravel). Some people with brilliant idea might can turn some existing framework to fit into serverless functions, but I think it's complexity outweights the benefits if you don't look for scalability.

2. **Container and Kubernetes**. Kubernetes leverages containers which is about running a server code in an isolated environments. Kubernetes are software managers that clones and kills containers whenever they are needed. With that said, Kubernetes is a bit more complex than serverless functions. Also, you would have to mind the other things to ensure scalability like using Redis instead simple files for cache (e.g. for handling cookie/sessions). You would still have a lot of refactoring to do if the language isn't scalable by default (WordPress still can't do that), but still it's a lot easier than serverless functions.

3. **Use of No-SQL databases**. There are recent trends about GraphQL and NoSQL databases, and they're so scalable you can get rid of writing a backend code (provided with correct RBAC permissions). A popular example for this is when developers create an Android
