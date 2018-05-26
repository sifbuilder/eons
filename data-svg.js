/**********************
 *			@dataSvg
 */	
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.dataSvg = global.dataSvg || {})));
}(this, function (exports) { 'use strict';

var dataSvg = function (__mapper = {}) {

		let data = { 

      'width':"2in", 'height':"2in",
      'viewBox':"0 0 600 600",
      'path': {
        'id':"dataSvg",
        'fill':"none", 'stroke':"black", 'strokeWidth':"1",
        'd':`M 378.19,154.00
           C 373.73,162.23 369.99,170.65 368.33,180.00
             366.41,190.71 366.88,202.14 367.00,213.00
             367.00,213.00 369.00,235.00 369.00,235.00
             376.15,231.95 379.09,227.32 385.00,222.67
             392.47,216.79 401.39,212.72 411.00,212.21
             413.78,212.06 415.36,212.57 418.00,212.92
             433.56,214.38 461.34,221.52 475.00,212.92
             488.71,204.46 490.48,177.21 476.98,167.65
             473.10,164.90 467.64,164.52 463.00,164.75
             446.18,165.56 425.78,180.22 405.00,166.25
             402.03,164.25 399.12,162.00 397.14,158.96
             393.58,153.48 391.62,147.81 391.25,139.69
             391.38,133.19 392.75,124.31 399.17,117.04
             404.80,111.08 411.00,109.10 419.00,109.22
             436.78,108.96 450.17,113.83 466.00,114.82
             474.23,115.40 481.93,113.43 487.65,107.74
             493.24,102.18 494.86,95.02 503.00,93.00
             503.00,98.15 502.81,105.29 500.78,110.09
             500.13,111.64 492.26,120.60 491.04,121.39
             491.04,121.39 484.00,125.61 484.00,125.61
             473.46,131.01 474.82,131.18 462.19,131.19
             462.19,131.19 452.04,129.80 447.00,128.56
             437.31,126.87 430.08,123.33 421.00,128.56
             414.78,131.72 406.73,137.45 413.39,144.79
             417.69,149.52 424.19,149.56 430.00,148.33
             443.14,145.54 449.95,140.33 466.00,139.18
             477.40,138.37 491.76,144.20 498.96,153.09
             501.69,156.47 503.32,160.15 505.25,164.00
             506.45,166.40 508.67,170.57 509.37,173.00
             509.37,173.00 511.04,189.00 511.04,189.00
             511.69,197.22 512.90,199.16 511.04,208.00
             508.06,221.52 502.00,226.06 496.62,233.19
             492.62,236.31 489.00,238.00 489.00,238.00
             489.00,238.00 481.00,241.44 481.00,241.44
             478.13,242.32 457.00,243.92 457.00,243.92
             445.49,243.92 417.32,233.24 400.32,250.26
             392.52,259.00 384.91,275.01 385.00,275.00
             380.70,282.74 374.38,291.44 369.08,296.83
             366.18,299.78 361.98,304.31 364.26,308.85
             366.53,313.36 373.05,311.77 377.00,311.28
             389.54,309.74 398.11,306.96 410.00,303.00
             431.69,295.77 436.88,293.04 460.00,294.83
             468.28,295.47 468.80,289.22 471.75,283.00
             476.42,273.13 475.21,268.25 478.32,260.00
             478.32,260.00 485.71,247.32 488.62,241.31
             492.75,236.69 498.38,236.04 501.13,236.18
             503.62,236.18 513.48,238.79 519.00,242.02
             519.00,242.02 541.00,257.69 541.00,257.69
             544.55,259.64 556.19,263.32 557.38,266.34
             558.41,268.98 556.17,270.34 553.95,270.77
             550.64,271.43 544.37,270.84 541.00,270.20
             535.74,269.19 531.31,268.05 527.01,264.61
             522.32,260.85 520.74,258.13 515.03,253.42
             509.81,248.94 508.74,248.14 503.03,247.70
             498.03,249.87 495.52,253.95 492.99,258.00
             488.49,265.21 488.04,274.20 485.24,282.00
             483.13,287.87 479.19,288.74 479.99,296.00
             480.63,301.80 486.95,306.62 490.54,311.00
             496.44,318.20 501.51,327.16 504.48,336.00
             512.72,360.48 507.31,396.53 482.00,409.19
             473.52,413.44 459.46,415.78 450.00,414.83
             450.00,414.83 439.00,413.00 439.00,413.00
             448.32,427.69 455.33,429.62 459.33,449.00
             466.36,483.01 442.14,513.35 407.00,513.38
             407.72,514.05 384.63,510.98 380.32,509.58
             373.65,505.80 355.75,497.31 353.25,497.35
             341.54,492.35 324.87,486.18 313.01,493.97
             307.34,495.44 299.38,510.06 307.38,521.06
             321.00,538.31 333.33,532.45 348.00,525.77
             348.00,525.77 380.75,513.75 380.75,513.75
             385.38,512.25 396.81,512.81 409.12,515.56
             419.06,520.81 435.44,529.95 446.00,530.00
             446.00,530.00 465.00,530.00 465.00,530.00
             463.27,536.82 453.79,541.89 451.96,542.83
             449.33,544.19 443.96,544.90 441.00,544.68
             420.23,543.12 408.50,531.67 393.00,531.04
             380.32,530.53 371.17,537.30 360.00,541.53
             360.00,541.53 350.00,543.90 350.00,543.90
             328.10,550.54 302.60,554.58 288.88,531.00
             285.39,525.02 284.08,520.90 284.00,514.00
             283.91,506.12 283.38,498.53 286.09,491.00
             286.09,491.00 295.09,476.91 295.09,476.91
             297.50,474.75 308.75,467.31 308.18,468.36
             321.26,468.40 334.48,468.91 347.00,472.72
             366.49,478.65 380.41,486.28 402.00,487.82
             416.47,488.85 430.89,477.77 431.90,463.00
             432.52,454.03 427.37,444.82 421.98,438.00
             413.36,427.08 401.11,421.81 389.00,415.75
             373.22,407.86 357.42,400.27 343.00,389.96
             334.50,383.88 325.96,374.14 320.86,365.00
             316.32,356.87 313.90,348.89 308.00,341.00
             302.39,360.64 278.18,382.82 264.00,397.00
             256.32,404.68 249.78,410.79 247.84,422.00
             247.55,424.28 247.17,426.70 247.84,428.98
             249.08,434.10 252.34,433.39 255.21,429.89
             260.13,423.89 260.33,416.53 275.00,409.90
             297.22,399.86 319.43,413.42 319.99,438.00
             320.24,449.01 314.60,456.09 309.50,465.00
             306.50,468.25 293.75,476.12 291.75,476.38
             285.15,477.22 271.00,480.00 271.00,480.00
             270.03,490.76 262.08,501.05 263.66,512.00
             265.21,522.81 273.49,530.88 278.66,540.00
             283.77,549.01 284.38,558.33 280.77,568.00
             278.57,573.89 277.05,577.51 271.00,580.00
             271.00,570.55 271.91,560.71 267.47,552.00
             265.03,547.19 258.93,540.98 255.44,536.00
             251.57,530.47 251.08,527.89 248.57,522.00
             245.45,515.73 246.00,499.00 251.03,488.00
             252.01,484.90 254.49,480.25 252.94,477.18
             251.27,473.90 239.01,468.00 235.00,464.67
             223.89,455.45 217.17,439.33 217.00,425.00
             216.92,418.00 217.90,408.51 220.46,402.00
             225.70,388.71 236.68,378.79 245.54,368.00
             245.54,368.00 263.00,344.00 263.00,344.00
             253.80,344.11 256.79,345.66 249.99,347.32
             246.04,348.28 237.20,348.99 233.00,349.00
             221.78,349.02 202.24,348.70 192.00,352.44
             182.37,355.95 176.58,361.27 177.04,372.00
             177.32,378.39 180.31,384.47 183.31,390.00
             190.43,403.14 201.81,416.38 202.00,432.00
             202.14,443.86 202.95,451.16 192.00,458.78
             179.82,466.73 164.91,469.64 147.00,462.00
             129.73,449.55 119.18,448.27 116.00,401.00
             115.96,391.75 116.91,380.73 114.12,372.00
             113.43,369.85 112.02,365.19 110.44,363.73
             103.78,357.55 92.73,365.58 88.53,371.00
             82.53,378.74 78.21,393.09 66.00,401.04
             53.09,409.45 39.09,405.64 31.39,400.07
             29.91,398.98 23.42,389.80 22.57,388.00
             20.35,383.29 21.00,374.39 21.00,369.00
             22.97,369.02 25.69,368.82 27.37,369.99
             31.79,373.08 36.72,396.18 49.09,391.36
             57.41,388.12 62.20,379.28 66.42,372.00
             75.07,357.11 87.88,338.17 108.00,343.00
             107.18,341.98 119.43,346.76 122.56,349.06
             125.68,352.63 126.35,353.52 128.02,356.21
             128.02,356.21 133.57,372.00 133.57,372.00
             138.92,390.88 134.09,411.82 145.09,429.00
             149.01,435.12 155.28,442.23 163.00,442.89
             172.93,443.74 177.57,436.06 175.61,427.00
             172.79,413.93 155.60,402.55 149.36,384.00
             147.10,377.29 145.35,369.03 146.62,362.00
             147.27,358.36 149.74,348.43 150.93,344.96
             156.35,337.30 170.26,323.91 173.88,323.55
             181.62,322.50 186.74,319.31 195.00,317.15
             203.86,314.85 207.81,315.50 216.00,314.42
             221.62,313.68 230.05,315.32 230.46,309.96
             230.65,307.43 228.76,305.49 226.89,304.11
             223.53,301.62 219.67,301.11 210.00,293.87
             210.00,293.87 182.00,273.12 182.00,273.12
             175.62,268.25 174.48,267.92 168.04,264.10
             168.04,264.10 159.50,259.96 158.00,259.84
             150.71,258.33 146.08,254.45 137.00,259.84
             137.00,259.84 154.00,268.22 154.00,268.22
             160.02,272.41 169.56,284.99 171.83,292.00
             171.83,292.00 173.57,308.35 173.57,308.35
             173.57,308.35 167.94,324.31 168.00,324.00
             159.74,332.00 159.58,335.37 145.48,340.70
             143.48,341.46 131.86,344.08 128.18,344.19
             125.48,345.00 106.35,340.98 105.51,340.01
             94.19,326.83 81.66,317.71 80.00,298.00
             68.02,310.68 64.59,328.75 43.00,329.00
             39.73,329.03 33.76,329.56 32.17,325.89
             30.78,322.70 34.82,320.56 37.00,319.20
             43.45,315.19 51.61,311.14 56.21,304.96
             61.22,298.24 62.17,289.11 66.48,282.00
             71.41,273.87 77.05,273.21 81.37,267.83
             84.33,264.14 84.37,260.58 92.44,251.00
             102.71,238.81 113.17,234.33 128.00,230.00
             133.00,228.18 148.64,228.36 154.00,230.00
             173.27,232.27 194.41,242.73 210.00,253.34
             210.00,253.34 222.00,261.91 222.00,261.91
             225.46,264.13 240.64,271.71 238.30,261.00
             237.64,257.98 231.31,248.89 229.37,245.00
             224.22,234.70 221.19,223.47 220.32,212.00
             220.06,208.51 221.35,201.76 221.87,198.00
             221.87,198.00 229.20,160.00 229.20,160.00
             230.94,151.21 231.21,139.18 223.67,132.80
             218.01,128.00 206.38,127.70 200.49,132.22
             198.76,133.55 196.27,137.99 195.06,140.00
             183.47,159.37 188.63,180.66 177.33,201.00
             174.59,205.94 170.30,212.04 165.99,215.67
             165.99,215.67 157.92,221.49 157.92,221.49
             154.73,223.73 140.00,224.64 127.00,224.00
             117.65,221.87 113.82,219.36 107.59,212.00
             103.30,206.93 99.79,202.37 97.78,196.00
             94.82,188.27 95.85,177.78 97.78,170.00
             104.57,146.36 119.86,133.49 140.00,121.06
             150.68,114.48 168.99,109.81 175.90,102.90
             187.57,91.21 174.34,83.55 173.20,72.00
             172.64,66.32 174.36,61.76 180.00,60.00
             180.00,60.00 188.69,75.00 188.69,75.00
             193.69,82.77 196.88,85.32 197.00,95.00
             197.04,98.83 196.57,100.88 195.82,103.82
             192.44,108.82 175.88,121.14 171.75,123.03
             162.88,126.59 157.55,129.67 149.00,135.33
             144.65,138.21 138.85,141.18 135.09,144.47
             126.73,151.76 115.29,169.62 115.01,181.00
             114.36,208.01 149.32,215.77 160.10,192.00
             164.14,183.08 164.07,170.68 165.59,161.00
             167.83,146.70 171.42,137.16 177.00,124.00
             179.06,120.44 190.69,109.88 196.06,107.56
             205.94,105.60 223.49,101.01 236.00,105.93
             239.97,107.49 244.83,111.57 247.75,115.19
             249.25,117.12 255.11,124.88 257.43,128.78
             259.46,138.96 259.13,152.48 259.00,157.00
             258.97,176.46 253.00,189.36 255.72,212.00
             256.40,217.71 255.89,221.76 259.00,227.00
             265.96,216.43 269.45,198.86 285.00,185.18
             292.59,178.51 301.48,175.01 311.00,180.05
             314.61,181.96 318.09,185.17 321.00,188.01
             326.32,193.21 327.86,194.87 332.00,201.00
             336.01,194.09 333.57,180.19 337.00,170.00
             337.00,170.00 355.54,134.00 355.54,134.00
             357.77,128.30 360.15,116.08 359.96,110.00
             359.96,110.00 360.34,102.76 358.19,97.94
             350.25,108.69 333.31,121.81 325.12,126.62
             310.37,134.05 302.71,136.20 286.00,136.00
             277.41,135.89 269.14,131.64 260.88,129.36
             256.31,125.94 248.19,115.12 246.88,111.16
             241.94,86.47 253.18,64.13 277.00,54.40
             286.54,50.50 285.48,50.44 296.00,48.75
             299.35,48.22 301.55,47.28 304.00,50.00
             307.45,47.53 308.90,48.01 313.00,48.00
             326.10,47.98 339.04,50.92 351.00,56.31
             353.80,57.57 361.09,61.65 363.58,61.92
             367.33,62.33 373.64,57.73 377.00,55.86
             383.28,52.37 390.76,49.51 398.00,49.09
             406.71,48.59 419.07,52.31 425.98,57.61
             428.77,59.74 434.54,65.86 429.68,68.96
             427.06,70.64 423.47,68.88 421.00,67.74
             415.20,65.06 409.49,62.15 403.00,61.76
             393.79,61.20 389.42,65.68 381.00,67.00
             381.00,67.00 378.67,77.01 378.67,77.01
             378.67,77.01 386.11,96.00 386.11,96.00
             386.10,96.00 388.56,112.69 388.69,126.03
             387.19,138.44 382.95,146.86 378.19,154.00 Z
           M 300.00,72.42
           C 290.91,73.80 282.79,75.06 276.91,83.04
             270.72,91.11 267.39,106.50 276.91,113.30
             280.15,116.31 290.38,117.38 296.00,116.29
             312.43,114.85 321.83,110.13 334.00,99.07
             337.12,96.24 344.49,90.75 343.85,86.00
             343.31,81.99 337.35,78.48 334.00,76.89
             323.39,71.85 311.56,71.01 300.00,72.42 Z
           M 105.00,276.04
           C 102.29,284.34 101.94,287.30 103.29,296.00
             103.99,300.45 106.07,307.33 108.65,311.00
             110.88,314.18 114.61,317.55 118.00,319.47
             143.61,333.99 167.02,297.51 143.00,280.65
             139.21,277.99 134.49,276.87 130.00,276.04
             114.75,273.40 114.60,276.24 105.00,276.04 Z
           M 421.50,349.62
           C 421.50,354.43 420.58,361.46 422.10,366.00
             426.80,379.98 441.45,387.31 455.55,386.99
             471.36,386.73 482.64,372.64 484.92,358.62
             486.92,353.62 485.14,348.70 484.52,344.82
             482.82,329.82 474.27,318.73 451.27,322.82
             437.34,328.22 426.59,340.58 421.50,349.62 Z
           M 348.38,339.78
           C 356.31,342.22 374.31,343.16 383.45,342.55
             394.88,341.50 405.50,339.00 408.55,337.82
             407.31,339.69 401.55,358.55 401.73,365.64
             402.18,374.91 404.50,379.09 411.64,393.27
             410.73,392.73 390.12,385.03 374.69,373.34
             370.39,370.55 350.47,350.14 348.38,339.78 Z
           M 278.31,459.06
           C 288.41,458.97 290.81,456.25 290.81,456.25
             296.32,452.94 299.23,449.65 299.89,442.00
             300.77,431.80 292.28,419.53 281.00,424.23
             272.55,427.75 268.88,435.33 268.17,444.00
             267.31,454.53 273.56,456.88 278.31,459.06 Z `
      } // path
    } // data
    
    // ........................... enty
		var enty = function enty() {}
		enty.data = ()  => data
		
		return enty

}

exports.dataSvg = dataSvg

}));
