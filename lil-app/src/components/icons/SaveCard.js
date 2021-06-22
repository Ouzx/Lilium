import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SvgSaveCard(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className=""
      {...props}
    >
      <Path fill="url(#Save_Card_svg__pattern0)" d="M0 0h20v21H0z" />
      <Path
        d="M9.429 11.643h1.965v1.138H9.429v2.22h-1.22v-2.22H6.234v-1.138h1.975V9.567h1.22v2.076z"
        fill="#000"
      />
      <Defs>
        <Pattern
          id="Save_Card_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#Save_Card_svg__image0"
            transform="matrix(.021 0 0 .02 -.025 0)"
          />
        </Pattern>
        <Image
          id="Save_Card_svg__image0"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI0VDE4OjE2OjU4KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTI0VDE4OjE2OjU4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yNFQxODoxNjo1OCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NmM1YzkxYi04Y2IzLTAwNDEtOWVlMC0yYmU4MzdlOWQyMzAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1Mzg3NGY1MC1kM2I0LWZjNGItYjVhNi0yYjU3NjkzZjA2ZWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MDJmOWQ1Yy0yOGVhLTU2NDgtYTVjNC1jOGIzNjBhMTI0YzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDJmOWQ1Yy0yOGVhLTU2NDgtYTVjNC1jOGIzNjBhMTI0YzkiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjRUMTg6MTY6NTgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDZjNWM5MWItOGNiMy0wMDQxLTllZTAtMmJlODM3ZTlkMjMwIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTI0VDE4OjE2OjU4KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kohCEQAAAXtJREFUaIHtmr1KA0EQgL8TQRSUgM8gJG+gtr6ApZ0IguKDCD6BlYWVhfhXWFpbaC0+giIYcoEIphiLaw7B7OzNnc7F/WCLI7M782XY5eA2ExGmgZm/LqAukkiJPeANkAbGC7CtKSIz7pEt4MyygJJN4GZSgLUj+8b5Wg5CAdaO5MCiZQEl78DypABrRxaM87XMhwKsIrNAVtOYA3aBQdVCvPAJnABj4DR2srYjK8AFxZ6o83jNgSugV8p1CzzEiiAiodEVkb40S19EeqWc599+H4Xq1HTkEOhE/0NxdICj0vM4dgGNyEbsohUx5dGILFkSRGA6ytNLozeSiDeSiDeSiDeSiDeSiDeSiDeSiDeSiDeSiDeSiDfaIvIRCmiLyGMooC0ix6EA7yKvwA5wHQrUfHr7zRsFWdWJ3jui5l+J5I1XUTCyTNaI3FkSRGDKo9nsXeCeZr9aDYB14KnqApqOPAOrwCUwrJroB4YUVzPWMEiA/eaDG6bm1PoCJcoSZ5j2sekAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default SvgSaveCard;
