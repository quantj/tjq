function cvClick(CV) {
    mixpanel.track("Google Doc Click",{
        "Google Doc": cv.type
    })
}
