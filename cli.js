#!/usr/bin/env node

async function demo() {
    console.info("This is just a proof of concept.\n");
    console.log(
      "Hopefully this could later be run by executing 'npx @shift/tailwind'"
    );
    
    // check for git
    console.log("Checking for git");
    await sleep(300)
    
    // check git branch, save name for later
    console.log("Current branch: main");
    
    // check for clean git working directory
    console.log("Make sure the git working directory is clean");
    await sleep(300)
    
    // offer to make a WIP commit if neccessary
    console.log("offer to make a WIP commit if neccessary")
    await sleep(100)
    console.log("Working directory clean. No wip commit needed.")

    // checkout new shift branch
    console.log("git checkout -b shift")
    await sleep(150)

    // register new shift remote
    console.log("git remote add shift https://laravel-shift.com/TEMP-RAND-UUID-NUMB")
    await sleep(200)

    // push shift branch to shift remote
    console.log("git push shift shift")
    await sleep(2000)

    // trigger selected shift
    console.log("trigger selected shift")
    console.log('curl https://laravel-shift/webhooks/trigger-url')
    await sleep(300)

    // poll server or api endpoint for shift status
    console.log("poll server or api endpoint for shift status")
    await sleep(300)
    console.log('QUEUED')
    await sleep(1000)
    console.log('QUEUED')
    await sleep(1000)
    console.log('QUEUED')
    await sleep(1000)
    console.log('EXECUTING')
    await sleep(1000)
    console.log('EXECUTING')
    await sleep(1000)
    console.log('EXECUTING')
    await sleep(1000)
    console.log('EXECUTING')
    await sleep(1000)
    console.log('FINISHED')

    // once finished, pull down changes
    console.log("git pull shift shift")
    await sleep(2000)

    // list out changes / stats
    console.log("list out changes / stats")
    await sleep(300)

    // echo out shift.md in project root with what would have been github comments
    console.log("echo out shift.md in project root with what would have been github comments")
    await sleep(300)

    // ask about deleting git branch or save to speed up future shifts
    console.log("Removing git repository from shift remote")
    await sleep(1000)
    console.log('git remote remove shift')
    await sleep(150)

    console.log('\n')

    // give command to merge changes into original branch
    console.log("Shift finished. After reviewing changes, run:")
    console.log('git checkout main')
    console.log('git merge shift main')
    console.log('git branch -d shift')
    await sleep(300)

    console.log('\n')

    // look for popular configuration files, ask about checking for useful shifts
    console.log("We found a composer.json file in your project root.")
    console.log('We have an extensive collection of useful PHP shifts.')
    console.log('To see what tasks could be helpful for you, run:')
    console.log('npx @shift/php')

}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

demo()
