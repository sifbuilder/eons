/**********************
 *      @eonDatMatisse
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (factory((global.eonDatMatisse = global.eonDatMatisse || {})))
}(this, function (exports) {
  'use strict'

  var eonitem = function (__eo = {}) {
    let data = {

      width: '2.77778in', height: '3.45833in',
      viewBox: '0 0 547 700',
      path: {
        id: 'NuBleuII',
        fill: 'none', stroke: 'black', 'strokeWidth': '1',
        d: `M 326.25,226.75
           Ci 325.22,227.06 326.25,242.75 332.25,250.42
             338.38,258.75 346.88,264.04 346.88,264.04
             346.87,264.00 355.38,268.50 362.62,269.00
             362.62,269.00 382.63,272.27 384.75,271.00
             384.75,266.75 384.00,260.62 382.50,251.62
             376.62,236.50 374.86,237.21 373.09,227.45
             385.54,233.01 389.50,238.12 397.62,249.50
             397.62,249.50 406.50,267.00 406.50,267.00
             411.35,277.24 413.79,290.67 416.91,301.67
             420.15,313.11 423.98,324.65 424.00,336.67
             424.04,361.10 421.90,362.84 419.28,384.67
             419.28,384.67 416.56,413.67 416.56,413.67
             416.56,413.67 411.13,438.67 411.13,438.67
             411.13,438.67 407.33,482.00 407.33,482.00
             407.33,482.00 402.00,526.67 402.00,526.67
             402.00,526.67 402.00,556.67 402.00,556.67
             402.02,569.38 405.91,581.49 409.12,593.67
             409.12,593.67 425.33,650.67 425.33,650.67
             425.33,650.67 429.94,675.06 432.31,677.07
             434.74,679.13 470.80,680.01 472.50,678.75
             473.00,676.00 473.31,674.40 473.75,672.38
             473.75,672.38 463.75,648.00 463.75,648.00
             463.75,648.00 455.62,627.88 455.62,627.88
             455.62,627.88 458.12,629.25 458.12,629.25
             458.12,629.25 469.62,656.25 469.62,656.25
             469.62,656.25 483.21,681.49 483.21,681.49
             483.21,681.49 547.00,680.67 547.00,680.67
             547.00,680.67 547.00,671.67 547.00,671.67
             528.31,669.98 514.50,655.75 510.25,652.25
             510.25,652.25 488.25,631.38 488.25,631.38
             483.00,629.38 478.89,629.18 472.50,628.25
             470.28,627.93 458.04,626.74 456.22,625.64
             453.41,623.95 449.54,614.07 447.69,610.67
             443.05,602.10 427.50,580.27 426.00,572.12
             426.00,567.38 431.08,552.28 432.62,547.62
             432.62,547.62 441.67,522.67 441.67,522.67
             441.67,522.67 461.86,457.67 461.86,457.67
             464.94,446.79 469.98,428.55 470.00,417.67
             470.00,417.67 471.00,392.67 471.00,392.67
             471.00,392.67 471.00,308.67 471.00,308.67
             471.00,308.67 463.08,257.67 463.08,257.67
             463.08,257.67 458.76,226.67 458.76,226.67
             455.74,213.79 444.57,188.60 438.22,176.67
             429.22,159.75 409.23,139.32 392.00,130.93
             392.00,130.93 370.00,121.36 370.00,121.36
             363.95,119.17 359.82,116.45 336.36,111.64
             325.76,109.47 321.00,106.09 313.36,100.18
             312.25,106.38 311.20,119.22 305.25,122.75
             306.29,114.86 309.12,97.00 307.04,89.00
             303.25,80.25 298.91,71.88 298.46,72.00
             289.88,61.50 285.50,57.00 277.64,49.73
             277.64,49.73 283.64,52.64 283.64,52.64
             283.64,52.64 293.00,59.82 293.00,59.82
             293.00,59.82 304.64,71.00 304.64,71.00
             304.64,71.00 314.55,85.82 314.55,85.82
             314.55,85.82 314.42,88.33 326.09,102.82
             332.19,108.06 340.73,109.63 340.73,109.64
             340.73,109.64 364.45,113.73 355.55,112.91
             355.55,112.91 386.00,114.67 386.00,114.67
             382.95,108.22 372.40,99.07 367.00,93.67
             352.33,79.00 337.66,66.25 318.00,58.73
             306.09,54.18 294.89,52.50 282.64,50.27
             274.06,48.71 275.91,47.45 270.82,44.27
             261.74,41.25 256.86,41.95 247.50,41.25
             247.50,41.25 236.55,39.82 220.00,40.25
             214.01,40.63 200.50,42.50 200.50,42.50
             200.50,42.50 172.36,44.91 153.00,46.99
             142.33,50.00 130.33,52.00 116.00,57.89
             116.00,57.89 63.00,67.24 63.00,67.24
             55.09,68.41 43.61,69.45 37.04,74.31
             30.09,79.46 25.49,95.23 25.10,103.67
             24.85,109.31 33.27,131.03 33.27,131.03
             47.64,146.36 56.68,155.61 66.64,162.74
             75.96,169.41 96.80,184.52 106.73,188.73
             129.29,198.30 143.33,200.67 174.00,203.83
             209.62,206.24 220.81,206.21 227.33,206.00
             228.50,205.96 242.09,205.45 242.09,205.45
             244.11,205.43 248.36,205.45 252.82,204.82
             253.67,199.33 253.82,193.00 254.36,190.55
             255.39,185.89 258.65,179.48 261.00,175.25
             267.00,164.75 273.00,161.71 270.92,158.16
             269.84,156.31 265.96,155.08 264.00,154.35
             264.00,154.35 251.00,148.56 251.00,148.56
             251.00,148.56 221.00,134.89 221.00,134.89
             221.00,134.89 205.00,132.24 205.00,132.24
             195.05,130.70 185.11,128.56 175.00,128.67
             175.00,128.67 149.45,130.36 149.45,130.36
             149.45,130.36 134.18,130.73 134.18,130.73
             134.18,130.73 129.82,132.00 129.82,132.00
             125.21,131.87 119.14,128.58 117.00,124.67
             117.00,124.67 163.75,112.50 163.75,112.50
             167.68,111.32 170.00,109.75 182.00,105.50
             183.64,103.01 182.24,99.29 181.81,96.67
             180.39,91.05 179.61,83.08 179.75,77.25
             182.25,64.50 192.12,52.38 199.25,47.88
             201.25,53.50 197.88,53.00 194.38,57.25
             186.38,66.00 184.60,76.85 184.18,82.67
             184.09,92.77 188.52,100.93 194.00,108.50
             199.36,113.14 203.09,117.45 203.09,117.45
             203.09,117.45 207.27,116.73 207.45,116.73
             207.64,116.73 208.61,119.99 213.27,123.64
             227.28,134.58 237.46,139.40 241.25,141.00
             246.78,143.34 253.62,146.25 261.38,147.62
             264.65,147.89 279.38,149.62 279.38,149.62
             279.38,149.62 283.88,148.00 284.00,148.00
             284.12,148.00 280.50,152.00 280.50,152.00
             280.50,152.00 280.17,159.29 278.55,161.45
             276.26,166.73 268.17,172.60 264.70,179.67
             262.77,183.60 260.31,191.31 260.10,195.67
             259.80,201.88 267.28,223.10 270.75,228.25
             277.92,238.87 290.56,242.09 302.50,244.25
             308.16,245.27 317.87,246.12 319.64,252.91
             320.40,255.84 317.19,260.92 316.00,263.67
             311.93,273.10 310.09,276.36 307.14,286.67
             307.14,286.67 301.64,307.64 301.64,307.64
             301.64,307.64 298.96,308.80 296.50,308.50
             279.89,313.69 255.55,321.29 241.62,329.00
             238.01,331.11 234.82,329.57 234.75,330.25
             234.75,330.25 221.28,315.67 221.28,315.67
             221.28,315.67 195.96,286.67 195.96,286.67
             195.96,286.67 180.00,271.66 180.00,271.66
             180.00,271.66 157.00,249.75 157.00,249.75
             141.92,237.32 127.22,226.32 108.00,221.43
             102.44,220.02 98.62,218.19 92.00,218.19
             88.67,218.87 88.88,217.88 84.06,221.81
             80.06,226.38 80.56,225.50 78.44,229.38
             78.40,229.56 75.72,240.01 75.69,240.19
             74.71,248.58 73.52,257.92 72.83,264.67
             72.83,264.67 69.45,286.73 69.45,286.73
             69.45,286.73 61.44,320.67 61.44,320.67
             59.65,331.76 59.64,337.45 57.33,356.17
             58.00,370.00 58.00,373.64 58.33,387.17
             58.36,396.55 58.52,406.22 58.27,409.09
             58.27,409.09 51.50,415.75 51.50,415.75
             51.50,415.75 43.08,426.67 43.08,426.67
             31.08,444.88 21.28,455.41 21.00,478.67
             21.00,478.67 21.00,493.67 21.00,493.67
             21.06,505.86 27.71,534.10 33.51,544.67
             33.51,544.67 53.09,575.27 53.09,575.27
             54.92,578.10 61.60,586.40 61.91,589.18
             62.38,593.40 53.99,602.72 51.00,605.50
             51.00,605.50 33.00,617.99 33.00,617.99
             26.20,623.68 19.98,632.43 14.86,639.67
             13.52,641.56 10.93,645.37 10.00,647.50
             9.45,651.50 9.50,656.88 9.50,664.00
             11.75,664.38 21.50,664.50 21.50,664.50
             24.81,664.48 33.85,665.67 37.09,664.55
             41.82,659.55 49.00,652.37 52.73,648.73
             60.45,641.20 68.18,634.28 77.00,628.00
             77.00,628.00 85.88,622.38 85.88,622.38
             87.29,621.52 92.25,618.50 96.00,616.00
             94.00,613.50 87.02,610.34 85.50,609.38
             85.50,609.38 73.88,602.12 73.88,602.12
             74.95,602.03 73.91,598.67 75.88,599.12
             75.88,599.12 108.25,617.00 108.25,617.00
             120.34,623.49 129.08,627.12 142.25,630.88
             142.25,630.88 187.00,643.78 187.00,643.78
             187.00,643.78 218.00,649.55 218.00,649.55
             218.00,649.55 267.00,662.24 267.00,662.24
             267.00,662.24 312.38,668.88 312.38,668.88
             320.29,670.43 331.28,673.65 339.38,673.75
             339.38,673.75 416.38,675.00 424.12,674.88
             424.24,675.24 419.82,654.36 417.25,645.50
             417.25,645.50 356.75,632.25 355.50,632.50
             354.25,632.75 305.00,621.12 305.00,621.12
             305.00,621.12 298.12,617.88 290.88,613.38
             288.81,613.19 277.10,607.12 275.36,606.67
             271.24,605.57 267.70,603.89 263.00,602.53
             229.78,592.86 216.44,581.26 190.00,560.11
             190.00,560.11 167.00,542.47 167.00,542.47
             156.28,533.89 139.75,521.62 128.12,512.00
             119.25,506.12 105.30,495.68 97.00,491.32
             91.95,488.67 80.91,481.82 80.91,481.82
             80.91,481.82 71.36,488.00 71.36,488.00
             71.37,488.21 63.36,472.91 59.75,462.88
             59.75,462.88 57.67,448.33 57.67,448.33
             57.67,448.33 58.00,429.00 58.00,429.00
             58.00,429.00 57.94,412.56 57.94,412.56
             57.94,412.56 58.74,406.68 59.00,409.38
             59.52,414.69 59.91,423.82 60.00,435.00
             60.00,435.00 62.25,460.44 62.25,460.44
             64.88,467.62 69.20,477.88 69.12,477.75
             69.12,477.75 72.18,486.55 72.18,486.55
             72.18,486.55 81.18,480.73 81.18,480.73
             81.18,480.73 81.27,480.18 85.33,482.00
             96.82,486.36 100.34,488.66 109.00,492.42
             111.09,493.33 116.35,496.27 118.43,495.48
             121.55,494.30 121.96,480.33 122.00,477.00
             122.00,477.00 124.00,442.00 124.00,442.00
             124.00,442.00 125.96,422.00 125.96,422.00
             125.96,422.00 125.96,412.00 125.96,412.00
             125.96,412.00 127.00,400.00 127.00,400.00
             127.01,394.72 125.30,379.98 128.50,375.62
             128.50,375.62 130.00,407.00 130.00,407.00
             130.00,407.00 129.00,422.00 129.00,422.00
             129.00,422.00 127.83,447.00 127.83,447.00
             127.83,447.00 125.00,474.00 125.00,474.00
             125.00,474.00 126.75,509.25 126.75,509.25
             126.75,509.25 137.54,509.20 143.00,508.21
             143.00,508.21 155.00,505.29 155.00,505.29
             158.97,504.30 163.83,503.54 166.74,500.44
             171.20,495.67 166.17,485.13 164.33,479.67
             164.33,479.67 151.50,441.38 151.50,441.38
             150.10,436.07 139.19,391.63 141.25,386.25
             145.70,403.14 153.50,434.25 153.50,434.25
             153.50,434.25 166.38,470.12 166.38,470.12
             166.38,470.12 168.83,476.94 176.80,492.67
             176.80,492.67 185.35,507.67 185.35,507.67
             195.83,526.17 199.63,534.56 215.04,550.67
             228.88,565.13 244.57,578.19 260.00,590.92
             265.88,595.77 306.25,618.50 306.25,618.50
             306.25,618.50 353.50,629.00 353.50,629.00
             353.50,629.00 416.50,642.02 416.50,642.02
             416.50,642.02 408.09,607.94 408.09,607.94
             408.09,607.94 404.50,599.50 404.50,599.50
             404.50,599.50 385.50,577.00 385.50,577.00
             385.57,577.00 373.25,562.64 362.00,549.64
             353.27,539.91 330.64,479.91 330.64,479.91
             330.64,479.91 312.64,439.18 312.64,439.18
             312.64,439.18 295.26,404.96 296.00,407.25
             296.00,407.25 284.00,387.50 284.00,387.50
             284.00,387.50 261.84,360.67 261.84,360.67
             261.84,360.67 235.62,331.38 235.62,331.38
             235.62,331.38 242.62,330.38 242.62,330.38
             242.62,330.38 252.15,341.38 265.27,357.27
             270.81,363.98 279.83,374.96 285.48,383.96
             285.26,375.30 287.15,360.03 289.43,348.05
             293.01,329.24 296.88,309.75 296.88,309.75
             296.88,309.75 301.42,309.25 301.75,309.25
             302.08,309.25 293.44,346.67 293.44,346.67
             293.44,346.67 288.20,386.67 288.20,386.67
             288.43,389.08 309.91,426.73 309.91,426.73
             309.91,426.73 324.50,459.25 324.50,459.25
             324.50,459.25 337.27,488.45 337.27,488.45
             343.02,502.45 353.25,530.50 360.00,541.25
             359.98,541.30 374.00,559.00 374.00,559.00
             374.00,559.00 391.55,579.45 391.55,579.45
             391.55,579.45 403.25,594.01 403.25,594.00
             403.25,594.00 397.28,569.67 397.28,569.67
             388.58,540.47 383.76,531.47 381.58,499.67
             381.58,499.67 380.67,456.67 380.67,456.67
             380.67,456.67 383.17,427.67 383.17,427.67
             383.17,427.67 388.83,380.67 388.83,380.67
             388.83,380.67 392.14,344.28 392.00,331.67
             392.00,331.67 389.00,294.67 389.00,294.67
             388.95,291.37 387.64,280.09 387.64,277.18
             375.75,275.25 361.91,272.91 361.91,272.91
             355.91,271.00 344.73,266.61 344.73,266.61
             344.73,266.61 330.82,254.09 330.82,254.09
             330.82,254.09 331.27,251.27 331.27,251.27
             331.27,251.27 326.82,251.27 326.82,251.27
             326.82,251.27 322.92,244.18 321.68,238.67
             318.78,225.86 323.26,221.44 331.25,212.88
             336.01,207.78 343.25,200.25 348.62,196.25
             348.62,196.25 348.50,199.38 348.50,199.38
             348.50,199.38 333.00,218.25 333.00,218.25
             333.00,218.25 326.25,226.75 326.25,226.75 Z`,
      }, // path
    } // data
    /* -------------------------- */
    /*       enty               */
    /* -------------------------- */
    var enty = function enty () {}
    enty.data = () => data

    return enty
  }

  exports.eonDatMatisse = eonitem
}))
