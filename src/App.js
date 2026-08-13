import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "./App.css";

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionAsked, setPermissionAsked] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [pendingSong, setPendingSong] = useState(null);

  const startScanner = () => {
    setCameraActive(true);
    setPermissionAsked(true);
  };

  const handleScan = (results) => {
    if (results?.length > 0) {
      const qrValue = results[0]?.rawValue?.trim();

      if (qrValue && qrValue !== currentSong && qrValue !== pendingSong) {
        setPendingSong(qrValue);
        setCameraActive(false);
      }
    }
  };

  const songs = {
    song1 : "https://open.spotify.com/track/2XbwFs07dfm2MGQuYmRMZT?si=5584cbafcfe143e3",
    song2	: "https://open.spotify.com/track/19tYXOfQFZ7gdGA3LAH76I?si=072ad9cf05b1452e",
    song3	: "https://open.spotify.com/track/6IXANTg9CWP73yEXqTHkBx?si=95633c7ebf844e82",
    song4	: "https://open.spotify.com/track/296O13m9fFkzPKDJh8YJXH?si=329c74fdd7ff4013",
    song5	: "https://open.spotify.com/track/6uGcFXwmr9koh1jbQfl0wd?si=9c4c2b1a23224c83",
    song6	: "https://open.spotify.com/track/2M4tRMcWdKkGeRRwGCkZgw?si=0604f09f9e504238",
    song7	: "https://open.spotify.com/track/6w1SU4cj1wWiIRhxTyynSz?si=243a937ca0f44d2e",
    song8	: "https://open.spotify.com/track/6BBDl1u5W0T8DeNyXJ2G2E?si=a9ad95f2bb5643fe",
    song9	: "https://open.spotify.com/track/4ZIw3JAHPjI57WvWW47lQT?si=4063ae26d9dc4691",
    song10	: "https://open.spotify.com/track/5eNnuKhQMh9jieIYzWutgR?si=148060a0a33947a9",
    song11	: "https://open.spotify.com/track/39dYqOvtXU6K1mfsjQvMzv?si=0617921003af4748",
    song12	: "https://open.spotify.com/track/3MWtsaHhM7tThyvDVGfVIn?si=4e173ab47e934d55",
    song13	: "https://open.spotify.com/track/7EUOjm58DWjYo6YXVjnyKX?si=9e8f07ae634e48fb",
    song14	: "https://open.spotify.com/track/5Olg0sqyi5XGo7lMLNeRAy?si=6f161a402626455a",
    song15	: "https://open.spotify.com/track/2j1mCe3bCFx6wzMh6T90i9?si=48a0846a192e492e",
    song16	: "https://open.spotify.com/track/3h5WExszdvaFDSQoY7g1c9?si=114ecbadf0584cc9",
    song17	: "https://open.spotify.com/track/0WYu233HGAjMAu9UK5iHtS?si=f11156349cfb41a5",
    song18	: "https://open.spotify.com/track/2qfTGzETefwtBWKDThZjnU?si=2cbf2d2e80144852",
    song19	: "https://open.spotify.com/track/0WxeZN41F9tSFRgbChfHeg?si=e1d511998c094fcb",
    song20	: "https://open.spotify.com/track/7112WRQXlBGe4Os43yw8gV?si=bbabba69f5b44071",
    song21	: "https://open.spotify.com/track/3StKzbpR9dRZB8epDx4KDW?si=d7098dace1084bc2",
    song22	: "https://open.spotify.com/track/5NLuC70kZQv8q34QyQa1DP?si=e46c2796f3624a66",
    song23	: "https://open.spotify.com/track/5qxChyzKLEyoPJ5qGrdurN?si=f5ac9dbee2bc418b",
    song24	: "https://open.spotify.com/track/3gKwVWwKmeuFtPubICbOGc?si=74b0cba0231f4dd3",
    song25	: "https://open.spotify.com/track/3a8r3EYOFZB7cT1OkK4zXF?si=cabf73872b3142c5",
    song26	: "https://open.spotify.com/track/6jBCehpNMkwFVF3dz4nLIW?si=f329f6ea5c9545f2",
    song27	: "https://open.spotify.com/track/6LdpVTJzigyi2vbKe8mZAr?si=771f614fc9014207",
    song28	: "https://open.spotify.com/track/6qUEOWqOzu1rLPUPQ1ECpx?si=9054c2cac2814168",
    song29	: "https://open.spotify.com/track/6sT9MWlJManry3EQwf4V80?si=90d73438059749a3",
    song30	: "https://open.spotify.com/track/5TDEIDElkU2hrMnusjPLNu?si=12b4151477534b25",
    song31	: "https://open.spotify.com/track/6JMIaVMbh5emijDiBODgit?si=60a8ad2f6f124b51",
    song32	: "https://open.spotify.com/track/5jkjpSsMOfsxgdGScPZVq2?si=4f8bccfb47224d4e",
    song33	: "https://open.spotify.com/track/5D2lp16FQ0VIfLGRDn5jcG?si=31fdede5c8314f21",
    song34	: "https://open.spotify.com/track/3fatX7w8Wt9nmwGlXZsRFh?si=03028eb90db041be",
    song35	: "https://open.spotify.com/track/0hioWv2FDtVePjHFTwgrf7?si=c10d271d61b04142",
    song36	: "https://open.spotify.com/track/0goVj3eJV1oD5yqXzkjqLA?si=6a161eba3dfc40e9",
    song37	: "https://open.spotify.com/track/0BF84G6iISr1qO6IV9msWs?si=bdc19d0e17814bfe",
    song38	: "https://open.spotify.com/track/0dNiLb9FEHrRK7VFDJctiR?si=d94c2ab2745d4590",
    song39	: "https://open.spotify.com/track/6KIKRz9eSTXdNsGUnomdtW?si=efaade1e2e3a44dc",
    song40	: "https://open.spotify.com/track/5n8Aro6j1bEGIy7Tpo7FV7?si=dd4740eef7a349a0",
    song41	: "https://open.spotify.com/track/1JJ8D0KE144weLOGrjqJrb?si=2adce6e85686441e",
    song42	: "https://open.spotify.com/track/0gFB5H3pHN13ERt2FyMuWi?si=20b7f68b47f24f56",
    song43	: "https://open.spotify.com/track/15HgR9Ht4obJOcMG4wregp?si=a9b81a4479624e0c",
    song44	: "https://open.spotify.com/track/792UwI6utk5DMQUT1KXa5E?si=f8dc4e97432b4fe6",
    song45	: "https://open.spotify.com/track/1yo16b3u0lptm6Cs7lx4AD?si=67c48d5786c642a2",
    song46	: "https://open.spotify.com/track/5YIF6HSOtHN9HdcE5IPzMe?si=3ffcd7084cb24b37",
    song47	: "https://open.spotify.com/track/3m5L4uCetQDx1ck1mCgOro?si=7ce89104d5574de3",
    song48	: "https://open.spotify.com/track/6C7ZgThn6Yan5MTZdAEEFw?si=7abba3a83c9a4449",
    song49	: "https://open.spotify.com/track/1B75hgRqe7A4fwee3g3Wmu?si=a6764f7a4add46a6",
    song50	: "https://open.spotify.com/track/0sbhiygtRahuRj3DXPvtfe?si=95f5d1a01d0d4b76",
    song51	: "https://open.spotify.com/track/4j3sD1EcYquM2ltqNH19ec?si=b51f4291a7d54a1d",
    song52	: "https://open.spotify.com/track/27AHAtAirQapVldIm4c9ZX?si=29557c56b5884491",
    song53	: "https://open.spotify.com/track/1k28sDTLOz942qa3wEtMQE?si=c9405a36422e4687",
    song54	: "https://open.spotify.com/track/5Tbpp3OLLClPJF8t1DmrFD?si=7c0fae7ccde24ae7",
    song55	: "https://open.spotify.com/track/6JymsaWDHk2Yj4e0yNBIFH?si=ebf7ad955ff34385",
    song56	: "https://open.spotify.com/track/2qOm7ukLyHUXWyR4ZWLwxA?si=2fb1a879d9b34827",
    song57	: "https://open.spotify.com/track/1SAkL1mYNJlaqnBQxVZrRl?si=e4c43a0dc28e40bb",
    song58	: "https://open.spotify.com/track/1oTHteQbmJw15rPxPVXUTv?si=1fa6a66fbace44e3",
    song59	: "https://open.spotify.com/track/7q6lr1W6cmGWijl5kCv5RG?si=ed527f3951e0446c",
    song60	: "https://open.spotify.com/track/3Y6XWs8xMlCngyIxNOFnsp?si=c8de0bb0f2a749f4",
    song61	: "https://open.spotify.com/track/1SyQ6t9RdRBK0QUCS6a797?si=eb1889333db34255",
    song62	: "https://open.spotify.com/track/0eO8MW9YSTK3CjdaTYKlhF?si=ef0968aae6e74f40",
    song63	: "https://open.spotify.com/track/119c93MHjrDLJTApCVGpvx?si=6bd7d0e4384e4e16",
    song64	: "https://open.spotify.com/track/3X414ZlCf5U7pcpIaIcUkT?si=aec132adf00748bd",
    song65	: "https://open.spotify.com/track/2CPturRUlpvirYr7VpkXCV?si=39d9a2ee8f5a4c52",
    song66	: "https://open.spotify.com/track/39QBkWKnap8wRSW4WB9OK0?si=be08779e9faf4a3f",
    song67	: "https://open.spotify.com/track/2AP7m2dBb8ULTx4Gc1rdMc?si=6288b9b9d89448d9",
    song68	: "https://open.spotify.com/track/4ESFr6EFK19L20Wfq5hHC2?si=9e291748a7ee4321",
    song69	: "https://open.spotify.com/track/6tDxrq4FxEL2q15y37tXT9?si=e746ecda4cf445fc",
    song70	: "https://open.spotify.com/track/3ia3dJETSOllPsv3LJkE35?si=3ce10a31557a49e1",
    song71	: "https://open.spotify.com/track/1DIXPcTDzTj8ZMHt3PDt8p?si=255fe80b534543a1",
    song72	: "https://open.spotify.com/track/1zrVzG9CFH3TA55cILLGi7?si=ff1b1a7c33ba486e",
    song73	: "https://open.spotify.com/track/4IYKjN1DrYzxKXt0umJqsG?si=0bfd861466aa4367",
    song74	: "https://open.spotify.com/track/6C3yPXYG2NJYlIYVe5J7hv?si=205fe6d442ed4a96",
    song75	: "https://open.spotify.com/track/33ZXjLCpiINn8eQIDYEPTD?si=ab28cad2c4354123",
    song76	: "https://open.spotify.com/track/63BcfK6YAzJYeISaTPr6IO?si=8c043bcc36d84c11",
    song77	: "https://open.spotify.com/track/1ZB2zIoc8AjSuyqKRcJgbO?si=3653918ae00940b9",
    song78	: "https://open.spotify.com/track/6MdqqkQ8sSC0WB4i8PyRuQ?si=3708e24c24214302",
    song79	: "https://open.spotify.com/track/5KSJ9k1FYjFLnIRlJT2wF8?si=cd179339a7964b59",
    song80	: "https://open.spotify.com/track/09WxJCWFMWAxTHBLLelpDS?si=b003b5b0002a483b",
    song81	: "https://open.spotify.com/track/0Q0IVlqMV64kNLlwjPj0Hl?si=d6c7769d0fd2462a",
    song82	: "https://open.spotify.com/track/3vZO25GdYuqFrR1kzZADnp?si=99b85f33a53a4a61",
    song83	: "https://open.spotify.com/track/0U8xg1N9y7haY8V6R1FRUJ?si=36155822699841b7",
    song84	: "https://open.spotify.com/track/2oLwDI8tZUOh6SmTMRRfKs?si=4587b009a01e4c76",
    song85	: "https://open.spotify.com/track/1NHwvBmrUje4L1dxfWnXCH?si=ad6361ae832e4f50",
    song86	: "https://open.spotify.com/track/7hfRrdFJgFKK3cJ4rmkecE?si=7235c5d92bd945f4",
    song87	: "https://open.spotify.com/track/0l3wp8iEtN8rgag9eTeorW?si=69e3ccda2170438c",
    song88	: "https://open.spotify.com/track/2WRzpLD8qDRrxMXc63E5WJ?si=009cfe74e27746a4",
    song89	: "https://open.spotify.com/track/3QHONiXGMGU3z68mQInncF?si=d163f91756484fd2",
    song90	: "https://open.spotify.com/track/0zXdceqoKeIlAIlf3GQdOV?si=ede2946068684cb7",
    song91	: "https://open.spotify.com/track/6Tsu3OsuMz4KEGKbOYd6A0?si=218e542c751d4a4b",
    song92	: "https://open.spotify.com/track/1BKT2I9x4RGKaKqW4up34s?si=93d428dd59dd470b",
    song93	: "https://open.spotify.com/track/5Tl0HJvynZtKdSUMKbFVVX?si=be16c623e41e4926",
    song94	: "https://open.spotify.com/track/6o2g1BJvtYQssH84kBYs7y?si=e235494e0dea4dcd",
    song95	: "https://open.spotify.com/track/0uEp9E98JB5awlA084uaIg?si=033c3f4d31f648c8",
    song96	: "https://open.spotify.com/track/0GUhzFFHTyfTnFePIF7MjL?si=220c2a34a4694303",
    song97	: "https://open.spotify.com/track/3QuT68jh6xsyz169IY1NeG?si=d80b6950745c4ef1",
    song98	: "https://open.spotify.com/track/0shK5iZQppbHPQYiy60xs9?si=d3cb6d88bd2f4877",
    song99	: "https://open.spotify.com/track/3Y4BqG5FGXgGFQaJzX1MQC?si=e8099775ea8440ae",
    song100	: "https://open.spotify.com/track/4LwU4Vp6od3Sb08CsP99GC?si=feacb5fd827e4261",
    song101	: "https://open.spotify.com/track/75IN3CtuZwTHTnZvYM4qnJ?si=41f3a63e02434e32",
    song102	: "https://open.spotify.com/track/39lMIe4qlccsam5GRY4NRn?si=58fc49beaec342db",
    song103	: "https://open.spotify.com/track/3gY6tiCNsuVi6s8kPV6aQg?si=4e5701fd843e402b",
    song104	: "https://open.spotify.com/track/3UmaczJpikHgJFyBTAJVoz?si=e61dd38c2eee49b0",
    song105	: "https://open.spotify.com/track/6XftHdF2uuPZeQE1Bb3pFK?si=096a3240f0914f3e",
    song106	: "https://open.spotify.com/track/5yn8qhQcR5xbEbSOkPMqis?si=af7cc284569044f1",
    song107	: "https://open.spotify.com/track/0Dr8PT0OuEfNeGotnmbid2?si=af8f342582014e37",
    song108	: "https://open.spotify.com/track/0kbQigeFMksFU6nFNPy3Gc?si=40a650f9f70a4359",
    song109	: "https://open.spotify.com/track/4V4KdhN9G7EPpTUpBLmh4n?si=83f148334d434b05",
    song110	: "https://open.spotify.com/track/0I3q5fE6wg7LIfHGngUTnV?si=24e854abbe554568",
    song111	: "https://open.spotify.com/track/31rJpVkGYXJoB2HsGl8CrK?si=69d5325de20b4191",
    song112	: "https://open.spotify.com/track/5efQj1lkGkkm4sxFHfHrLO?si=19c8084fb95448cf",
    song113	: "https://open.spotify.com/track/2kj7OFRtWj9bkm8jqnT2EY?si=fc29dd3d0f314f4d",
    song114	: "https://open.spotify.com/track/503OTo2dSqe7qk76rgsbep?si=731fea692b524a41",
    song115	: "https://open.spotify.com/track/3RmKpob8xzv1pzHEQrMJah?si=42ba35e1366b40c3",
    song116	: "https://open.spotify.com/track/5OKcbAdoHgYdiKctO5KzTz?si=2a84f981f24944f4",
    song117	: "https://open.spotify.com/track/6zsk6uF3MxfIeHPlubKBvR?si=d206364ad615461f",
    song118	: "https://open.spotify.com/track/3QCitoTT205HZyYYGYPord?si=036171766c9141b4",
    song119	: "https://open.spotify.com/track/4UyDvVQyI3tOjkTh1YlcGj?si=47623b06daac4b00",
    song120	: "https://music.youtube.com/watch?v=cbAq3vpbN-M&si=nApI3eUZvDvpe-A5",
    song121	: "https://open.spotify.com/track/2thocIIKCiAS2IxjL9qZaS?si=7404a886e7ae4b08",
    song122	: "https://open.spotify.com/track/2thocIIKCiAS2IxjL9qZaS?si=70ed987bcaeb4794",
    song123	: "https://open.spotify.com/track/4LLnR8BY8q8oxP34To3x7N?si=4bfa786f5e614525",
    song124	: "https://open.spotify.com/track/0r2Bul2NuCViraT2zX1l5j?si=00821d1887ed4208",
    song125	: "https://open.spotify.com/track/04KTF78FFg8sOHC1BADqbY?si=a1e506c3ed26441c",
    song126	: "https://open.spotify.com/track/2AFdisDy349w5Xku6rqtuz?si=164011a7953d4bfe",
    song127	: "https://open.spotify.com/track/55S3T12Y61TjhXh6u25RPh?si=4346ae06d017485d",
    song128	: "https://open.spotify.com/track/5KG25xSzvzEFBB6Okly3zj?si=b1234962dc704c1d",
    song129	: "https://open.spotify.com/track/7iL6o9tox1zgHpKUfh9vuC?si=2f5ce18fdd4b47e8",
    song130	: "https://open.spotify.com/track/5STdMlrBf6pqWiNE7WqxSi?si=4423a3b7906d48e7",
    song131	: "https://open.spotify.com/track/50P5KqvNVU5aF60pA8IDxm?si=c229df2cee784396",
    song132	: "https://open.spotify.com/track/0xmjwnQ3FNE6HuWCt2nHdZ?si=9901e5145c1641dc",
    song133	: "https://open.spotify.com/track/1zzxoZVylsna2BQB65Ppcb?si=4b49f3cadc1f4f75",
    song134	: "https://open.spotify.com/track/45pmh0kZvulXSgg4uJGB1X?si=9400773568664896",
    song135	: "https://open.spotify.com/track/4PmMVdIFpJTB9WQbmILf4p?si=06b1a7944f494cee",
    song136	: "https://open.spotify.com/track/0mSccHjseLReybeLrNBoXj?si=776f1379e1834a33",
    song137	: "https://open.spotify.com/track/6JvG7KVwnfmnXSJW7XMtb6?si=d05771948e85450b",
    song138	: "https://open.spotify.com/track/3AzrNjWhJ6wuLMUAyvOjlq?si=4b1f577e19354ccf",
    song139	: "https://open.spotify.com/track/0YUrjFy4qFKOO5NhM9tYdV?si=0aefbac86f4845f7",
    song140	: "https://open.spotify.com/track/6EiyGCJV3D8HYDZlLS0Fgn?si=90c131a3f6884caf",
    song141	: "https://open.spotify.com/track/7IdFdRlCjUi6kkhbPoRfnw?si=f99a0091db224218",
    song142	: "https://open.spotify.com/track/5SkRLpaGtvYPhw02vZhQQ9?si=1ba904e87ddb4546",
    song143	: "https://open.spotify.com/track/3CSXutf2AXgoSgcA8CDW6I?si=393709e2e73a4a09",
    song144	: "https://open.spotify.com/track/2NBQmPrOEEjA8VbeWOQGxO?si=0b2d8cf43a3740a8",
    song145	: "https://open.spotify.com/track/2Ozc0me9PV5vlt8cokwdvI?si=5b26d191c8bd4fb2",
    song146	: "https://open.spotify.com/track/7lcp45LS7jfC52VM4vpZRY?si=7eaf5daaf7d244bf",
    song147	: "https://open.spotify.com/track/5D2mYZuzcgjpchVY1pmTPh?si=cbed6408fe804a75",
    song148	: "https://open.spotify.com/track/3kZoay4ANo86ehb6s4RwS9?si=2fe190bfe7f240d5",
    song149	: "https://open.spotify.com/track/6ndmKwWqMozN2tcZqzCX4K?si=649c57c5d3bd4a54",
    song150	: "https://open.spotify.com/track/5bTRw958W3Gf95RwXgJ2ql?si=ed64f13ef8714c29",
    song151	: "https://open.spotify.com/track/1PS1QMdUqOal0ai3Gt7sDQ?si=c1a4e2b874d44df3",
    song152	: "https://open.spotify.com/track/2wGSgTmgSF3xjRrHkTc25R?si=d268cd3375d2403d",
    song153	: "https://open.spotify.com/track/0Uc706myy6Th7I6KQ9xA1x?si=5c80e766ac984f01",
    song154	: "https://open.spotify.com/track/7G03S5RQ4g9ANqCtTq25qj?si=ca4a1f2e623f4865",
    song155	: "https://open.spotify.com/track/0ZwOfjlmeA4xWGCTunx9qu?si=1ca3fc458a81405a",
    song156	: "https://open.spotify.com/track/2gam98EZKrF9XuOkU13ApN?si=31b2e21d705c4990",
    song157	: "https://open.spotify.com/track/0mHte7Vo4RxJwbgOJuP2I0?si=fa4ab79679354d98",
    song158	: "https://open.spotify.com/track/3hQCHzkE5oSA3F1xM8bpcM?si=285d856182c14838",
    song159	: "https://open.spotify.com/track/0CAJdthKDdRjB2h8YOguN6?si=429115c8a536400f",
    song160	: "https://open.spotify.com/track/5xqCIoKU4laPClOJg6MBbU?si=cfa78c1c19f44dcf",
    song161	: "https://open.spotify.com/track/6KJaTOC253tX9vPFdQywpf?si=7cb491318da34b9a",
    song162	: "https://open.spotify.com/track/0j2T0R9dR9qdJYsB7ciXhf?si=d0b891a780fd4d64",
    song163	: "https://open.spotify.com/track/5TRPicyLGbAF2LGBFbHGvO?si=cca287e095cd4864",
    song164	: "https://open.spotify.com/track/4iz9lGMjU1lXS51oPmUmTe?si=8e6588d1eed64799",
    song165	: "https://open.spotify.com/track/6j6C7qC79JWjBqQ0jMji1P?si=fe4147a7dc9245c1",
    song166	: "https://open.spotify.com/track/6qLLTa89kvhwZyM1bSa3W3?si=9aff83d896844491",
    song167	: "https://open.spotify.com/track/3wRpnat6y5ZG1JfPCYgYE3?si=d4ef80b330aa4dd4",
    song168	: "https://open.spotify.com/track/66TRwr5uJwPt15mfFkzhbi?si=387083ddd3954ee2",
    song169	: "https://open.spotify.com/track/4E32UImHJxNgoexDV141vy?si=47a56a65c6bc4b63",
    song170	: "https://open.spotify.com/track/5JXvuagSlyUIAb3qzLdA6F?si=1c3e387ffdd84dda",
    song171	: "https://open.spotify.com/track/48ZtB7USQ7lFc1u5ewgt0s?si=2af35aa3378b40ec",
    song172	: "https://open.spotify.com/track/0CAfXk7DXMnon4gLudAp7J?si=866e2c50e17d4861",
    song173	: "https://open.spotify.com/track/36JWGQRW85mJYLXvnryEzL?si=74ca5ef845474e32",
    song174	: "https://open.spotify.com/track/3uqinR4FCjLv28bkrTdNX5?si=6a5bdec368484d65",
    song175	: "https://open.spotify.com/track/5jnxxpX2834SB6LJ0S73Uz?si=6cda499a2bbb4177",
    song176	: "https://open.spotify.com/track/2q4rjDy9WhaN3o9MvDbO21?si=8337ab7636394ca6",
    song177	: "https://open.spotify.com/track/5UsLjwBaTHBX4ektWIr4XX?si=98d295c67b02439c",
    song178	: "https://open.spotify.com/track/7aQViYYpIkpJwyCHPysCo4?si=ee4498022e2f481f",
    song179	: "https://open.spotify.com/track/6m6Y0gXCCUCIbfM3PHDjqm?si=748ee4e8c9df4a2c",
    song180	: "https://open.spotify.com/track/2igwFfvr1OAGX9SKDCPBwO?si=0f1d26545e85448f",
    song181	: "https://open.spotify.com/track/7LR85XLWw2yXqKBSI5brbG?si=33d4719e1c374829",
    song182	: "https://open.spotify.com/track/4kTLpAbhuEGHAAdDjOIWaa?si=eebc159507da42c9",
    song183	: "https://open.spotify.com/track/6fhOFNHDAMwvlXni5Tc2Ty?si=28ece3e0d07d4c5d",
    song184	: "https://open.spotify.com/track/6ZhheVf7Moc8fqFx1NTVZa?si=fb5b70f0213d4ba0",
    song185	: "https://open.spotify.com/track/6lV2MSQmRIkycDScNtrBXO?si=cdba599ab43c405c",
    song186	: "https://open.spotify.com/track/1EoHEkVcysf4WVDx6r9WzQ?si=c551ee2dbcaa4097",
    song187	: "https://open.spotify.com/track/15JINEqzVMv3SvJTAXAKED?si=795397a0bae64f4d",
    song188	: "https://open.spotify.com/track/2gZUPNdnz5Y45eiGxpHGSc?si=effb466b59a24ac5",
    song189	: "https://open.spotify.com/track/3hlksXnvbKogFdPbpO9vel?si=6381eefbdc3347a3",
    song190	: "https://open.spotify.com/track/5A6OHHy73AR5tLxgTc98zz?si=3e3e3b8466f14c29",
    song191	: "https://open.spotify.com/track/6LxSe8YmdPxy095Ux6znaQ?si=8cab43c471f6456a",
    song192	: "https://open.spotify.com/track/2wAJTrFhCnQyNSD3oUgTZO?si=31c8d4a599994a02",
    song193	: "https://open.spotify.com/track/1auxYwYrFRqZP7t3s7w4um?si=1b81affcebbd4f80",
    song194	: "https://open.spotify.com/track/3eBgBKYv51v1ASEWQxv0r0?si=24e97034bf7d4c71",
    song195	: "https://open.spotify.com/track/3bidbhpOYeV4knp8AIu8Xn?si=845d32e06f244a9c",
    song196	: "https://open.spotify.com/track/4Na9InHOL0Ym1aLrXpZYAB?si=5f16036594e644cd",
    song197	: "https://open.spotify.com/track/7lpwixf9ErlvKPkqWzg2ef?si=ff258888a227456e",
    song198	: "https://open.spotify.com/track/7rJFQcpf1vmiBHaVaIFbc8?si=7cd65210af9340bc",
    song199	: "https://open.spotify.com/track/5HQVUIKwCEXpe7JIHyY734?si=7435ed087f8e46ac",
    song200	: "https://open.spotify.com/track/4GA5H2mwI3DLVYGWrZoA8a?si=d1be7c9f8e5c440a",
    song201	: "https://open.spotify.com/track/5EHopDhispvQBWMZiZHawO?si=1267a337628d4316",
    song202	: "https://open.spotify.com/track/1h6kgem1ai8vUgO1rZOwfB?si=cf83e37d9a1c4e62",
    song203	: "https://open.spotify.com/track/4GUj75a8erBP0lPIGOm7eI?si=4805bd5b44544d8e",
    song204	: "https://open.spotify.com/track/74tLlkN3rgVzRqQJgPfink?si=54e1e67ea3eb45d7",
    song205	: "https://open.spotify.com/track/1CmUZGtH29Kx36C1Hleqlz?si=400ecdd8f9ae4bae",
    song206	: "https://open.spotify.com/track/1wbgYMkEw7jKLKm1zipIWE?si=4671b4c49f5844be",
    song207	: "https://www.dropbox.com/scl/fi/w8nuwsl4f5dn6oco2c0u0/song207.mp3?rlkey=8bvl8fxajn2n8qfhfviqde0pv&st=ped8knvn&dl=0",
    song208	: "https://open.spotify.com/track/4n3W78ruvzon6OT1beHa94?si=24767fa4fc9f4535",
    song209	: "https://open.spotify.com/track/48RrDBpOSSl1aLVCalGl5C?si=debfd1a8e220448d",
    song210	: "https://open.spotify.com/playlist/3ksJv4W7ELCTdVgVsseTdM?si=3b9e8ceeb2444d84",
    song211	: "https://open.spotify.com/track/0VdpkajEaO65VChSspVV3n?si=ae270cc24487451c",
    song212	: "https://open.spotify.com/track/3SnLc0bQjQeE3HgGdNfb8u?si=ffb57f4217594092",
    song213	: "https://open.spotify.com/album/5r7L8DlTsIKoDwSSiRf5M7?si=174ce74ea3704670",
    song214	: "https://open.spotify.com/track/3z7q0YqcLNPFfjDP5gICfl?si=b6914917bea64b49",
    song215	: "https://open.spotify.com/track/39z2CyYexbcwgD0pEeUUeu?si=ed4d90e774db455f",
    song216	: "https://open.spotify.com/track/19OHDib8Jrqi3o2nm5lzdA?si=f71cc289c91c49bb",
    song217	: "https://open.spotify.com/track/7vQ8hT2jlA6RhxI4ZxISVd?si=d892e293afe64635",
    song218	: "https://open.spotify.com/track/4qo0aBXSAj5WaXzpKzcXWj?si=7dbf9621c74a4ee5",
    song219	: "https://open.spotify.com/track/2d8JP84HNLKhmd6IYOoupQ?si=362d1d3fa977412d",
    song220	: "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr?si=92c9809ad82a4975",
    song221	: "https://open.spotify.com/track/6rp6vpDBJHE4gKucl8V1w2?si=3ac9f62f65554ff1",
    song222	: "https://open.spotify.com/track/7MxhozN5rGbhF1aVQ77Aez?si=5989207ed41f4716",
    song223	: "https://open.spotify.com/track/0QvuuB9wrzuYKNPRwDy4Fc?si=2b097fe62ad54964",
    song224	: "https://open.spotify.com/track/4EyuCq59ky4uPSNrKNhIfc?si=37452ed59ab24d50",
    song225	: "https://open.spotify.com/track/4FIeAslReG7Dc006Yx1QSv?si=f305ea79b81844c5",
    song226	: "https://open.spotify.com/track/2suwSYLlZX1sSG9hkM1W2k?si=25f4b71d35564b72",
    song227	: "https://open.spotify.com/track/2N3U8uTYhjX2KwGT0pf5x0?si=ffd990de06c34c4d",
    song228	: "https://open.spotify.com/track/7IWkFDmRwbL7lQHG7ZqVhl?si=d2c902f03a574367",
    song229	: "https://open.spotify.com/track/0wwPcA6wtMf6HUMpIRdeP7?si=ad95c8aec45b4d30",
    song230	: "https://open.spotify.com/track/2AKgZcaUTLk9N3I2mWi1W7?si=33a9438fae2041c9",
    song231	: "https://open.spotify.com/track/1WbhIxkn5ECsOwUm795iX1?si=ca35e85fc38243e0",
    song232	: "https://open.spotify.com/track/2JzZzZUQj3Qff7wapcbKjc?si=ff2f0b653b6e4004",
    song233	: "https://open.spotify.com/track/1jk9c0gZI0wbn5GvAj7PBV?si=ca00a3fd74b0492d",
    song234	: "https://open.spotify.com/track/02BSceG1zbvgqosoZKSLUH?si=f8931f4ff0414f2b",
    song235	: "https://open.spotify.com/track/3QHvjVkSpK7ctujmbETfQD?si=e7d745c693dc4308",
    song236	: "https://open.spotify.com/track/432hUIl3ISDeytYW5XBQ5h?si=aab73b242f534265",
    song237	: "https://open.spotify.com/track/5GEy4S1cDKWAi06eKAumrq?si=ac9f05a09b384831",
    song238	: "https://open.spotify.com/track/64JJameUDNQHV9P3MYvRAC?si=5496e4c9ab9f456d",
    song239	: "https://open.spotify.com/track/4dASQiO1Eoo3RJvt74FtXB?si=354aea6d385c4a31",
    song240	: "https://open.spotify.com/track/6mapJIPnQ23RTAevUoE0DL?si=35cd54d7aa544051",
    song241	: "https://open.spotify.com/track/6fujklziTHa8uoM5OQSfIo?si=00f15c79d380461a",
    song242	: "https://open.spotify.com/track/4Xxkvj5cn8MMGYgrjYRnLr?si=bfe14a11630440c8",
    song243	: "https://open.spotify.com/track/0UKzG4fJ1LXf6DInew5vcV?si=9e1afeee12d7439d",
    song244	: "https://open.spotify.com/track/4VXIryQMWpIdGgYR4TrjT1?si=35fb9964aa98461d",
    song245	: "https://open.spotify.com/track/285pBltuF7vW8TeWk8hdRR?si=fdae37712d0a4758",
    song246	: "https://open.spotify.com/track/5BbdKBZO0TH0GhfxUfyhL9?si=d1b968ab18ae4be4",
    song247	: "https://open.spotify.com/track/7GX5flRQZVHRAGd6B4TmDO?si=0dc271ff3bd64004",
    song248	: "https://open.spotify.com/track/1Si44I1mrFkOWlL6u9ynr6?si=89dd68f569e74e95",
    song249	: "https://open.spotify.com/track/5tz69p7tJuGPeMGwNTxYuV?si=4347c2724ca0412e",
    song250	: "https://open.spotify.com/track/2cYqizR4lgvp4Qu6IQ3qGN?si=6a1d20920eb84467",
    song251	: "https://open.spotify.com/track/4wLrbJ1htsfm0Lxw3GcGFs?si=98a8b4e2886c4976",
    song252	: "https://open.spotify.com/track/7ycWLEP1GsNjVvcjawXz3z?si=1c588b7b55f74779",
    song253	: "https://open.spotify.com/track/1MAr45u6qAW8gtcguHJXh7?si=b9a182c6544f4b8a",
    song254	: "https://open.spotify.com/track/0sVcnEo2jnUnr3p7uVDZ9o?si=0b4e2b30e3de4a9c",
    song255	: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn?si=c1d9eb87670d4781",
    song256	: "https://open.spotify.com/track/58q2HKrzhC3ozto2nDdN4z?si=3f4ed0f260714de4",
    song257	: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?si=71d1802f2eb8444a",
    song258	: "https://open.spotify.com/track/7gPbVDk8Es7AVHTLUFq6CU?si=4687655479bc4aba",
    song259	: "https://open.spotify.com/track/5ZIjNCJF9bq37JnOY9oibd?si=4b340f1ba86641c6",
    song260	: "https://open.spotify.com/track/4KW66ZVoSyUN0TJXdL9mLc?si=89223049f1c34249",
    song261	: "https://open.spotify.com/track/4ea9w8c4ROqiZpJVhfBA3m?si=58eb801586f94946",
    song262	: "https://open.spotify.com/track/2YpeDb67231RjR0MgVLzsG?si=4245453743e1478b",
    song263	: "https://open.spotify.com/track/1lOe9qE0vR9zwWQAOk6CoO?si=0f432802c18845c1",
    song264	: "https://open.spotify.com/track/2Ec33AVlkTTq8BHFgBTdQs?si=9e9f01e49ed548b4",
    song265	: "https://open.spotify.com/track/3kxuICHQQhsHBz2UBNmVvg?si=b129bf813a184bef",
    song266	: "https://open.spotify.com/track/6uFn47ACjqYkc0jADwEdj1?si=297ff161fc95430e",
    song267	: "https://open.spotify.com/playlist/1RZtQ7mAtkWYSQywFr2So3?si=6ea8c8741c954fcc",
    song268	: "https://open.spotify.com/track/4pzRQIRRHXYsAryBKXALCF?si=ef1a60ab503d470e",
    song269	: "https://open.spotify.com/track/0Unw8vKOZA6QBAad4I1tLi?si=e679f227dd9d466a",
    song270	: "https://open.spotify.com/track/4jPy3l0RUwlUI9T5XHBW2m?si=e5b26f548af741f4",
    song271	: "https://open.spotify.com/track/7G0TCyhGGG10LvsuICyFR4?si=7d0403c0422145fc",
    song272	: "https://open.spotify.com/track/1p0rEzrK7YtdRZVtiyV7RN?si=45de440a303a4cf6",
    song273	: "https://open.spotify.com/track/4pRmXzB5gkQXkfEOLfwJQx?si=6e9fa30af3214fe7",
    song274	: "https://open.spotify.com/track/3AMJuDR0HOkgAtUw38JkA1?si=608334db80ae4df9",
    song275	: "https://open.spotify.com/track/3QoEOJppmERW3SqQ2GRbBE?si=2fdb2b0a56dc47ca",
    song276	: "https://open.spotify.com/track/5kBKh3o9l9OQoAOKbNFR99?si=854e5f589e9846f7",
    song277	: "https://open.spotify.com/track/1fun4Ar7ZKTAWIWD8YNt5u?si=4c252fa2395d44cd",
    song278	: "https://open.spotify.com/track/6mP31FqR4ZJzyrb4wVYuM5?si=a2899eb27e014325",
    song279	: "https://open.spotify.com/track/2lpUjoxvJ86dhW7NBzPiWR?si=cd45274be28f4172",
    song280	: "https://open.spotify.com/track/1mAey8kEPmDM2icL56kS9d?si=39d78982e93d4b78",
    song281	: "https://open.spotify.com/track/2S13g8BhBuFzkGpwDw1ONM?si=0c4feb5e1f50457b",
    song282	: "https://open.spotify.com/track/1EadA1DAlmJUBEhvHSmzTO?si=9547c1486fdd43b1",
    song283	: "https://open.spotify.com/track/27NovPIUIRrOZoCHxABJwK?si=9f50b327838049ae",
    song284	: "https://open.spotify.com/track/6dzTsFd9ofSaabQficc92F?si=1158346e84404432",
    song285	: "https://open.spotify.com/track/3j1OSSw6PvlfI5BF2dvEvm?si=121ba8c4be8a41e5",
    song286	: "https://open.spotify.com/track/18vXApRmJSgQ6wG2ll9AOg?si=22b4807d5c564f8a",
    song287	: "https://open.spotify.com/track/5bQFAKQF1mhcPPThw97kjw?si=82a655ab724b44a5",
    song288	: "https://open.spotify.com/track/6uvMKqNlrSvcC4NaKnrwjZ?si=75f257ec71d54418",
    song289	: "https://open.spotify.com/track/3LtpKP5abr2qqjunvjlX5i?si=9bb472fc6e544abe",
    song290	: "https://open.spotify.com/track/1bDbXMyjaUIooNwFE9wn0N?si=7154ec68a9a340d2",
    song291	: "https://open.spotify.com/track/4huBDGP4I3S0pYI0EaRN1c?si=b4efcd7e08c2445c",
    song292	: "https://open.spotify.com/track/0WNfQxDGaPTl0yogcMR5v1?si=24aba5a435644586",
    song293	: "https://open.spotify.com/track/7jCy1opEtV4a0TnKrtsSdo?si=55e53927016a40d3",
    song294	: "https://open.spotify.com/track/74loibzxXRL875X20kenvk?si=a244bb3aa0384df9",
    song295	: "https://open.spotify.com/track/3yEHNTreqh59UTvirrfj3c?si=6a1dfa28f7a442e9",
    song296	: "https://open.spotify.com/track/1kuhnhugcuXf4CiNdqCRUU?si=c44164f9c5e44e2f",
    song297	: "https://open.spotify.com/track/2IGMVunIBsBLtEQyoI1Mu7?si=e3e93d7638884f3d",
    song298	: "https://open.spotify.com/track/0uMGNtHfBCJ1yU3valobsB?si=354652139bbf4e62",
    song299	: "https://open.spotify.com/track/4rXLjWdF2ZZpXCVTfWcshS?si=15fbba50089c4816",
    song300	: "https://open.spotify.com/track/6H2LrVIZQnhNvPakAMrgDp?si=bdc9c2274d164898",
    song301	: "https://open.spotify.com/track/6tARtPlcilM1u4tbAWgato?si=79f64bcef9f34176",
    song302	: "https://open.spotify.com/track/6AQbmUe0Qwf5PZnt4HmTXv?si=cfc4178bc05d4bfb",
    song303	: "https://open.spotify.com/track/0asN0bZ2SHYVNXLtNs6mXK?si=f3d92399d4204bc4",
    song304	: "https://open.spotify.com/track/52eIcoLUM25zbQupAZYoFh?si=74a2b5d306f047a8",
    song305	: "https://open.spotify.com/track/2dKkVF2m160z0RNDN2dddc?si=17684219393e494a ",
    song306	: "https://open.spotify.com/track/1jKXjxMWlq4BhH6f9GtZbu?si=16d5c62ef73a4dba",
    song307	: "https://open.spotify.com/track/1442AzoMWdzX14s6mD5BqF?si=36bb50022f4a4b5e",
    song308	: "https://open.spotify.com/track/2ZuMOcabaMzyXPPjFoYQGe?si=741181812b4741aa",
    song309	: "https://open.spotify.com/track/28drn6tQo95MRvO0jQEo5C?si=512308844b2b4b44",
    song310	: "https://open.spotify.com/track/722NAIXkI6WRNvu9O7JkdH?si=55554e0a44454c9a",
    song311	: "https://open.spotify.com/track/5QOdYa6XQMdIm6fMYhjHQk?si=c1562fdd2c9b4228",
    song312	: "https://open.spotify.com/track/6epWbDEEEOakzBeyNr69MO?si=2fb0588dde2d428b",
    song313	: "https://open.spotify.com/track/0YThXX1dqUpYBLyJNAsF9N?si=afdb74e9ba724b35",
    song314	: "https://open.spotify.com/track/4JxgNwic9PMF1c87TKWZOr?si=5995b76b14a94316",
    song315	: "https://open.spotify.com/track/3p65URLNKVQ7esO9QJtSZj?si=c93027366caa4689",
    song316	: "https://open.spotify.com/track/3HiCAjMaPfM4vnbhLhADBp?si=48b74bb65099406e",
    song317	: "https://open.spotify.com/track/5tCxCYuFA57AhVtHqxP7kr?si=264ebecebde642ba",
    song318	: "https://open.spotify.com/track/4WU8ZRMoonGLw00lXLOvpY?si=3711e9a6fad343f7",
    song319	: "https://open.spotify.com/track/7hrsyjqoTszcpK5bJzeLP3?si=150a793effc74003",
    song320	: "https://open.spotify.com/track/6EifQP3TYilOa16wDKFyqR?si=9eb2f850d07d4c96",
    song321	: "https://open.spotify.com/track/1AXsHbdIYx2OyKmdOcIL5T?si=9fb0febac3f64d05",
    song322	: "https://open.spotify.com/track/7x7ob9alY5LHchLru0ohSK?si=f251add5440a4b2e",
    song323	: "https://open.spotify.com/track/5OoRgwQhV6BSkYGFsWPkxp?si=439907ed6a4e4620",
  };

  
  const getSpotifyId = (url) => {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  const playSong = (songName) => {
    const url = songs[songName];

    if (!url) {
      alert("Nie znaleziono piosenki");
      return;
    }

    const id = getSpotifyId(url);

    if (!id) {
      alert("Błędny link Spotify");
      return;
    }

    const appLink = `spotify:track:${id}`;
    const webLink = url;

  
    window.location.href = appLink;

    setTimeout(() => {
      window.location.href = webLink;
    }, 1200);

    setCurrentSong(songName);
    setPendingSong(null);
  };

  const startPlaying = () => {
    if (pendingSong) {
      playSong(pendingSong);
    }
  };

  const stopAndReturn = () => {
    setCurrentSong(null);
    setPendingSong(null);
    setCameraActive(true);
  };

  return (
    <div className="App cwel">
      <header className="App-header">

        {!permissionAsked && (
          <div className="start-screen">
            <div className="start-btn-container">
              <button onClick={startScanner} className="start-btn">

              </button>
            </div>
          </div>
        )}

        {permissionAsked && !currentSong && !pendingSong && cameraActive && (
          <div className="scanner-box">
            <Scanner
              sound={false}
              onScan={handleScan}
              styles={{
                container: { width: "100%", maxWidth: "400px" },
                video: { borderRadius: "12px" },
              }}
            />
          </div>
        )}

        {(pendingSong || currentSong) && (
          <div className="player-screen">
            <h2>{currentSong ? "Teraz gra:" : "Znaleziona piosenka:"}</h2>

            <h3
              style={{
                wordBreak: "break-all",
                margin: "20px 0",
                fontSize: "1.6em",
              }}
            >
              {pendingSong || currentSong}
            </h3>

            {pendingSong && (
              <button className="big-play-btn" onClick={startPlaying}>
                ▶ Odtwórz
              </button>
            )}

            {currentSong && (
              <button className="stop-btn" onClick={stopAndReturn}>
                Stop i wróć do skanera
              </button>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;