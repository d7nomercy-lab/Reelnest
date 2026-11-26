// YOUR SETTINGS. This is the only file you need to edit.
// Everything here is public, so never paste a secret key or password into it.
window.SITE = {
  name: "ReelNest",

  // From Supabase (README step 3)
  supabaseUrl: "",   // looks like https://abcdefgh.supabase.co
  supabaseKey: "",   // the PUBLISHABLE (or "anon") key. Never the secret / service_role key.

  // Shown on the privacy page
  contactEmail: "",

  // Ads: leave empty until AdSense approves your site (README step 8)
  adsenseClient: "", // looks like ca-pub-1234567890123456
  adsenseSlot: "",   // looks like 1234567890

  // Add videos by pasting any YouTube link, including Shorts links.
  // short: true puts a video under the "Shorts" button.
  videos: [
    { title: "Coffee Run", type: "Animation", short: true, link: "https://www.youtube.com/watch?v=PVGeM40dABA" },
    { title: "Wing It!", type: "Comedy", short: true, link: "https://www.youtube.com/watch?v=u9lj-c29dxI" },
    { title: "Charge", type: "Action", short: true, link: "https://www.youtube.com/watch?v=UXqq0ZvbOnk" },
    { title: "Spring", type: "Fantasy", link: "https://www.youtube.com/watch?v=WhWc3b3KhnY" },
    { title: "Big Buck Bunny", type: "Animation", link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ" },
    { title: "Sintel", type: "Fantasy", link: "https://www.youtube.com/watch?v=eRsGyueVLvQ" }
  ]
};
