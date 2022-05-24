const responseCase = {
  failed: {
    action: "",
    answer: "ตอนนี้ร้านปิดอยู่",
    answer_link: "https://freakstore.xyz/voice/download/close.wav",
    group: "",
    question: "",
    status: "FAILED",
    target: "",
  },
  success_found: {
    action: "goto",
    group: "sunglasses",
    target: "sunglass1,sunglass2",
    question: "อยากได้แว่นกันแดดสีสันสวย ๆ จังเลย",
    answer: "แว่นกันแดดสีน้ำเงินอยู่ที่โซนนี้",
    answer_link: "https://freakstore.xyz/file/voice/download//20220523033416220059273843",
    status: "SUCCESS",
  },
  success_notfound: {
    action: "goto",
    group: "",
    target: "",
    question: "สวัสดีฉันชื่อสีธง",
    answer: "ขอโทษครับ ทางร้านไม่มีแว่นที่สอบถาม กรุณาสอบถามใหม่อีกครั้ง",
    answer_link: "https://freakstore.xyz/file/voice/download//20220523033757220084590298",
    status: "SUCCESS",
  },
  test: {
    action: "goto",
    group: "eyeglasses",
    target: "eyeglass1,eyeglass2",
    question: "แว่นสายตาอยู่ตรงไหน",
    answer: "แว่นสายตาสีทองอยู่ที่โซนนี้",
    answer_link: "https://freakstore.xyz/file/voice/download//20220523033916220573083124",
    status: "SUCCESS",
  },
};
