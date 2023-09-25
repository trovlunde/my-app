import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Logo.css";

export default function Logo() {
  const [draw1, setDraw1Index] = useState(0);
  const [draw2, setDraw2Index] = useState(0);

  return (
    <div className="example">
      <p className="label">Logo</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.g>
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            x="0.5"
            y="1"
            width="5"
            height="5"
            fill="red"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
          ></motion.rect>
          {draw2 && (
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              x1="13.25"
              y1="13.5"
              x2="8.25"
              y2="13.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
            >
              {"setDraw1Index(0)"}
            </motion.line>
          )}
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            x1="8.25"
            y1="8.5"
            x2="13.25"
            y2="8.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
          ></motion.line>
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            x1="8.25"
            y1="11"
            x2="13.25"
            y2="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></motion.line>
          <motion.polygon
            initial={{ pathLength: 0, strokeDasharray: 100 }}
            animate={{ pathLength: 1, rotate: 90, x: 10 }}
            transition={{
              duration: 2,
              type: "spring",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
            points="13.5 6 8 6 10.75 0.5 13.5 6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
          ></motion.polygon>
          <motion.circle
            initial={{ strokeWidth: 0.1, strokeDasharray: 1 }}
            animate={{
              pathLength: [0.5, 1, 0],
              rotate: [360, 0, 180],
              strokeDasharray: ["1000, 10, 1"],
              strokeWidth: [1, 0.1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            cx="3"
            cy="11"
            r="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
          ></motion.circle>
        </motion.g>
      </svg>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="GPattern"
            x="10"
            y="10"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <animateTransform
              attributeType="xml"
              attributeName="patternTransform"
              type="rotate"
              from="35"
              to="395"
              begin="0"
              dur="60s"
              repeatCount="indefinite"
            />
            <circle cx="10" cy="10" r="10" stroke="none" fill="red" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="200" height="200" fill="url(#GPattern)" />
      </svg>
      <svg>
        <clipPath id="logo">
          <path
            d="M 40,50
                  C 110,55 195,60, 265,55
                  C 290,55 290,85 265,85
                  C 195,85 110,85 40,100
                  C 0,100 0,50 40,50 Z"
          />
        </clipPath>

        <path
          className="pen"
          d="M 10,75 L 290,75"
          stroke="red"
          strokeWidth="50"
          clipPath="url(#logo)"
        />
      </svg>
      https://stackoverflow.com/questions/37779906/how-to-animate-handwriting-text-on-the-web-page-using-svg
      <svg
        id="ps4"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="900px"
        viewBox="0 0 600 318"
        enableBackground="new 0 0 600 318"
        xmlSpace="preserve"
      >
        <path
          className="map animate"
          d="M5.831,7.433C9.023,6.9,13.355,6.444,18.599,6.444c6.537,0,11.325,1.521,14.365,4.256
          c2.736,2.432,4.484,6.156,4.484,10.792c0,4.712-1.368,8.361-3.952,11.021C30,36.238,24.3,38.138,17.991,38.138
          c-2.128,0-4.104-0.152-5.472-0.38v20.293H5.831V7.433z M12.519,32.362c1.064,0.304,3.268,0.456,5.472,0.456
          c7.98,0,12.845-3.952,12.845-10.944c0-6.917-4.788-10.185-12.084-10.185c-2.964,0-5.092,0.228-6.232,0.456V32.362z"
        />
        <path
          className="map animate"
          d="M46.263,7.509c3.42-0.684,8.208-1.064,12.769-1.064c7.068,0,11.629,1.292,14.821,4.18c2.508,2.28,4.028,5.776,4.028,9.729
          c0,6.765-4.256,11.249-9.652,13.073v0.152c3.952,1.444,6.308,5.168,7.524,10.413c1.672,7.22,2.888,12.084,3.952,14.061h-6.84
          c-0.836-1.444-1.976-5.853-3.42-12.237c-1.52-6.992-4.256-9.729-10.26-9.957h-6.232v22.193h-6.688V7.509z M52.951,30.842h6.764
          c7.068,0,11.553-3.876,11.553-9.729c0-6.688-4.788-9.5-11.781-9.577c-3.268,0-5.472,0.304-6.536,0.608V30.842z"
        />
        <path
          className="map animate"
          d="M93.838,6.825v51.227H87.15V6.825H93.838z"
        />
        <path
          className="map animate"
          d="M148.636,35.554c-0.456-7.068-0.912-15.733-0.836-22.042h-0.228c-1.748,5.929-4.028,12.845-6.536,19.685l-8.893,24.549
          h-5.244l-8.133-24.397c-2.508-7.221-4.484-13.833-5.852-19.837h-0.228c-0.228,6.309-0.456,14.821-0.988,22.573l-1.368,21.965
          h-6.309l3.572-51.227h8.437l8.74,24.853c2.128,6.156,3.8,12.237,5.092,17.557h0.228c1.292-5.168,3.116-11.173,5.472-17.633
          l9.121-24.777h8.437l3.192,51.227h-6.537L148.636,35.554z"
        />
        <path
          className="map animate"
          d="M174.018,41.938l-5.244,16.113h-6.917l17.481-51.227h7.905l17.481,51.227h-7.068l-5.473-16.113H174.018z M190.814,36.77
          l-5.016-14.745c-1.14-3.344-1.9-6.384-2.66-9.349h-0.228c-0.684,3.04-1.52,6.156-2.508,9.272l-5.017,14.821H190.814z"
        />
        <path
          className="map animate"
          d="M228.357,58.051V6.825h7.373l16.341,25.841c3.724,6.08,6.764,11.477,9.196,16.721l0.152-0.076
          c-0.608-6.841-0.76-13.073-0.76-20.978V6.825h6.232v51.227h-6.688l-16.265-25.993c-3.572-5.701-6.993-11.553-9.577-17.101
          l-0.228,0.076c0.38,6.46,0.532,12.617,0.532,21.129v21.889H228.357z"
        />
        <path
          className="map animate"
          d="M304.89,34.034h-19.837v18.545h22.193v5.472h-28.882V6.825h27.741v5.472h-21.053v16.265h19.837V34.034z"
        />
        <path
          className="map animate"
          d="M354.746,55.771c-2.965,1.064-8.816,2.813-15.733,2.813c-7.752,0-14.137-1.976-19.152-6.765
          c-4.408-4.256-7.145-11.097-7.145-19.077c0.076-15.201,10.564-26.449,27.741-26.449c5.929,0,10.641,1.368,12.769,2.356
          l-1.596,5.396c-2.736-1.216-6.156-2.204-11.325-2.204c-12.464,0-20.597,7.752-20.597,20.597c0,12.997,7.752,20.673,19.761,20.673
          c4.333,0,7.297-0.608,8.816-1.368V36.466h-10.412v-5.32h16.873V55.771z"
        />
        <path
          className="map animate"
          d="M373.136,41.938l-5.244,16.113h-6.916l17.48-51.227h7.904l17.481,51.227h-7.068l-5.473-16.113H373.136z M389.933,36.77
          l-5.016-14.745c-1.141-3.344-1.9-6.384-2.66-9.349h-0.229c-0.684,3.04-1.52,6.156-2.508,9.272l-5.017,14.821H389.933z"
        />
        <path
          className="map animate"
          d="M411.288,7.509c3.42-0.684,8.209-1.064,12.769-1.064c7.068,0,11.629,1.292,14.821,4.18c2.508,2.28,4.028,5.776,4.028,9.729
          c0,6.765-4.257,11.249-9.653,13.073v0.152c3.952,1.444,6.309,5.168,7.524,10.413c1.673,7.22,2.889,12.084,3.952,14.061h-6.84
          c-0.836-1.444-1.977-5.853-3.42-12.237c-1.521-6.992-4.257-9.729-10.261-9.957h-6.232v22.193h-6.688V7.509z M417.977,30.842h6.765
          c7.068,0,11.553-3.876,11.553-9.729c0-6.688-4.789-9.5-11.781-9.577c-3.268,0-5.472,0.304-6.536,0.608V30.842z"
        />
        <path
          className="map animate"
          d="M460.915,41.938l-5.244,16.113h-6.916l17.48-51.227h7.904l17.481,51.227h-7.068l-5.473-16.113H460.915z M477.712,36.77
          l-5.016-14.745c-1.141-3.344-1.9-6.384-2.66-9.349h-0.229c-0.684,3.04-1.52,6.156-2.508,9.272l-5.017,14.821H477.712z"
        />
      </svg>
      <svg>
        <path
          className="path"
          stroke="#000000"
          d="M 40,50
                  C 110,55 195,60, 265,55
                  C 290,55 290,85 265,85
                  C 195,85 110,85 40,100
                  C 0,100 0,50 40,50 Z"
        />
      </svg>
      <svg>
        <motion.path
          stroke="#000000"
          d="M 40,50
                  C 110,55 195,60, 265,55
                  C 290,55 290,85 265,85
                  C 195,85 110,85 40,100
                  C 0,100 0,50 40,50 Z"
          initial={{ strokeWidth: 0.1 }}
          animate={{
            pathLength: [0, 1, 0],
            strokeWidth: [10, 0.5, 2.5],
            fill: ["white", "red", "white"],
            stroke: ["red, yellow, blue"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg width="200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M298.999 226C762.599 739.6 920.499 719 941.499 644.5L1374 854C1099.5 1086.83 549.099 1461.7 543.499 1098.5C536.499 644.5 -119.501 581.5 19.9991 302.5C159.499 23.4997 146.001 -82.0003 222.5 71.9997"
          stroke="red"
        />
      </svg>
      Custom1
      <svg
        width="800"
        viewBox="0 0 1957 951"
        fill="grey"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1000 1C1480.6 1028.6 1920.5 517.833 1955.5 134L964.5 950.5"
          stroke="black"
          initial={{ strokeWidth: 0.1 }}
          animate={{
            pathLength: [0, 1],
            strokeWidth: [15, 6, 7.5],
            fill: "grey",
            stroke: "red",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M1000 1C1480.6 1028.6 1920.5 517.833 1955.5 134L964.5 950.5"
          stroke="black"
          initial={{ strokeWidth: 0.1 }}
          animate={{
            pathLength: [0, 1],
            strokeWidth: [15, 6, 7.5],
            fill: "grey",
            stroke: "red",
          }}
          transition={{
            delay: 0.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M1000 1C1480.6 1028.6 1920.5 517.833 1955.5 134L964.5 950.5"
          fill="rgba(100, 20, 20, 0.5)"
        />
      </svg>
      <svg
        width="800"
        viewBox="0 0 1957 1500"
        fill="grey"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke={"red"}
          strokeWidth={5}
          d="M2.11328 143.413C216.643 288.536 442.372 425.056 671.435 546.325C754.372 590.233 850.222 642.125 942.887 663.049C991.468 674.019 1049.5 667.121 1098.39 666.539C1170.59 665.68 1244.51 665.768 1314.78 646.762C1368.48 632.234 1432.69 607.341 1452.83 549.815C1480.65 470.338 1450.41 366.566 1417.54 293.875C1384.28 220.323 1334.48 164.882 1269.4 117.819C1204.18 70.6449 1119.48 17.1082 1038.28 3.03393C954.758 -11.4437 913.587 195.617 898.679 245.789C848.966 413.104 808.799 578.658 688.498 711.135C605.635 802.384 511.997 883.956 427.905 974.055"
          initial={{ strokeWidth: 0.1 }}
          animate={{
            pathLength: [0, 1, 0],
            strokeWidth: [15, 1.5, 7.5],
            fill: "grey",
            stroke: "red",
          }}
          transition={{
            delay: 0,
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          stroke={"red"}
          strokeWidth={5}
          d="M769.934 597.125C769.934 691.419 794.443 783.318 819.183 873.618C830.684 915.599 845.826 955.957 860.288 996.934C862.409 1002.94 866.379 1018.76 870.758 1022.92C905.227 1055.66 987.517 1061.87 1029.75 1065.57C1126.44 1074.04 1225.16 1063.18 1320.98 1051.61C1438.37 1037.44 1558.38 1020.48 1671.15 983.362C1729.43 964.182 1764.42 889.155 1775.08 832.9C1778.46 815.038 1787.88 786.381 1778.96 768.527C1766.46 743.527 1759.64 759.106 1740.57 763.874C1719.64 769.105 1692.2 787.715 1672.7 799.55C1606.18 839.942 1517.89 825.292 1443.52 841.819C1341.86 864.411 1243.97 891.242 1139.88 904.253"
          initial={{ strokeWidth: 0 }}
          animate={{
            pathLength: [0, 1],
            strokeWidth: [15, 1.5, 7.5],
            fill: "grey",
            stroke: "red",
          }}
          transition={{
            delay: 0,
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          stroke={"red"}
          strokeWidth={5}
          d="M769.934 597.125C769.934 691.419 794.443 783.318 819.183 873.618C830.684 915.599 845.826 955.957 860.288 996.934C862.409 1002.94 866.379 1018.76 870.758 1022.92C905.227 1055.66 987.517 1061.87 1029.75 1065.57C1126.44 1074.04 1225.16 1063.18 1320.98 1051.61C1438.37 1037.44 1558.38 1020.48 1671.15 983.362C1729.43 964.182 1764.42 889.155 1775.08 832.9C1778.46 815.038 1787.88 786.381 1778.96 768.527C1766.46 743.527 1759.64 759.106 1740.57 763.874C1719.64 769.105 1692.2 787.715 1672.7 799.55C1606.18 839.942 1517.89 825.292 1443.52 841.819C1341.86 864.411 1243.97 891.242 1139.88 904.253"
          initial={{ strokeWidth: 0 }}
          animate={{
            pathLength: [0, 1],
            strokeWidth: [0, 7.5, 0],
            fill: "grey",
            stroke: "gray",
          }}
          transition={{
            delay: 2,
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg>
        <motion.path
          stroke="#000000"
          d="M 40,50
                  C 110,55 195,60, 265,55
                  C 290,55 290,85 265,85
                  C 195,85 110,85 40,100
                  C 0,100 0,50 40,50 Z"
          initial={{ strokeWidth: 0.1, stroke: "yellow" }}
          animate={{
            strokeWidth: [5, 0.5, 2.5],
            fill: ["white", "red", "white"],
            stroke: ["red, yellow, blue"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
            ease: "linear",
          }}
          cx="3"
          cy="11"
          r="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={20}
        />
      </svg>
    </div>
  );
}
