# Over: Who Owes What To Whom

## Audience

- Who for: People in groups relying on one another, especially office setting
- What: Native desktop apps (mac, windows, linux)
- Why: People need to know if someone else are awaiting something, request something of others
- So what: Slack, trello, and even github can request or assign people things. But this makes that ultra clear, and across services. Can be sole source of truth.

## Roadmap

### v1

- [x]  Send native notifications
- [ ] Some kind of auth
- [ ] Add user to your team
- [ ] On click of someone else's checkbox, they see native notification
- [ ] Team/user setup for users backend (aws dynamo db?)
- [ ] Decent-looking three checkbox ui per user relationship

### v2

- [ ] BitBucket integration for updating frontend (need lambdas, api gateway)
- [ ] Slack integration

### Fun

- [ ] Dark Mode (mac os)
- [ ] Sign In With Apple (js sdk)
- [ ] Web and/or native mobile (probs via react native or swift ui heh)

## Setup

- Make sure node installed
- VS Code makes syntax highlighting easy for editing

`npm install`

`npm start`

## Tech

- [Electron](https://electronjs.org)

## Credit

- Setup inspired by Steve Kinney's electron course
