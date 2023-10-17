import { id } from "../functios/id_maker.js";
export const resources = [
  {
    title: "Recursos",
    id: id(),
    data: [
      {
        title: "3D",
        id: id(),
        data: [
          {
            linkTitle: "Three.js",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUElEQVQ4jX2TT0hUURyFv3vfm0nHmfFPUyKZQdDKdkaaCSWYlTUZoYFWFBkRQeGmFubCVUgrF9G6hQsjLBrFjKKI/oghLVyEFYI5KooNOum8Gd/Me7fFNDZjY2d3L+d899zf5Qo20fcb57wOc6XTFpYZla7u8gePV7P55MYN1dUlp66duqzHlycQ1i0Jd7bvr55QSrVmA4j0xeT1kzXCpkeiKgAcpbspOnuVnD17U5aReGi+3ekr+ZQBmLzZXCZNoxtoEYB051PQeAF3dT1CJkuqRJxfrwOEnz+y7FisV9NFR9n9wJwOsBCM9RUVcCDHpeE57KegoQXpysuoaptrWEuLKDOmrcXsi6FlSoE6CRAxlAzOgnWiDe/pS+vh1R/TRGZmAdBcbvKbrqAa2gjOgWEk56ennxKOxpj8No6vqJifTwaZGRwCIdjZ6Ke4qZHwyhJGwv7/K1iWxezXLwSfDaAsC5VIMN3/lNBcEGXbG+2ZDdLldMK2raAULIY2c2VpAKB53ZQ0VJKbJ3F5NHadqUXmbMkKyGhgR6MACF0nXnOMRPk+ct1eRKHv7xUNIwtACBulWOrtxzw4jefIIaQrF1XoQ7i9yeBqhFBgmPD7kWRSYK8DlFM0iTXRjW23Rt6NatHP43iO1pJXVYGyLMJvPxIafIFtRAEsBQ8dmqszyUnTy+P+KmzVg1KVAHpJMVKBOb+QmtgHJbX2+qHAWCqTAYDkZ3o1OnYeS90FdvzZDQqp364bDvRt9P8DSOlNc7M7Ho52CCnNmEPd8w8MGNl8vwFIxuYKIOp7/AAAAABJRU5ErkJggg==",
            href: "https://threejs.org/",
          },
          {
            linkTitle: "Babylon.js",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVQ4jY3STYjOURgF8J/30kwmpVDyMb4/UoxS7GShjIWysbCwVBJLsqHIQtkoCyYLNAsLFiOsbEhko0xkNYh8ZcOUXh8zr7H4n/94TSae1b23+5xznnOegrtYjjX4ji8Y8Wc1TFIFq3AWn3ACOzELi/EBXzE2AWxK/VbQg9dYjTdo4irm4jQ25NyF92i1AxZ04Die4VIAH0XZ8yh4mPdjWBKFTQw30vgDC7EPM9GHdziPTgyG+TG+RcFu9BWMohvn8BZH8BOfsRKzsQfXcQWbcDmjPSlB7lG5vw23MIx+TMWhjPsRywK6Aw9wo45nMHJfYkAVYwfWx8gB3MMMbM/9NkoNMIQXWIEDMelCzOzHHFWkC7AfdxJAqwRgNPLOZPa9qqUaC+gi7IoP9+vmOsZGJK+L4xtxEdMy1vQ0n0qcjZg8XvUYm/E0M8JB1XofVq16+9/xKn5vVUu1C01sVSWzJSqG/sY8sTpxNOe1uIalkzG3K6g/jETyfPTiJF79D3M7Qy9uYt6/mOv6BZMsYgnabPLOAAAAAElFTkSuQmCC",
            href: "https://www.babylonjs.com/",
          },
          {
            linkTitle: "Zodg",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACCElEQVQ4jYWSvWtTURiHn/fkEhJRTAqtGCRc0+7eNg7SOkR0EksDYh2E5nZI6epf0HYSp6g4hHQoTqIOtqNQSARFpIoBh25pLNI62N6UqNWY3OMQ7yXhWnyWc96P34/3fIht2bGwCtta9NT44GemZl5kMFyAVdE8it9kFSA/lrcJUV3eWK7Sgxo/9bWMUBAk03INTwyQ1cLz/ads7T1hUURWxJUP+XS+bFt2zDcYG9i1oqE20VCbi0Pb/ANThIVUchcAQTLhULjsFWV/LqX72jN1eqbwcQ5O8GDlOoe/wn+VLJXelRaDBtE2nG5C8iBgtP46zfqrtBc2Wp3WWSVKXYLuRTmtKM82z3F3bZKlhzPQDPcZXJl4T2JozwtjESNiiRfdyUwvfvlxfOGwY5BK7nLjaoX4yWbgKLXtBKXH1wDQSo8aXmGrGVuIhtpMXn7DxPmPAaE39nBy5zbQUKIaxY1iVZy8aWlRK4DVnbN2lLgiHWYpp7IA8VLtHoDSosq++Giq0mGWlyOmhoKGgjNvmgAGEPuPGMDSIba48KnK5iA4EeLFeh1ABVrbwZTPsd8W6R2AupcKdr89A7U4/DQCJQ+B+/7emR/JuNrNicYOdA5+h8S37trDwDT+8/sbZ940XVfZAjnA7FP0/k5NdeCWOxow6MWZG85qdA7IAqB1RUTWUO6qd3kefwAC1bDHy0d1QAAAAABJRU5ErkJggg==",
            href: "https://zzz.dog/",
          },
          {
            linkTitle: "Atropos",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZUlEQVQ4jW2TPW+dVRCEn9lz7oe/sR07MRIGHAICiQJRhbiIxB+gpKFwSU+BxA+gpUKCJunoKCgQokCIOBIVokAypEF8FSFSokRcHN/3PTsU1zcOiG12tbOz2nM0oy8uP3wuarnWu7+STkvIzJKxAOa1kG0cClXVm9m3g+rC9UHUK72nfYgyJ5xm5nHWQ3a2ger+SeGaPt8/dqq1NiHcBBgQxsKP2KcLZpiqKYtkuJSaZLontl8rjM8LN7CtCFnVssG9ZkxwFJj8Ye5+3yJrZnVvDVbFq+8PNVhmPgegnz5MLrwu1l4Ind0Cx7eTr99szqkVrbMWnkR1Uc4essNOc+em+Ord3/nm7QdM70L2JjuczQw35dG21Dor3Mkre2Fi9j8Uy9Pgxnt3WHjjN4bPT/j2nb9RAQoS4ajSym7YUzmcqZU9CUM2KwJufdz48+gBr1x+mfO7m9y+kfz4gSFNtpQMK5ek1qwaI7G0G4ApQ7h31Lj16YSdl9Y5+uiYabtPv/iQ7z4LnnnrWcYbgTFLT4uoUEdPhNcuFiQE4aWn0NVPFmjuMENs0/pkMC6MzwU4LFmre8WDFVGH69ZgFWjhlqnhUni4PBKM+G+4x+lUKfL4nDRcA3159SR/yR/49f7PGsXQzakgHsl4LgAhJ6mi8IlPdHH9Re/kJWrXNy/eu6Cdydihcsr5fy/MMJFOj9om/VpzFcTG1kbb2t4KnenI1r+kLFk+0xh02SeNUiuDw0HW/b/apBczM82fbJ1eYJnHAWjLdal2dIeRrR107g+rSgFZmjlHEqEgFDzeA7mqlC77w2x58A999ErTDKmotAAAAABJRU5ErkJggg==",
            href: "https://atroposjs.com/",
          },
        ],
      },
      {
        title: "IAS",
        id: id(),
        data: [
          {
            title: "Generales",
            data: [
              {
                linkTitle: "Phind",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQ4jYVTvc6iUBScc8EfOp/AqIW9rS9AZWWinSZS2lr5MDbGN9CW0C77NVba2PgAUpiYINw7Wwh8iN/uTkJuCGeGM+fMBYDfAAwAnZ0GAP/y6ErtL8k+GAACACICEREAMMYgh1IKxhjiGwSgVJkMACRhjCnIzWYTuVimm0My7qs9EaGIcLVacbFYcD6f83w+M4oihmHI0WhU1FVsvXyLiKnX68b3fcMM2+2Wy+WS+/2eJDkej4va0rxeSpZlEQCn0ym11lyv129/2u12vF6vtG37owMCoFKKAOh5Ho0x7Ha7tG2bjuPQtm26rkutNXu93psVhQq01gCAdruNNE0RxzHSNEW/30eSJIiiqBh2eR2FhdlsRpK8XC4cDodsNBp0XZePx4ObzeanQb4LeJ7HJEkYhiGNMbzf7yTJw+HAVqv1sQW7vP/8FBFMJhN0Oh0MBgMcj0f4vl91CwCw8zbykFiWBcuyxHEcBEGAIAi+kyPCsvdcQMod3G43nE4nxHEMpVQeYRhjQPItisjIGqUoiwhqtZo8n8+fOmb1/eMylYT/J1Bcpq+MUFX/F5hxvv4AZnYkJclUhuYAAAAASUVORK5CYII=",
                href: "https://www.phind.com/",
              },
              {
                linkTitle: "Bing",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABrklEQVQ4jc2Sv0tbURTHv+fea9575of1L3DoJGLb2ckfi/EHuGQUArUZCi/QTu0grbTibKBLClooOOhQcIiDJNEO4tAllAwOBqSLOoh5fSaa5N3TIUlNQkg7dOh3O5fz/dzvORzg3+utAJjua6b629/p3hjdNGGnjHZQL0ND/tj+qOxX70jr+XqH+lIruys3ydnvPQBMALHv+eGwZchj6JrBrJMA1wTJZ0xKl6uVscqHyXyztwlom82U1TUSsoJyacRJTMadxNRL/uk+JiHIlLzWLXQDQIzYtz6SvrC+cz8XkzOniOR9CKeM4sZcQVduPhGpaYRTBgDuAgDw41KAmQAoAIB7RggM1ZsZHgCBgNtmbs1DADgUT+8KZY3z9dWT4sZcAQAG7PRD8vV/1dVSxklMLXbuQDWWCIBw69FrS/ARBQO5UDz9UbDoY/BTMgcsuiudAwAiOwI78DoT/JZ/ae+R8ltvwN4CIASDt6D5QvofvPBunWVnfeJ9p6dFLcdipwxEs2azDMUPlgdf5ThoZ1a7fdyiLqcc2ZYAELQzqyE7c4LxrOoB+EO6Buz/0S85h5rvF5Z4ogAAAABJRU5ErkJggg==",
                href: "https://www.bing.com/search?form=MY0291&amp;OCID=MY0291&amp;q=Bing+AI&amp;showconv=1",
              },
              {
                linkTitle: "RIX",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB50lEQVQ4jYWTsW4aQRCGvzmWBpBLUyHQFbwCluWkgtbwBqEhSkWHEOIt7CapknS8gCU7pnWUhooOIZmWnpOAZXdSsOccKJJHGp127p/RzP/PwNGEf3YDfAdWIrIXkT3wCvwAPmRw2RwACsAdsAc0uA+evvcBU8gmRkAReA4gF4CHOI59pVLx2VjAPIecKC1yF35sRcQZYzzgX15e/GQy8SLi8/m8FxEHbAP2Pk2+BixgoyhyadulUslvNhtdLBbZUdIiNviVAT4D5vLy0j49PcliseDx8ZFarSbFYpE4jrXf78t2u9Xb21suLi6k1Wqx2+0M8IXAtjfGuPF47DVjzjn1/iSkvV7PR1HkRMQDKwI5by12Oh2fJIm31qpzTg+Hg1prdb1e+0aj4c7U2b+xmJq1FlU9Ci2CyFFuVcVaK6HAia0Ab4xxw+Hw3RG63e7JCMJxwz6Vy+XDdDrNLZdLHh4eiONYRqMRzjkdDAay2+203W5roVCQZrPpAok/Aa4CDzaXy53ImCSJLpfLExmD1KmM1xHwB/gGGOecFRE1xrDZbJjP5zqbzVREyOfzAOq9t4ABvgK/s6v8KxB0CB25er3uq9Vquso2fP+7ynA8kHveP6Z7zo4JTk/zI8dzfs2c8yrEbs5z/gKcuzoUWhj0OQAAAABJRU5ErkJggg==",
                href: "https://hashnode.com/rix",
              },
              {
                linkTitle: "Black Box",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDklEQVQ4jX1TTWsUQRB93RM3i5NsVuNHjKCiRkRRj34eBM/ir/DoRUTwtgT0FhBy8yTowVz8B4IHwV/gaYmrrC7rzHRVTc9mdhWhvPSE2VVTp+5+73VXvaoG9og8zzfyPH+9FwcAoKqmWjPz7SRJzgJAmqarzHwqnJ8UkTsVt9Pp2H9exMzfReTZLCYij5k5V9X5KaDT6Vjn3PUkSRYAIEmSlTRNF4PovnPuoaqa4XAYj0ajFQDodrvzRHRTVeegqvtE5IWInJ7JxhLRNxEZq2qjjhVFcdg597J6qC5a8N6/E5EnwcQ159yF4MGD8Xj8fjAYHKpr5uqbLMsWm83mDVV1ANBqtb4CiMLlFwHciuP4AIBsV1SW5XER2SKiS6G+lqpGg8FgPzN/ZuYf/X7/IAD0er12yOaKiGylabpqJ5NJBKBlrZ2qs6oKAIwxRlV32xa4S3EcR1NsZm6LSMnMr0La88PhMA7Y87IsfxPRibrGBqIBgHa7/cta+9EY8yl4stxoNJbDq11jzAdrbVF1qXK+QURvvPfnZjoSEdEXZva9Xq9Zx0aj0VFmfktES1BVk2XZ1WqQRORMMM0w8zozb6iq3d7eXkqSZK0qLc/za6o61UWoasTMQkSbs24y83pRFD//Gp66BwBARHeJ6DIAFEVxZGdn5xgAeO/Pe+/vqWoE/OczzYaIPBKRp3tx/gBAvHErzCdyxAAAAABJRU5ErkJggg==",
                href: "https://www.useblackbox.io/",
              },
              {
                linkTitle: "Chat Sonic",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jaWRSWtTYRSGn/PdzNEW21IlNAituFIK2kFRlDiBqMu60n8g6EbEnf9AXVlBFw6bLlzpQtBSFUUTbMGBghupWooDhoQ098bem++4uLFJwAbEs/jm857n/Q78Z0jbbs4/hOUMRlNrZqh4iL3Ijvg8QGT1ouBmUX2AEEc71VRAFoCz7QJO5CAQT34SNl81OJ78PR+Y6F46fjSX/zU2M3ahKaCMI5C5a+h5ajohMLKnMkiU88/2Fa41XwrjAOver10ZIOZYBro8gKo17peQ4I2mCfztjgdbrHBqEmanoasX+rNQKcLeE1B4BC8nPRxRRJjNzeSCUKAe7AQi6Xnh+wJs2w39AxCJQiwBNy/BgZPwYQ6GetwQ2JAHMKv+gfXvhHoAfg2mp2BjFqYuw+hh+PY5FB7qdRuWTb61C6FAw/+5I+BW4MV9WC7Dq4fQl4Glj3DlmAsKsaDeQoCOtn7gchmshUoJVGGlFiZvSAb0pXxEdHH4ya7FFgtSiH8VYj86d2D/YCmkb+A3LYxEJ97e09OZW8FtvAA8H2rN2Xo+NS9A/RVcF0T0ebsAsFV4TYoyot2IglhAQS3WWkzdUvXBiDzWROLGn7w2Zr2uUdIkKRbDg2Jj+Bku/ZJb33RnuNrR57/Gb7PluC2Jt4pxAAAAAElFTkSuQmCC",
                href: "https://app.writesonic.com/es/login",
              },
              {
                linkTitle: "Perplexity",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACBklEQVQ4jW1SS28SURQ+5947Ux4dGAoilqaMI1CQpq7dYYgiMerCP+Qf8Hf4B7rTSKtJY9y4sovynhZbI4WOPIWZe1yQEgx8q5OTfPke56Dx9h3cQhIxRAAgAADA/5dzsMXEGeZiEZVzSbQT1BJ6QBIJxnKxiGBsDYEhvt5Pv3j4gCPeC2zGdQ0RS1nzzcEeZ+sUELDVsyeOU8yYgiFDfJY2XEn16xtctcQQvYpQOf9mXRJQMWM+TRsK519bbYVznyIWMbieL0qiTDT8Mpf0KiIW8PtVpZQ1E6Fg5Xc3saVv+TzZu5Gx41z1h4goAIAINI/646rzpX7uEaKQThzXLAT8M5l+OGuMZ85jIx7YUIkA8NYSEcxcFwDyyd3hdFauWp/r573xpJAyEGHmurQaGgCfJHcdKT9VWkREREdVazidFVIGwkpoRNC9G/GgdtJoSyIiIAACOmlexDR/yOfBZQIidEeT3VAgqvldkgpjB9vRR9tRlXNXUtjvNcP69Wg870nMO611epf24NV+SuE8n0zc2fQi4POMeVyzfvVHh6fVwd/pvFmxMOdIKRgW9+73xpOjqsUZUzgrZU2VM0fKNZcmoHhQG0xnH8+aRAAA5YrVG012dI1oUdKSgpT0/vtp+6YPABd2nyEgQrlqVTs9R64juETNrs0QGeJPezDPJokaXXv5vf8Bq4ffgA5vM7QAAAAASUVORK5CYII=",
                href: "https://www.perplexity.ai/",
              },
              {
                linkTitle: "https://huggingface.co/spaces/ysharma/ChatGPT4",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACp0lEQVQ4jXWTXWjNcRzGP7//+//MWfbGsR00WpO3YZElF8I01oQ7uVBqF+6s5IJYriiuvJf3ckFKEZFQFjK00iYyu/B22DjnbDv/s/P2/39dHCTse/l8n57n6dvzhXFHVEunlLYdlPD4HFB/A6ceSGX70s/r+Xy3ldzHWjAgVNdPzdrrJ247N7a3qsS4arFhWRIMHH0mz5eJdFeLdFeIdFeKPK0RedEs8unqo7efZNF/E3z4IvOiib23SJ6M4upg2CC/WAL5DGRMZPLegV7Vvm5+rXoNoAFsPSdO1Dt/gOEzUSY4BMpGfAERQPALgO5ASFBDh2bMC3Xtb2wX87fA4U0s5Pu1NVh5AlHsPlXN2ZuVYAq5vKLjyFSu3C8D2wD1DWKX2y7sYQGAAVCe7W5CvdMxHVQAqxaPMLM6C77C0IUtzXFMQ8AXsF0o9NpzJiUWAc80ADKxCKRBaSgdmuZ6pLMaeR8yeUXICWioS0OgQNNBhiE7FPmdADcSxzdhNAGuiZey2HU8yvRSn9SYjjMxz7EdA+gAY2NgTQU7EgcwHvdJOd7F1SSGwchAwqPK1ti3sQS3K4pf6hNaG0OPJyEnYCpIDyLxrrbHfXJJDcZleVX/poekboPh/rw8oAUQngiaQCIJyijulIJcCio20x85u8KoKhmpIRgC3QRNgWWBqUMyBdkxCAREg1IX8gXIFcCwoPCV2iqmGOiOj+VANgd2CFyr6OIa4I0WXcNhsIyisAIKo2C55HzEeJOwHtVP6biHVrGSXA94SYoVnAYlMwNQELzRSMWKtVFlUNYM1dvuvR/hoQLovCITOlpZHU4/b8Z7Oxu/YFKx+Ml7f9Y1CjBN9Wxg9GUTupsnXP8q6TTcPd3FnZ1rlPfvRzWKSYvY/+AtYtNYrO+f8wNmYBZLKqvBZAAAAABJRU5ErkJggg==",
                href: "https://www.perplexity.ai/",
              },
              {
                linkTitle: "GPT 4 - Ora",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+ElEQVQ4jVXTTWgdVBAF4O8lL5RaEFwkeYm01Vp/kNifEN2UioLBRXFhwXW7USlu3BdclS6rLgQhLXQhqLEEW1opAeMfCAnRKjRZdCEaDGIaYwmJTUuS4+LNA70w3OHemXvPnDnTSNKNPqSsgS5s1v7f84b22q6725K00l7TScbL/yHJx0nWkmwkmUiynOR+kktJpipusIktfFn2EN7ETgzhFJ7GCN7FCp7CJHZhuwtN3KvkYcziEbyAn/A7eitmBq/hMH4DSfoLzskkTxTM00kGk8wn+SJJT5JPkvyS5NkkrydZTzLQSNLCBD7DHvyFNTxavzyIP4rox/EjduAd7JekL8mnScaS3EoykOT9JHfrbqTIfCtJI8lckstFbH+Hg+P4Fq/i+/pxNz7E23ix0H2ND3ATLyOdfi/hYYziBrqxD//gAfxapT1ZJUxVzI5mOd9hL47gIE5Uq17CQtkYDlTyz7iCjQ6Ji0XKHI7hz2pfC6vV1oVC1IcevILRrpLmcj2yUEy3cAHP4Q2cxTrOYRzzeAaNZj3weYllEs9XrTO4iK9wFddxFO9VCdfQ6CAYLpLOlD+E6SLwMW11/o1DlbyiLfdN1fck+SbJ+SRLSVaTfJRkMcmd0slsxY3X4CVJq1Hj3Ks9ot2FaEt7XDtnW9p62fb/0V76Fxu7TlQgBH/dAAAAAElFTkSuQmCC",
                href: "https://ora.ai/openai/gpt4",
              },
            ],
          },
          {
            title: "Test",
            data: [
              {
                linkTitle: "AI Code Reviewer",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKUlEQVQ4jX2TPWtUQRiFzzu764awcUOK/AQL/4C44JrCwjZWgqX4B0TshE2ppBKxtLBMG0Gw2crGX6Cd2Jm9H3tn7p2P+zHHIpslxqwPvDDMvJyZc14GuAaSAgAL4w6SZfkAAGazmbqu91pI9gEgMf5dqt0HAJiv9q6yUZVkT4gaQE2yt6nvH1WSCkAnIsxMsEQUEekuzkQk/ldARGKWcby04WHXxgMSN7LSPam6+rOIZJtesibV9kVh65+2IcsQaXyka8nCtr8yHV5u8qtmnKmksB9bkpnxMdHOJdr5TDufaOcy47uOZFK495esAvP5vA8Ai2X1rOP5rZsoa7IlmWr3dB00AOR5vht7W19Ho63bxrhTAearRG4CQBQapVQEMR1tDw/LKnzv7QwnuyI5sjK8zo1fhI5MC/dllcMk0+7epVzu5sZNz9fuU92RmQlpqu0xUu1pfEeScVFUrwAgrwJdS5Icn52djdLCxebchaTaPicZyxCZahcVEI/bpklChCjVmwJA7LqJs34qIsX+/n4JcFKW/r6IUJQ6qCOkDiEh+EYAICPH0YRvuzvDW0vjToVqDsR1BhAaUEUIpuOd4WFh/A9pt+7s7UmxHseisI+r0JoyRF7MoV0VSUaSVU0aV5vEhEcAcHJy0rsQkN/aToxvQkPSNqTv/i7bkA3JKrT2LDdTAEJS9Y+OjgCAAwx6g0H/baF9gEBd/WURAGKM4/H20Dm5AYAA5A9Kj+Gd9gOxRwAAAABJRU5ErkJggg==",
                href: "https://ai-code-reviewer.com/",
              },
              {
                linkTitle: "Codium",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChklEQVQ4jaWTy0tVYRTF1/72d+45eY6lNzPxBXpDTBsoSlINwiLoOQl0UCMn0ai/IOg2iob1FzRNJ5kpRJCTkKBB2cOiG2WgqV2v9+H1vs45325glkI0qDX7DfZisVkL+E/RDhIQMKow9pPnhgQ3xghjQwDGgCEAN+cEXV2E4eFwp5XE1b8nECEQCZLjjU7JPust6RYn6y440IlPRz4f7nh0oFCuLy0tHlxrb37e/CTdnurLrvF9DA7m9dYxf38wQsq65VSq9lcF1Yi9bkJsJip70nVUnXQRG4/i2UgCjbNuvtgDj5DyMsCdzQTJh+fZ1hPWaoCaBbfS8qpJ+iY7WAXEJhA/zUmqN/VWrq7o24WIenlpHh/7vj7NHDxxWmE6rpnkOgIjXKRKJO/oxo91FoXEoQts6KyeT8xy2Q0M54j95bw0vosqO0exm4CncKg3hiDsRqEMDpntjYi4GQfCIkpAfqVE+XIWxUKeAuNTqrhMXtoma13XJAawW0FbVSClSAAIQCGRCgmQn+8VIRiBmBCAIJSAKCQoAyUuWCGz8gWElNjaCEMCJ5ByVQAIkQBgbYnWFkVsF0qxeJFaqXiB+LYpeh+wodA2khHme6jxOFR+WPbKZrUpIyqEMQaBK9WmdV9nGGHHaI6YaE1DsNqaM5VaLFz5hqyCgIyfvm1yhYmwybMre2Et9qQ42VVkz4eV7C+yXGjQbgWcOLmik70Fe/74OguZF32g4HeVJa5Uuv+qt+5e3PWNW+sWoovNc7WJmctvB7qnOvJOmVden/nS1vm4ZfL9ucVjWCtdSx899ebP/Zy6a28z1oAQBIzpuP57sUdHeTsOQX5xHLK5lbhsbWbnEP9VPwCguCTRFmfcuQAAAABJRU5ErkJggg==",
                href: "https://www.codium.ai/",
              },
            ],
          },
          {
            title: "JSON",
            data: [
              {
                linkTitle: "JSON Data AI",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4jaWTQW4aQRBFfw9RCKO5CwHhWJYsO5zI4CsQb2yvuEAcfAG8zSY5w/gCROMTMBOC6el6WaQHk5is+FJtqv4vlfr/liQBThHAKfAZWAA+1iL2Tnd4W03TSIEpsOEFFqvBJnLSXWESxV8BQggBCHsWhDgjclMgaZZM42ANsFyWVhRP1qAoClsul7bLAaaN+ATwZuYBy/OcXn8QRuPL7d2j8SW9/iDk+SOARa4HTgTcAXjvvZnZ9c2tDY6OrSzL5nwry9KOPhzb9c2tmZl5733cffdG0kdJOOcS55x7Xq9J047LskwhBElSlmXqdFI9r9e4P0gkIWkoYFPXtQE2nz9Yt9uz2ezezIy6rqnrGjPjy+zeuu/7Np8/GGBRs0n+8tJJSpwQeg1eOP/4/yNuDACTySc7Ox8CbC8AODsfMplcWeyH+D6LRNI3Sa7xu91+p1+rFVVV0Wq1aLVaVFXFavWTdvutmnzEW77vsfGRXn8QLkbjrY0Xo8bG/LWN/w9SsROkp8bWvUE6PMoHfaZDv/Nvo7TGgYv0KfMAAAAASUVORK5CYII=",
                href: "https://www.jsondataai.com/",
              },
            ],
          },
          {
            title: "SQL",
            data: [
              {
                linkTitle: "Text2sql",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACnUlEQVQ4jX2RX2iWdRzFP+f3PJvvUpa5MdLNtkSIhIpQWVCZF/2hInBGSc0R4hoFM7wIK7roz66yAoVVYCTVmJFd2I0UlqnQMpcFXRTaRpru3VbyLle0d3tfn9/pYk2KXj1X5+L7OZzDV0NbCrWTLnVFxRYRBk+NX93/8EfKjm4da6nK4iZimI/98ao3l3z59ZaRpsTJo2k6vevmHdeeB9Bgd/5TEW4EjkBsk5JXmYk7Xc0J44LQmOD2DO5LieVIOCiqr1/VW38CIAgtB85wIW5X8L22D2bVrATqcFi/unfJWouRIO6mggLWU+AGUn2Hw26J+YEsAORiKALYnrZjUjkA1iQOjxPCDTZ5455AEgGm0pibPdI8hRArBaTIrRnuJHIAc53kL5Z1vt44/PbTkwne+013fszQ7ExDaBayZz483j02FYlO2lqf2LeAeUWJWoXy/hXbnqurafhtW03DeM/kDytHjYsWI8inc7Hmq3LIJpB+tBiSdPJ/laYK65tKhXXv2g9V3HxJ2V1VF/2htelFP/rAFZfjNGfKhXUvpIvOvyIdnt54Nt+JVdu3dPMbpUJu7zPFl987F+tbAUz8bE9z4+dzXJiFH7zHCs+XJxbu7Dp5vJ5IL+a19p93XVNd9/uGc9mihcKbJTaBF/+7QZiZaHvWxP3gKqSu+6889j3Sn8BPoSrpkA5P97c07jb+FntwT3NT338Cqq+6abtwzz+LBg6U7pxy9D7QB450YIvLKJVejMBLpYm2Fe/89chbk3HBIQXlbF+QaOkYGV/TB0cuFRDmTDFJnxzIbr0LhV9NsgMlvaBhZ/Gx9l9Gt4pwC+i2jafz3RW/ANB+ZnxDIv/x/tLFnwB0nDp7h5N0GXiYyGoAy8f6mxsH5pi/AcILJT+7w08bAAAAAElFTkSuQmCC",
                href: "https://www.text2sql.ai/",
              },
              {
                linkTitle: "AI2sql",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUUlEQVQ4jbVTS08TYRQ995tXZ7At5SlQxCIGhsaNBhJ3JMaFicYVxJXiksT/YP0HunJLiAsjcWH8AchGTSGRRE0oigqipNREbGc60/k633WBaaKJQRaezd2dx805wO+gP+7/R0spOXC9s80OhF/X2bF1UfbgY24hAJ4JvK0w8t2E8SnG4iKQ7yYUpmKAmAAgNzI7DRIPhICvmJmI2hGp+x8+zt8CCgIoqL850AGAocYN3TFr3g+yLFNrBg1h5U5cGLlbvu3t17R0YhYCQEzE9UaTLVO3NRKPN2YGizoA6LouwzDE5UsTWHn1jsbOZNWa0TWqt6UKbrvDpWqTImZYguB2G7JqthmVne0YQFEAQBwzAYSbsxcxlO3F2XOjxH6VU4396Npx1XQNX3Y0vWhYD6Ib2VieTwT4FjTDVgTPCyiXG0Sp9AWplA1fAebmpth6uWY+TU7gStZBucHc72j0fDekFz7QY+tUBSAAoFYLMdDfCdfNwh0bBCtGRALZtI3JLgvvqxKnUgaqMoZkRiWMYYqDJwoAiKII+fEhrK5soKMrhb6MAzU8rMy8G8VhJL9LyOVyINOWEW1Wm9IhBcXgVoRMJslb22XML6zyxKSLvqTJSDi0pyXNe5/qbGoGKQbeBIw9HCOrI43Gbj3RIkinHW1p+TUsy6JiscSqIYV9+uS6HtQepmWgQR7Y/VxnThA4rNdsKHrSIlCx2rdMAaVi3zI1wDLasfN1af1q753DivSrytNmT4+eSSZ19jzAtkPhO/AqM4/qh1X5nwZzFBx5zj8BjvUF7vCpBmIAAAAASUVORK5CYII=",
                href: "https://www.ai2sql.io/",
              },
              {
                linkTitle: "BlazeSQL",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRElEQVQ4jZ2T30vTYRTGP+f9ft0musWGP0gTvViFiIEQCUFSg34QpHWxKKp1I6Ou+lPCq0Kli0EZ7B/oorzwpiDmLkSxSaZZGYXOFNua372nC1vO5VXn5n3P+57n4Tzn8Ag1kUjk+3xuIClITJUuAEGXVXhV8oqjqVQ4W10vlUs8vlIfCkZGjDrDIiK1xACqqlbK45tb6w/S6Y7CX4J4fKX+ULDphcEMVAMizcL6d/2HyFKe+rG1dimd7igYgFAwMlIL9vnh9l3noEYwOAOhYGQEwCQS+T6j7nBtUU+voafb0BiCUPgAEnWGE4l8n/G5gaQI+zQ7LlwZdLAKngdXr7k0t+4fi4iIzw0kjSCxWvb4TYf2dmFmxuKVoPeEED0q+AL76wSJmcqqKtF/2nDurEPxF6Sfl4ldMISCQj6vxM47NLXsdaJKl6kd3PUbu4ObeObhD8DgkMv7RUtuXunvN0SPVUtRjAhLlfR4t6GxQXiXUzJvLcl7LoWCMvaozMXLDm2HhY383lpFWDKKTlYegsHd883rMidPGVpbhImnZdqOwOCQQyZjmZ/dI1DLpCl5xVFVVYAvn3c/f26DzwebW0o2Y7l1xyWXszwZ86r0q5ZscdSkUuGslfI4wNKikpm2dHYJszPK11Wlrg78fhh77OHt7Km3ujOeSoWzDkA0ev+lvy5wRsR0Zqct/nr4sKB8/KRsrMHCgvJttQpsy1Ob2/nbc3MPvf1maoiMGPkPM1VHIpHv85lAUgwxVfljZ7usIgfa+Tdhee5h5tYdIQAAAABJRU5ErkJggg==",
                href: "https://www.blazesql.com/",
              },
              {
                linkTitle: "SQL Genius",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4jWNgwAGuPn5jbt68+b958+b/155+MMKljgmXBLGAcgNefPiumDL/8NFjt1+6E6vp+J1Xninzjhx79u67HFPnzkuTLz/5YFW44tSOrMXH9uDz75XnH00zFx3bW7D85LbLT99b9u+5MpHx1P3X9tP23ei6/uyDGQMDAwMjA8M/Fy2pVXbqEptq159bxsDAwNAabBSx99qzwP3XX4T+h3pbR1rgRLaDejkjzPS9V5+ETjtws/XJu2+q+JwvK8R9I8tJo8ZJU2ot1EIE+P//P+ua0w9T5x25Vffu609xZDkhHvZnKTaqTUEmCnMYGRn/wgOR2IDDBSj3AqWByLT81L1SmGZjBeG985JsTVuCjSOl+dnvwWyV4ue+3R5iGjEnxc7CSF54HwMDA8OVpx8slp95WMiAKyHhywvICYlFQoDzPgMDg/UcEgLOUkVsOwMDw/Y5SYMhMwEAAbfFXeLLExQAAAAASUVORK5CYII=",
                href: "https://sqlgenius.app/",
              },
            ],
          },
        ],
      },
      {
        title: "APIS",
        id: id(),
        data: [
          {
            linkTitle: "Rapid API",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACBklEQVQ4jY2STWtTURCGnznnJmlsDEWIG3ElsWqLWhAs+EFAqRs/Gkqh/gB/gii4qYtu9Q+4cScmGC2WilIIVdHoQqNUSLsQQURERWu/ktx7xkWuaZoadHZzZs7LPDMvbAo1m986v0tbk4AoANl3/QjbUPuTQu8bQDfU/yIggHJ67ijxrqtoMAjEgRriPae6coXJ/qcdJgiVhxcyxOw9JJZEAzAW1IEY8Nd+UPdPcbf3ReskIZcoQ+VuPHcd8ZIEq46g+oD60gX81VvUlxxevAdPx5v9YZjmcrq9wyAHAYfTZywzTL73Bvnd50HvIOIQOcTQ252tCIbRXANDIn3YmCLWYFyJ6XSVzFwiJCyiCEiCRFdqHRsMudFQKoghFoKqonKSbHk7xb4lhsrdiJzDGMXxFfU/tGJ4kGvkjk9oIDg/wHj70fgMI/OPQQcQO4g6UHeTwt5vrUuUZnJ2YYCYllDxQBUbNUgEtA4aOFz9Gvk9FzsbKaMeqfkZ7Jbj+Cs+iIDa0B4+YkoEwRNM5BHL7iXT6cWWM6pQFB81E7i6Q6wgBuAz6HeiSY/I1iMkdlxC3H0itV1//q37ABXy6YcEa5cRY4n1WJRZfDlB7VeB2uJrVr9MUdMzTPa9avcDrachWxlj7ON7RipTzdK+29F2/g4RihybTZGtHIBxs2FXjfyfIv/TBMBvAofPowSk1+UAAAAASUVORK5CYII=",
            href: "https://rapidapi.com/",
          },
          {
            linkTitle: "Public APIS",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jW2SwWvcVRSFv/ve+80kbUjJJDVSsKlx2iQtRXDTCnXhXgRx5cIuRDeKQjdCi4IrcaEIVitW/wFBUdxWlOqqgmIx1k4ik8SShmhjx6ImmXnvHhdJyFA8q/vgvns4373GlgwQwERz+uEYq2cDPCq4F2SGrTj2lXv+cHH+2hX6ZH11NTl9/A2D5y2EASQkCcDMDDPkWpd0vt366SzgOwMCNKvJ6YFPUqoec3fY+tc3f/cdYiDn3qft67NPASUCmpw68FatVjudc/6yqLxi2Fgw2+/yFUHHzCqhKyWXs0h7arX648MjY/Xba79fskPNmZMxpcsxVTH3uh+0W7MvAOnIkQfHu92/1gBKvd640WrdArqTU8ffTlX1Yim9zdwrp1KI8TkLoSYvGGQgAmVu7upyH5+b23mioezu0SzsCcGfCWY8giR3rW/08ntA2W7uB7xTl0zvAl7+RpKZnQrCDhhmoD+W29cXthu9j9wORQEstVq/CW6agWH3B8CEJBhqNJqDdznfLRsfHx8QDEtmMlIwYwmJYNYYGq1ObDul/4mQANX3jZ4MZvdIksFioPi3hADYP1VKH00cPjzDFsy7I+SDzaPHqhjPA1gwk/SNTTRnHkopfe/SO8HsvhDjE+7lcy/+2sLcz1cBDjaPHquq9LKkJ4PZXiBL8lLKibD06y8/SP5+ivGlbrf7upf8JmLo3818Z9e+u2FwOpjtlVgPMSbh7y7OX/sxAKFdNs/I/XJ9oP6xy7+T+7nVpdbORriR87JLqwAxxsGS8xftvHkOCH2gDg08MDV8MaTwtBdnbePOSGdxsQPQaDaHR9JgxywU93Kx3Zo9A3Rh6+q2KXfy7bXVz/aN7f/apFsrpXuJTicDrP/ZYGS0qpesVxfmZy+we2z8B+UDSXAnYXvkAAAAAElFTkSuQmCC",
            href: "https://github.com/public-apis/public-apis",
          },
          {
            linkTitle: "Any API",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVQ4ja2SMUsDQRCFv9lTgpWk0yAhJthYaGGncEkj2PsfRP0LIojYWaigOVKaUgT/gPgLUgQ7LUxEc7ERBBFFyI5FiBze3kXEV82+ffvezDKCA3cbU3OCPQcMgIrsFquduks74iJF7ArKzDeh0nTpGCTEoeXIoVkMHq9/baA7GFSWIszpoGqsLYz+1MdGuH/KzSOMRzI+Wpu5I5QKdLNAPtVAjfqoRJkA7VeCbg0dATV+jOvjVTOZ6nADdBF4E7hUZBt476dTmz5svww1UKg89yazhSBcVsMZMAZ8Gs87cLUV+4NiEN5ACIBY64MgUM8fP4Qug4Q9GFyaMmB7RvaTNSlQ1FfkonTSuU3SOFcZoLU+UQDyau1qepdJEK8MXJVq3cbfDFRnRWQv7fG/4As7vFYT6+UwAwAAAABJRU5ErkJggg==",
            href: "https://any-api.com/",
          },
          {
            linkTitle: "Responsive Voice",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADDUlEQVQ4jUWTXWtcVRiFn3fvfSaTmMzETGemVBOLVqEBwTQEYi2FGlBRc1nQP+GN/gAFtT/Baz/wpvVOA4XGlKQVDRLaktpGK6k0X5NmzplM43yds/frRdu4fsCzWIu15Lyq/ahavSSN5FRmbE9UDQIgKEoIGYdSECE4rxHF4b/OXLjwrqBqr1erl/sayUzLWkQVFcEYITKOo0dPoOLIfIYBxDpCc4+NXvL7Qj153QGKyD+IqKqmiLhcmtLMPCkwPGIYdBHP9hfpOIO1zv/bPnC+S+1T4CkgERAjImmnI6uVqpiZGTrFIvejAQZbHYrLN5k88NpfKOLTrljLDoBDRLVcjrEW7fbk1slxdR9/ItvbO/T3RYTgqSOMTE/Q/PoS78U9UZTgNQG8AQguF0eg20aQDz6U+2trjL8wxtnpaaYnJulLPVd+miM9/77+nXbUaSAY6oioA7Dl0sMsfkg2NGgYHGT+4kV8t8vVxUXiOOZIqcSN35aZnJqS0cqwlHb+VJ+PEp50QBgZqXVFxPmAT3v62Refy+zsLADee6y1fP/td6zcXqWLmG4I2FJ1l909DEBk801UvTdGECtjo2OEEMiy7BDy2qkJKpWK2nbLdDVDjhR3gccAjfJNoqiXbzbVJ7Gu3buHMQbnHNZarLXcvnOHoU4q5XpDewafc7ZxCMgO0v3U2kcVH8QtLbLXanF5bo5GHLMfJ1y9Ms/WfoPc8k09FpSusJ/XqHbYwZmlH5tLpVIt15ervHjtmv5RLuvdt9+Ruxs/oMGDCNGvK3p6dV1tPmcCul/s73/0ePAAqu56tTpPI3lDnNNGq20fjD6PeeUkQ4Uyuc0a43tNjpWqvlHfkvVk/dbZOJ4SEe8Ob2JMuxi8feiFwkC/vrq1GfyDDfPyS9M8M1gIraGCiZt1J8k24myQJ+ZOQUTEc/z4V+3hEXWdzgQ+q0oUWZPP0fQHxNtb9qB7QNv3an2RveEGSt8A/v8IT7WgbuXLtyrZ5ua5dq32pgn+nPdevDEL+UJxQZ478fPpX+ZriBx+/D84ZoBkls1QAwAAAABJRU5ErkJggg==",
            href: "https://responsivevoice.org/api/",
          },
          {
            linkTitle: "Movies",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB40lEQVQ4jYWTv2vUQRTEP7PfzX3vvMQoGjTFIYqgRQQjIoJgp0UKOxtLjf+VlVYWtoKtiJUmlWBloYiKpEi4X7ncvrG4O4yil4XH7rI7u/Nm3tOd+4+vfvzy88lub3DNyMICxL+HZ3eW262ty52VTa3euLf1bae7DlEEaQ740CMEpGr11OJ27g321+USqUozsOcxmJ6lKCV6g/31ZNtIyfZRYGYf2NYU4ywJ26SUDCgi5ueQkiQ5IiSJbFuSKOMQNvWxBp5SwZrMM/4SHvSxJKkCWxMGJVhcbrLx6DYnL3bYHWX6btCNBbqlQS8W6McCfWr2Pn1m//lT6O6BRE4pwfCAWw+uc3PjCl93ArlGURPRoJQG46g5KA2qcUXVuYS+/8AvnsHxRfJM25wTGKIEgXEcjoAIHFN1cp4lSQ4HNDNvXn7g9PmznLjQYTQacmAzjmBcCiUKUcZYTeLdW/z6FdRNCKOltbvuDkY4AiXRbDex+S0kEyFtQML9Po7AqWKp1SBLsm1VuTKgYXf4l/H+Y09VoZQcJYTkPKkjMbXTqUpHl/LUetuk6SokzarQ88CAJHmKUWq36m2rSiUcEXaEFWH+E4qwSzisKrVb9XZeO3fmYU7pcDvD0e2cltut95c7K5u/AMXdMdSymZghAAAAAElFTkSuQmCC",
            href: "https://developer.themoviedb.org/reference/intro/getting-started",
          },
          {
            linkTitle: "Pexels",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVQ4jaWSPU7DQBCFv9nxOgVwCRAFFaLiEimi0IAA0VBwJNpIICqsFEicgZIawQU4AFbs3aFIbNYJsfh50hY7M+/pzQ/8EwIwfrjdpgqvv2J63SmGp28OoCEHqAFEBLf0GjQ1DSfryoYQUcq6ZCDeOladE1vUgLa8joCgajHa49GlX3Y8KiaVE/FRtBPvCohgCaGJX+0f+un4wo+KSYUZONdyHGugzrUurp+fqjQXYmz/awUAIqy0soysL2lmbA4G/mzv4G8CGz7nZngCfM3EqUoMod1Qbwu62H860JTc6+B+dN7556o+mBGg1oTXEYhWBxB3PL0LW/l83+/lRwQItYW5rZ5DAlWIVsZZLMskmqwUdLWFuprtZj5/UcjSI/kOmnB6C3+KTwTLb/qbCU7NAAAAAElFTkSuQmCC",
            href: "https://help.pexels.com/hc/en-us/categories/900001326143-API",
          },
          {
            linkTitle: "Nasa",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADHUlEQVQ4jZWTS2hcZRTHf+e79yaTmczk3ZmkeUgI4kIMNqYPYshYkooVH5tEcePGtOgqQUTo6pZKKupCCEXqIpsi1GShIAgKtXnZmj5Aayk+mlZt0jaTlpjHPDL3ft/noqYVdONve86fwzmcH/yT/nEHrPCf+Ope/QEW1IPm/nGHiQHd8NzxaG4j6AtCvUuECmPIGJHJQio1y8SABl+Bbywo7k/7OxzvHn1xMwxHgUbPVbbEVYKIDbURbc0FCe1g9szw9/39/c74xIQNnnyoU7bC5T2jb+hQH6uvjdloxDPruaJdXsnjuQptjIi1joJ81sb2h7ODk/nutsOe6IsCkOj5sFMb+S4acWlOJWxmJedUxEoJQ83NzDpGKXLGC404bje/XZ22Y4shsVPezPwRBaCteiubLSqtrclmi86t22tc/nmJVe2QqKsmn92kV667JzbHg0/Cz9pOyo6MNzN/5HQ67QqPj9RVVsZ/fOKRbclrC6s21VgrN5aytCYj3Jy7yMsd1ewtW0adn6G8pdn4G4+pL+4mL3B2sBNARUtKmgshdR+82cvI0FPycGGRkU7N5NE07ySvcfBAH4VdvbxX2oO8/a6kX30e1pbbnh4erwZQubyx9TE49/kpnm2vZU98A6fE4WrWY27f63w8dpqdrXF2vvIC3/y0yjMdDdQ3VdmvJq4AICd2790xFuv+OuNV1pQkEnbZRKSAw4HWAt7iPGfCJHfKk5TZgDsrOdOYSqhff1+5dOPLg+0AAqC6jp30RL+kNWG5BO7u8DoVyRpubX+U6QsLoIs0NVSilASZu1nPWo4Wzg4fIu27CqBa8u+L4+iWWOjs9/7QC7HtfPpnisu/LFEVd0luS5CIlYZBaLxIxLutXEYBSGOcdNp3r0wfWmxv6cjVBOv75txmMlJuysymCYw12lijtbHruaKbKwRFZRnYmBn6AXzFpG8EYLarK95lvy0T53hnTIofOZim0GLl3orWWkSES46yr61NDZ3f+t77N7CgDuPj4xs6/Gg0WtUnYveIoRKRjIWprLMyxaQfbsn0L1ktyP/VGeAvpvRsGaIanIcAAAAASUVORK5CYII=",
            href: "https://api.nasa.gov/",
          },
        ],
      },
      {
        title: "Deployment",
        data: [
          {
            linkTitle: "Northflank",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACN0lEQVQ4jcWTS0hUYRzFf9839zY6M86k4yNDrRSFXlAgFYH00o1SqzB1U4HGJPQgrEUUGBFRG5UisJeQUOjChQsxN0W4VCgkqo2RJFKZTeqoM/e799+mBLG9Z3ngHA6Hc2CtoVYxAwNh/L5ylJeGuHF+LoxQW5tCUIxe34FIIRoPn4yx69aktcrAyonBbCN6aQpR+WQHWoB+Rm8Wg/MYxEUI4aq3jLTG9Apx/9R2kpE63HALoa+VIJ0odY7BwSzc4F7EGsZvatBuHUIZypzwLYtfiaUT1g0R/Z0Fp4NfR3ajlIMdP4Tt2Yj5gFFD7Ln2jabKBEqOIkovJyia4GAg5d+HE2nHty0fdDupvC14uguhgWR0hoqLE3+rq0FUFMwjDXDsjmTkpLiQnVR91PrHcImBbwpnfSdJ7xmKcbR9CoA3T3MwwWbE6qb89kcLIGxzPJUkyxieACDYaAxBPDbNCz+CBsU6ALR9Ei9o8PRzAB1rk83pHo25KR6+O6smAXDpQihh3q1nsuA0oktxecDQUCkmVI8Xusf+SzMA2nNpUrBgOfQBVHRK/s5FwkAP6EacvGmMdQVfYBwi53Ej75mNvvzXnQY+Axm2YsOZVgkULtKcm6QMQxeoJIniAqqqXhPfegAnswIT6aC6Ork8m0XhRZriMJoeQsSDhsyNQgMNappeuQ/cpVeqcZeKcFQvNWWjK3bXfVklYm1yVVzKUfg8+FLym08AhBhgjjkUUcRewksf/t8f1hZ/AJoj25GLgq4IAAAAAElFTkSuQmCC",
            href: "https://northflank.com/",
          },
          {
            linkTitle: "Zeabur",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdElEQVQ4jcXTP4sTURQF8N+bmcwk7ko2YKGCoLJfwUasFgQLCy1sRPQj2NqZTrDRym7tBMFeEcHK0kabbQ2Cf8F1FTabZOY9i00wmFi54Gku73LP4bzz3uV/Iyye+3/20Ic010iLMwfh4Ix7p0vl8Vqoc1mo1drKMPByOPB4iAJf8XnGKaaOMkI85dLtNUevjpgEoYgmOoqwY2DAiLyguY9byBAzuDJ1kit7q9rFIe3Oiqq1YrV1WLsoreVoB6FCb959AU+IUGse/TTeGtMUSgXNF1snPnp2I0cWmrcheT7eF4gLGSzBZVzAOzzFm7+FGJAor2WcJ+xVIW7cWU9HzvWyV+tV8343NfmPoPtt6MXZ1zYTIZCmIcrQMN6IXIdWxs2TaLko0k0ca7O9rcbmjDMTmH2M7xhiEpPq056820iShFrU2q3tzHNmAnFa7+IhmnEUHgx0qkIwIQZJphiNfZjeecb5NyzZhd/oL3ml/r71g9uFX4u7dTKvxxk5AAAAAElFTkSuQmCC",
            href: "https://zeabur.com/",
          },
          {
            linkTitle: "FL0 - backend",
            id: id(),
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACYUlEQVQ4jVWSz2sTURDHZ957SXf3pU12+4OA0eiltV4sQSwUgwdpbQn12KP/QI/qpV78Y+rJw9KKoWBzsCFVerCgUIophpJIggWFYjbZZN+Mh60B5zAMM98ZZpgPuq4LAIiIiMzMzHGAiIDADAgQZwCAmRUACCGMMcYYKaUQ4koNwMMIAUiIuCSlZGbpOM5gMLBt23VdIjLGXM1DxEyGrbEkc7xFEARKKdBaFwqF4+NjZt7c3JRSTs/MZMasydWVa51z69XLpxsbxHxyclIsFh3HEUEQLC8vLywsVKvVer2eHEsSMwCIJyWYnlIfj86/N95X9ufn50ulUhAEgpnjG7a2tiqVitYp0+uJGzm58ij6dGR9+Xp4/PnFs+fGGCICAAEAACClTKVSiUSCEaEfiodFvHWT3u3Rr98J206ldHw0AEAul2s0Gq1Wa3Z2dnx83JucdCcmZnbeZH82vXsFT+t0JnM9lzs9Pe10OnNzcyIMw1ar5TiO1poAoNfHO7fFgyX6cMCn38CyyBjLttPpdLvdDoJAXFxc+L7vuu7U1NQwGqIxcnUZ02l6W+YwRCmHw6Hnedlsdnd3t9lsCkS0bTuKIpVMSmLwXLH2mOp1qtbQtplISqmUiqLIsiwAEIjY7XaVUq+3tzfW17uFu+r+Eu3t04+2tKw/l5dra2u+7yulwjAEAKW1LpfLi4uL+Xy+NxiKW3k6PDD+Dv5jpN/vn52d1Wo13/e11uh5XhRFURQppRBRJpNsDBABYgwlEcXICCESiQS6rjtCFQCYKEY3/s8IxNgTkRpJr0wI/F866oyDvxJLL5k/feHlAAAAAElFTkSuQmCC",
            href: "https://www.fl0.com/",
          },
        ],
      },
      {
        title: "Componentes",
        id: id(),
        data: [
          {
            title: "React",
            data: [
              {
                title: "Bibliotecas",
                data: [
                  {
                    linkTitle: "Tailwind Elements",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVQ4jZ2TP09UQRTFf2fegw0sm40mEkENFSQUVnZoIoaGUFDBfgy+DN9CLQVbQy02JmoioUGjIfwJsOS5u7w5FEveuktWXzjJTHEz93fP3DujVxvvmjYJQ2W1Lo84+/mFB7MvUOgeFZYhT8EjkkaHAwQGx4gdCUUtIdwOwxPLKbXZNvSBhKNCWMCeBAhp5QSxA0Huz4/ph9/Z2iD12f5pqD1/9F6wBDA6Vv8+fjzX2Km34i0HvGnkg8FdHBcXtoz+MjX9a2SxOlcAftQy722utNIy92w1j59m7cuPE9UzKaSAeSJ93oNGKYCdjznGeWOCuoaAExho3l1UyoFCek7gk1AgdsvafC0NqFTvfeuEmeVm53HRxNr0hf8DMBRjkOuHlbg7sd8b4ymw/jop5aCTnc+2Hx68fTk5JZIEiDdYx1KA/OrP/atOtmoiCaHnTPzjL2jg1brY+jTUgUxEbnerCXSzejQM+TVSkoX+/tZreAAAAABJRU5ErkJggg==",
                    href: "https://tw-elements.com/",
                  },
                  {
                    linkTitle: "Chakra UI",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADDUlEQVQ4jVWTTWicVRiFz/veO99kJpPmrzFpQ7BSxDRuXInaGttsigq6EHUlQhECrkWNRXf+4caVtIiCCm7ciBsxSBo1sTV2IVatf8VEiKXOTCeZzCT57nfve1xERc/+Oc/qEexNABAAnvrq2zt9OXtCyWNWxEMAVZ1fE9XPQ8F3Xrv9yGd7CAUQyt8HePjcudqhwbGXkGxWSz5LIcDMqAImUfWlDMJUQOXs1au/P/veyZPdPTMpj83PV4f2j3/U09c7s72xkUgYQHWiyC2h5j2ciG3F6GoDgxq63YX1TXnwg+NTXYUI940eeFn7KjMbzWZe0KQQqglkywqplrweHxvRDpNLQm5uNHPUqjMj/fFFiFBOXbx4zKlftBgJUgFARRHMWFaVualJfLi+jpVmC33eIYEEhOq9xTxOa3LuVHTqgiUWIJIAHYuAUk7fegT1PMdivU51YMcSClICE6PTLGVu1heW7kaMNJgqlLspSlmVz9wyKRPViry19huHezKpOAcCaOY5FNBY5ARwVB668GUhgAJAAjCcZXhhcgoTlYoCwHaMVBEoBK9f+ZVL1+voUcdEqgCFL2AmIgoAwQyHa734vtPGSqvJguR9o2PSqw6v/vITFxt19HqHnEkIQijqo5NVEDdbsqQC+bTxp3xcv4Z2kdv9NxzUBw4c5NOXL+HC9QaGsjICE0gQ3omKrGqALceSlwLGQJOSCimG2waG5MmbDmPu8iUst+rYl5Wwa5EBQIBZ8k5y8gvtFjyTxxCiUCKMHYvIVPHo+ASe//k7LLUarHmPbYsIMAmMiKCEGNJOCm/r+bumV3LaGfbXfLAUdxllengE7/+xhq/bLauWnGwzMcAQBSwsFdbf54PgjeU7TiwpSGl3r53e2WovxIFaueIdlzYb8Zt2i9WSyg4jCkuIYAqMwsH+8m6nvXCluToHUv6NafSTd3vH90+8koyzplJyMcIsGSAQUZWsBBQxiOrZvNN47ocTj3T+yfh/OU+uzN/jxT1uZtNI8UYABu9XFViORXzzx6P3nv8v8xcxV8KZUJlbuQAAAABJRU5ErkJggg==",
                    href: "https://chakra-ui.com/",
                  },
                  {
                    linkTitle: "MUI",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB2UlEQVQ4jYXTz4tPYRQG8M977x2ZQbIislGUvVhMTcqvjY0yKUnZoFgoG9JwZ4YUI9lQisWwMwsTK8ICWfAnsLAiqZkx5htm7j0Wc2f8mhnP7u2c8zznPOc9QHfkysjMh7/j3ZET6d/EMrI/AguRNkjKKNROqzxzIb1oCgvUylQ376NqE/rSHd2R2+gw3upLjzMt7ejV5qkyBpyJtco0pUy1M9GlNx5a5oZkN9horzWuCzuh0CGpfZJZqcNJ4/bpicuSDQrHtOG7Shhvuq6NeIO70wQtYbFFapPGvJTbarlrEsa8V/mgwxZJgI/uu5nuzXiQqdUo1Ebkdqhs1vLEuFsmbJL0yxtluJkmHY/Vylg13cFSSQj8QKE/vcb2WZt7Yikq0dD0RKclHmi5jIuZr0JoF1b8sboyMr1xSOaiXIGiiXVa1uQiM5Am1PZjENPul7FK7ZE2t+XWGTMsc0mZarkvKlMzIxXgfBrC0Kx6Zb1Ftqn8MOWUvnS16Wq7cASFpOMXQRmZUigbpxk15Zt2i0064Gx8kXRpc1CBUc9NGp7+iXMiMj22yJ3TblczLC3v0O+cQVIsQPAbemOPzAmVV8YNuJI+NyJphmRuzHdI3ZH/V3TOgr8vtcFPIFy3mkBsQH4AAAAASUVORK5CYII=",
                    href: "https://mui.com/",
                  },
                ],
              },
              {
                title: "Acordeones",
                data: [
                  {
                    linkTitle: "Frontend-Joe",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jW2SwWvcVRSFv/ve+80kbUjJJDVSsKlx2iQtRXDTCnXhXgRx5cIuRDeKQjdCi4IrcaEIVitW/wFBUdxWlOqqgmIx1k4ik8SShmhjx6ImmXnvHhdJyFA8q/vgvns4373GlgwQwERz+uEYq2cDPCq4F2SGrTj2lXv+cHH+2hX6ZH11NTl9/A2D5y2EASQkCcDMDDPkWpd0vt366SzgOwMCNKvJ6YFPUqoec3fY+tc3f/cdYiDn3qft67NPASUCmpw68FatVjudc/6yqLxi2Fgw2+/yFUHHzCqhKyWXs0h7arX648MjY/Xba79fskPNmZMxpcsxVTH3uh+0W7MvAOnIkQfHu92/1gBKvd640WrdArqTU8ffTlX1Yim9zdwrp1KI8TkLoSYvGGQgAmVu7upyH5+b23mioezu0SzsCcGfCWY8giR3rW/08ntA2W7uB7xTl0zvAl7+RpKZnQrCDhhmoD+W29cXthu9j9wORQEstVq/CW6agWH3B8CEJBhqNJqDdznfLRsfHx8QDEtmMlIwYwmJYNYYGq1ObDul/4mQANX3jZ4MZvdIksFioPi3hADYP1VKH00cPjzDFsy7I+SDzaPHqhjPA1gwk/SNTTRnHkopfe/SO8HsvhDjE+7lcy/+2sLcz1cBDjaPHquq9LKkJ4PZXiBL8lLKibD06y8/SP5+ivGlbrf7upf8JmLo3818Z9e+u2FwOpjtlVgPMSbh7y7OX/sxAKFdNs/I/XJ9oP6xy7+T+7nVpdbORriR87JLqwAxxsGS8xftvHkOCH2gDg08MDV8MaTwtBdnbePOSGdxsQPQaDaHR9JgxywU93Kx3Zo9A3Rh6+q2KXfy7bXVz/aN7f/apFsrpXuJTicDrP/ZYGS0qpesVxfmZy+we2z8B+UDSXAnYXvkAAAAAElFTkSuQmCC",
                    href: "https://github.com/frontend-joe/react-accordions",
                  },
                ],
              },
            ],
          },
          {
            title: "Generales",
            id: id(),
            data: [
              {
                title: "Sliders",
                data: [
                  {
                    linkTitle: "Swiper",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jV3TO4jdVRAG8N+c/91793HDagpB8QGCBNKJL8TCZgVBsLIQREVBhYBaBAPR3LC4UQSTQuKCKBgsRRAsxC5KxEbRIoVaCQZTaBVY3fvae8bi/r27cU515sx88818Z8LCMoi0lUdUT2s8bOaoYlXjkr+95u247H8W193O5Os4jsN6GLmCs9Il6VZhQ3HVqTh7ACAL2HJBzzN2pK7AtqEtfY9Kx6R7NBoNJj50Kl4iy5zBWznQ9aYdQ8t6Zj6161WHfGHJg0bYU7En0dc1dsIg3g2beVTje9WyKvV0jGxY8pQVz9kxEpZQWtZVIOyYuLfgRcWaVKUQKNZVV+azbT37TRczqXGDxvNFsWEmpUZBlRon/OW8Xd/q60nTfbFakHncI0V1u8qi9ljVeMAt3vebx018YkVXmrXp89iKdEdnIWVtiRbFyNSKJ93lNtc8Yd3vlp02NFOukz6K4mqbmAt30TE0VTzkRt+5ZtvU51YU2TZcEP4oqq81QrbTzRZoDjLWuNO6d0xsL16iZVJdLPhINW77ygMUq1hUWhXGsj0U1T/4uNiMn6TzVjXSVNpTVUWjb9nUj/a8ousFRQhjaxrpnM34uZBFNTDxpb6eriU9jfCLqWP+9JiOk8Kzhqo1q8Y+c9HW/leGl7PnZmekm8x8pbqs4z6c1HXEGGFXeM8bBsTswDa2q/yfDfJuXR/ouN9ECr8K30gXnI4fDsjoXyvpyRziaYGMAAAAAElFTkSuQmCC",
                    href: "https://swiperjs.com/",
                  },
                  {
                    linkTitle: "Splide",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkElEQVQ4jY2TTUhUURiG33PmOHPvzJhi+VdmlCi1aVHhQhcxpS1qU5QRuYtaBhkGCel8Y5LuKrJ1YYsWugiixB/ShUIEUYsoEiRyqhnNShvnzp2Ze8/XQrQpDXuW53znOYvvfYH1IEgAGPhc3HtvpuYuABAvn23IyuBgTNHoN5MfxHdzz/ThSK74nzBDAiz6Pu6KvEqCn8QC2b5odfb27BFunTrbuSyhPySe3J9DAvrCu4WON2ikTdlotlR9EfNOCayM6WZ8W0JV5xvw+vSNcRBJjI/zqoAYkgR0z3Rjh2MURmZ+VjqjCydFaXBWFfu+yvlUEVtZv7aN0kPbzh3H1Jm2VYkkWn78MFoR9gfcSNoSjoElnc4vV90zd0actDscKJRKa6HZTjswg1T7sj8MIg0mKYmgx+K4lh90yLbgQLtAfoHXl5qdnBvac6q6InrCtnjCKMjzuo6ATtkOzHza+XyiHYK0HJvDTa8P122LHTBDmF4PkksjRvz7USaROCBgzcS8x2zLHc7zSw+YwamUo73BzsBk9JaEBsAAxAb71SzWzAhmGSpDS8ZGu+EXCkKAUxkX/mCjXbZ5UPTwpqE4AtvL0k+NoGrMWtqFEBCmqaSTbE/WVbbIpiZ4QlvRtbioyPBDQXqAxGImbZbUlR58OzCfqXxkBmW9vZjNeCRDmoZCKkEfauu7wCRlfz9cYsjmHZ8iVtIT9vmhbBGUvkTMaau82OA1ZIP1QztSshSmTwk7GX6xvykCIglBWgIACWhiyKtVI52JpAoXBRLqcnkr71PPnCXbyCql2WN6lbaT4cd7L3WCSIJIbxzl+O8oX3nfHFkvymtYKdNQTIVXytQ93UDLl//ZyNw634/W9OaK/+YXLT1F9CAJT5cAAAAASUVORK5CYII=",
                    href: "https://splidejs.com/",
                  },
                  {
                    linkTitle: "Swipers & Sliders",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
                    href: "https://codepen.io/collection/JGBQEk",
                  },
                ],
              },
              {
                title: "Notificaciones",
                data: [
                  {
                    linkTitle: "React-hot-toast",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACVElEQVQ4jaWTvW9cRRTFf+fO26+3sNrGFASBQAGZyKKiSToaJHdIUCKlokoFogIpTSTo6KgRBSWCGiRK9g9IFEdxkRTgxhLYG6933743cyiebSU1R5rm3DP3zjm6IwCDBAYmH7wenyWl901pLQQgYxSVyYs/npYfgMYQgiJAgD95p94Hf9eZtzDZQkLqB9gYIohEHOaWz395svodLgRPPv7wowI/GdfZGEkCbAMgCQMUO4UkeRXWp2/+/Nuv+vPmzcm1a/PH0yq9tsm5wyS7oIiLxwE2z3F5XEW16rqjv/86vR478/kAMd3k7C7nlENQT+lAXcn9CYl6Sga63KVNl2002ZnPB1VeLs305YKkqKqy8/U9Da/vqjk84Pibu9jmla/uMXp7V9vDRz7+9q4pJWSXvHzmSLOZkOSSYTTWcHdPUdeMb7wHKaGUGL27R9Q1oxt7YjjqtZLSbKaKC0ii2Hjb4MGAst0Sdd1H0LY91zTYJqTLa1w14DIyBZLQZMKr3//YFwYDJPU1XkTwP/FCAwO4YBuv1xzduc3Rndt4ve53wqXXPIcrC7aRRIzGvYXBgLJagUQMhz03HPVLZV+tSOTl0thWBGwbNwf3Xc7PaQ4e4JwhZzYP71POz9k+emCajRUJbOfl0jrc358NX+JpQvOcO6gqaTzGmwaXrg9XCU3GuGmgbZ1SojOn7Yo34vjkpBU8GybJEaYUl7MzXDJSIAV2oZydQc52JA9TSOL0+OSkjVuLxbqU8kWx/6kkI1kpXXm9zEYpgeSq/1f/5py/vLVYrP8DzitCksoEV+oAAAAASUVORK5CYII=",
                    href: "https://react-hot-toast.com/",
                  },
                  {
                    linkTitle: "Toastify",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jW2SwWvcVRSFv/ve+80kbUjJJDVSsKlx2iQtRXDTCnXhXgRx5cIuRDeKQjdCi4IrcaEIVitW/wFBUdxWlOqqgmIx1k4ik8SShmhjx6ImmXnvHhdJyFA8q/vgvns4373GlgwQwERz+uEYq2cDPCq4F2SGrTj2lXv+cHH+2hX6ZH11NTl9/A2D5y2EASQkCcDMDDPkWpd0vt366SzgOwMCNKvJ6YFPUqoec3fY+tc3f/cdYiDn3qft67NPASUCmpw68FatVjudc/6yqLxi2Fgw2+/yFUHHzCqhKyWXs0h7arX648MjY/Xba79fskPNmZMxpcsxVTH3uh+0W7MvAOnIkQfHu92/1gBKvd640WrdArqTU8ffTlX1Yim9zdwrp1KI8TkLoSYvGGQgAmVu7upyH5+b23mioezu0SzsCcGfCWY8giR3rW/08ntA2W7uB7xTl0zvAl7+RpKZnQrCDhhmoD+W29cXthu9j9wORQEstVq/CW6agWH3B8CEJBhqNJqDdznfLRsfHx8QDEtmMlIwYwmJYNYYGq1ObDul/4mQANX3jZ4MZvdIksFioPi3hADYP1VKH00cPjzDFsy7I+SDzaPHqhjPA1gwk/SNTTRnHkopfe/SO8HsvhDjE+7lcy/+2sLcz1cBDjaPHquq9LKkJ4PZXiBL8lLKibD06y8/SP5+ivGlbrf7upf8JmLo3818Z9e+u2FwOpjtlVgPMSbh7y7OX/sxAKFdNs/I/XJ9oP6xy7+T+7nVpdbORriR87JLqwAxxsGS8xftvHkOCH2gDg08MDV8MaTwtBdnbePOSGdxsQPQaDaHR9JgxywU93Kx3Zo9A3Rh6+q2KXfy7bXVz/aN7f/apFsrpXuJTicDrP/ZYGS0qpesVxfmZy+we2z8B+UDSXAnYXvkAAAAAElFTkSuQmCC",
                    href: "https://apvarun.github.io/toastify-js/",
                  },
                ],
              },

              {
                title: "Acordeones",
                data: [
                  {
                    linkTitle: "frontend-joe / es6-accordions",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jW2SwWvcVRSFv/ve+80kbUjJJDVSsKlx2iQtRXDTCnXhXgRx5cIuRDeKQjdCi4IrcaEIVitW/wFBUdxWlOqqgmIx1k4ik8SShmhjx6ImmXnvHhdJyFA8q/vgvns4373GlgwQwERz+uEYq2cDPCq4F2SGrTj2lXv+cHH+2hX6ZH11NTl9/A2D5y2EASQkCcDMDDPkWpd0vt366SzgOwMCNKvJ6YFPUqoec3fY+tc3f/cdYiDn3qft67NPASUCmpw68FatVjudc/6yqLxi2Fgw2+/yFUHHzCqhKyWXs0h7arX648MjY/Xba79fskPNmZMxpcsxVTH3uh+0W7MvAOnIkQfHu92/1gBKvd640WrdArqTU8ffTlX1Yim9zdwrp1KI8TkLoSYvGGQgAmVu7upyH5+b23mioezu0SzsCcGfCWY8giR3rW/08ntA2W7uB7xTl0zvAl7+RpKZnQrCDhhmoD+W29cXthu9j9wORQEstVq/CW6agWH3B8CEJBhqNJqDdznfLRsfHx8QDEtmMlIwYwmJYNYYGq1ObDul/4mQANX3jZ4MZvdIksFioPi3hADYP1VKH00cPjzDFsy7I+SDzaPHqhjPA1gwk/SNTTRnHkopfe/SO8HsvhDjE+7lcy/+2sLcz1cBDjaPHquq9LKkJ4PZXiBL8lLKibD06y8/SP5+ivGlbrf7upf8JmLo3818Z9e+u2FwOpjtlVgPMSbh7y7OX/sxAKFdNs/I/XJ9oP6xy7+T+7nVpdbORriR87JLqwAxxsGS8xftvHkOCH2gDg08MDV8MaTwtBdnbePOSGdxsQPQaDaHR9JgxywU93Kx3Zo9A3Rh6+q2KXfy7bXVz/aN7f/apFsrpXuJTicDrP/ZYGS0qpesVxfmZy+we2z8B+UDSXAnYXvkAAAAAElFTkSuQmCC",
                    href: "https://github.com/frontend-joe/es6-accordions",
                  },
                ],
              },

              {
                title: "Loaders",
                data: [
                  {
                    linkTitle: "CSS Loaders",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRElEQVQ4jX2TP2hTURjFz82/tgRKQyF2dKyCVihEpVpx6eJQopvYWbI7xKXWjm0k0CVQBZ27OdghUDIoGYKLNGjh0RjTYEiW5r2X9N33rvcdB3mhPpoeuMv97u/7DufeC4RkmmZGSlnSWh+RtEnaWusjKWXJNM1M+PxI1Wp1Skq5pbW2OEZaa0tKuVWtVqcCTpAUL1uYeX3FfZ+YmFgFgNPT0++9Xu+TZVk/AGB6evpaOp1+lEqlrgOA53kfDw8Pny4uLjoAgMH+hwJJej59wzAK2Wx2Nuwwm83OGoZRUEppkhwMBgUAwMkd3Nb342d885yNb1+3A4Bk9PwK9huNxjZJ+r4/7HQ6GVh3I+/4ALQXUH8BJEkKAiLsgKQgKdbW1pK2bddJ0rKst5BLOOZD+L+XYpv4B0fGBU0yAgDtdnuTpC+lPI7EgTlqCN/7U4cQxAXTzymo1QEgFovNjaZFBXgJ+J8SiYRPUgBAxCV6IgpORjEPUACXNiIAxOPxeSEEPc/rRmyNzwBEMiay+xAJkBwXIgDu7OxMJJPJxwCEaZpfULuBZXUPkhnQfnZz4xxw4TXatv2KJJVSTq1WWwZA0V5AiRtP6Hd+ekOl1iuVymTYQaVSmRwOh+u+73sk2Wq1SiNrxVtXZ7q/mgfBm1dK1RzHybuuu+q67qrjOHmlVC2od7vdg2KxOBMECQDI5fOpZqOx6ziOHPeZHMeRzWZzN5fLpcIOR53K5fKKYRh7/X7/RCl1ppQ66/f7J4Zh7JXL5ZUw8xfcb7un+fn61QAAAABJRU5ErkJggg==",
                    href: "https://cssloaders.github.io/",
                  },
                ],
              },

              {
                title: "Code Pens Collections",
                data: [
                  {
                    linkTitle: "Tailwind Components",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
                    href: "https://codepen.io/collection/DrZKOd?cursor=eyJwYWdlIjo1fQ==",
                  },
                  {
                    linkTitle: "SCSS & JS",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
                    href: "https://codepen.io/collection/YyadvY",
                  },
                  {
                    linkTitle: "UI Interactions",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jY2TMW/iQBCF36yNlDQkSnGUaJsUSFGCDBWhgdoNPVT8DeTkf9DwExA/ggonSFSuQIqE7honHdKu510RGyXKFbfdm52dHT29DyRHJN9IFiQ9SaqqOudYHeccVVVL6cveN5IjIfkbwC8ACkCKokAQBAAgLy8vAIB2uw0A/HJHAAbAH5RTC1VV772WGzBJEgZBwCAImCQJqwW891puU5CklI9FRCAistlsMJ1O+fHxIRcXFwCA0+mEq6srzudziaKo+hTGGBpVNcYYcc7JbDZDp9Nhs9mUNE3R7XbR7XaRpimazaZ0Oh3OZjN478UYI6pqoKq63++11+uptVZXq9XZvMFgwMFgcNar1YrWWn18fNT9fq+qqiDJxWJBAGy1WsyyjMfjkXEcs16vs16vM45jHo9HZlnGVqtFAFwsFiTJkCScc7i9vUWv18Pd3R2ur69hrcVmswEAjMdjPDw84P39HZPJBN57OOdAEiEAiAgAQFVRmnnW1anqVa3qMSKCWq2GLMuwXq+x2+2w3W7RaDQQRRGiKEKj0cB2u8Vut8N6vUaWZajVap9DVFUPh4P2+3211upyuTybNhwOORwOz3q5XNJaq/1+Xw+Hw6eJRVGc45okCUVE4zhmnuccj8ecTCbM85xxHNMYo0mSsIp5URQ/g5SmKabTKfM8l8vLS5DE6XTCzc0N5/O5tNvtb0E6R5mkOucqYPj09MQwDBmGIZ+fn7+CpSS/RfkHTMYYiIi8vr5CRHB/f4+SkX/C9BXn4j9wrvreSI7+AvzfT4EQnpIjAAAAAElFTkSuQmCC",
                    href: "https://codepen.io/collection/nMmQyL?cursor=eyJwYWdlIjoxfQ==",
                  },
                ],
              },
              {
                title: "Bibliotecas",
                data: [
                  {
                    linkTitle: "Uiverse",
                    id: id(),
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWElEQVQ4jaWSMYhVRxSGv5l73759e+97ZE3CLhLQ2IhuJSFgilSBIBHbCBEMJIVCtgkWgoq8yiaNIGwhKTaFCxbZLQKBuISArQiCnQGbWMiquPi8786Ze+ecFHddLEQE/2r4OfMxZ/jgPeMAbv1gXw/6fLtV89/T+1w5c9c1AFdP2nIv58izmr8vr7u1cyfso1a5kBzlS2FlddPdywEETs33Od1UWO8AK9zlyfiwzbTK+UHOJ41xEFiLkUN+hp+zPjQZD4EdQKLamtJKYrvJMYA9+3AvEtuxZlESLwCCkdqGoEPyuq8BoAMozidyMTJpu7V2+swpuSgeoAViYVkaurxx3VwOEBVQqBOu2rn8LzCrmE8gqeuqsnVt4VwqM6bWOKAjSzdkUTFadIx52UIl4YNi8upFc1golXoIMlJ2AUGpRDFR5qrE0hin5YcsRmUhODQUaQIgI7wUZqHE4lz3Vx6gavhrEvEt9COsLh+3ay8dG9EzX5dkoeAPACnIpFTCEJNC/S7g4obb3BYu1Q2VOT6d7bPMgM+mhcnEt79sTNdvAMjQpnWpPfkAPy0t7ooE5sDZ2WO2n4yjdWIUBqmazGR3/rzpHuxqN/4nX1r4/KtY+OJxvn178t3ep69Jaf7Nspp7c9/FAfx03L538OMEWilST+bMhcJMhqp1oRYKRQpDCkxKQz6enQm+uj75Yv63zoPEN+U8X9IDN8qwIVgJWtKdh5BKaEtoBhAPgDzSR0AHqD2/Cjyf+MbEcHVKTpISk1JHiCFR5xAzLLjW5PnIxVl+f9tq75z/AVuiO5MaxQulAAAAAElFTkSuQmCC",
                    href: "https://uiverse.io/",
                  },
                ],
              },
            ],
          },
          {
            title: "Animaciones",
            data: [
              {
                linkTitle: "AutoAnimate",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABf0lEQVQ4jZWRO2tUURSFv3XvnYcJecwUYhUUxikURMEuTUAzQiystNDKX+APshUriwFxJDb+B2EMiky0EIKCXiUOmfs4y2K4QcSMNws27PNY3977HA06kzexWQ1ReL37rfeQUyoBNoJYc8nZ05oBEsFbCCuO4sPtzofNBCD3+5eHF7/WAQgsgEFnch/7iTDID3a/95/WAUQgzwMESGCC6o5wfPHGyl4/TpKb81V+VUHLUjltpEePnnN9+l/Anxp03r2ICTsQ0pazC8P0WnoSIKmSS4yb/fWlJYBpyHDETPIMn+gFIKqSje6ZO1OV+zOKfcUMoyycb2ftK8N068ciwHEHwW4C68jYno5+XT5YWLoCbHcnd4PdxPQQoxKIHH+uYwZIZB7H1hr26FXau13XWGn+BrV//R8dWNyz3bD58vfhrdVxV3HxLHbeQCVygSixSiIXiNnBwto7y+NzbhQfRd4SJaIA5cgBqUDOPiWLAC0V4SgitdWu9oxIZCBg+Pkbxa2ZzN9lbQ4AAAAASUVORK5CYII=",
                href: "https://auto-animate.formkit.com/",
              },
              {
                linkTitle: "Tailwind Animation",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6UlEQVQ4jaWTPWhUURCFv7nvbd6uErARwU6LFAFR/Ek2ILjRB9FCLHRjI9jZqgHT5qVQiEVQS7tgt7EJBkHYxFWQ/KigCBYBDdiJZdS8ze7eY5G8uBhRjFNdhnvOnJk5A/8Z9ttsIlc6gas9wwNsvhPzf6dM5JC2EktGIvdnBYkciflj1XR/6Bjy4oBBgHjr4e5inF8qPVVYK9FidB1rv4KLM2uHwT8HdgJqK/TdxMW5OD+d/T3zWNFPAskwU+/s6qiTe9Nstl4FOXcNMQTUgRzQRLoyHxcmep6s7gtydsEAyhUFk2X8kdeE+ZT8i+O2sqmoWh/GNLahJiv4DcgZdsmRyE0OWgszda4Q5RooA3dX1DEfR7dNnEW2AHwBPgNLJs7NnYomDaCvmp6WcQvYCzhkHwzdnIvz090VdbwftLWN1e4AqPXb12xurm+mXpYxBXQBe4DdmHplPCpW68MZmMR8I4etdFJHsnJFAYl565tNb7Qaerg4UFguVlcvY3YfCIEGEGGMtxr+ThgGR735QwsnCyPZwAHcrjS6tzhQWCaRm48LEybOAykQAUJcD0L3SeiBKZgCyDywvt/MXSOoVCOo9Vuzp5p2ObiKcVDQcsa7pmf8ZZz/mLWz1cLthtq2ldtItn9M/xg/ANnh5RM21O0GAAAAAElFTkSuQmCC",
                href: "https://tailwindcss.com/docs/animation",
              },
              {
                linkTitle: "Animatiss",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACf0lEQVQ4jVWTO4hdVRSGv3/tc8+8rk6GMLZGSUAELYQkjrGIFhHSGQRt7ASbNAYs1OaCXSohRRBrCyHgA0KKMKZJGAUhGiUQsZGB4GgyXOdx59w5Z+/f4t4xZPXf2mut/9tiWh4QGlAMolk5w4jToGeAgso9+mlVvVs3AWxCogDoMXj71GtU8SnZJ0j06AADFWDGBDdomo+19NPtgyb6H95cOc9MuoSBUS42RXVU9IC9UjDwRBXIW2x372r5h+9sYjLBvyfPUtdX2c0Zu9hUqkO/3t3zXw86Trw4x2I/IKulR81c7NDwqpZu/pLs5/uM569gDtORS1EV/eD6jW2+vrqlO781GmfzwksLyo0j7I6ZNEf20cHs+pcVw8Vz1PEcu7kjoiqlEL3QnZ/3OPfmIW8OM/9stCJh2SBVbHeF2TjNhZOvVEhnASNNzhuyLfUXwpcuP9BoVHjnrUWTkSUjwCrUSuymNyqko3QGiGlECpm2RRfOL3N/o2XzYSckQthFoTBkQBwLYgI+VhbGBCZNmoKMjSQbM8k3SEHndZLAeKoFaLoKwogITSBNVxUmAtryZ5DLKsHkSXlqjgxWhB1h2xaSKRY2ZCe6Yur0fZB3vqL1fWYITClFAqtp7LZF431rvy1GliUwmYUUFG7z98bqRKThy+/xZP0FD9t9W0k1ce/3MU8t9xg1mfEYnj3Sw2OyEjAfFcVn1L91XQdOe+fURebThww73NKpoiIfZAN0ZOaUmA0YdR9oae2zRyobSdjDlfeZSR9hPU1XJlHZ0AtIQHCXvfyJlta+OWAqAAl7QOjQ2ufeOf4tVG+T4nWkI0CB8gf2NdbLFR37ccuDR9/5P2IAW/+g/Y/8AAAAAElFTkSuQmCC",
                href: "https://xsgames.co/animatiss/",
              },
            ],
          },
          {
            title: "Formularios",
            data: [
              {
                linkTitle: "React Hook Form",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFIlQcgY6Wg6wl4BTcBLOQ4nE3oA6VehAiPCzdopZZtkkEHd+Y/vZb56U4CBACDyIqkplERBwsKp6UK9paGoweOr3X0cjNwNEpK5ydwBEdb9anTYbBUrVJayLwt3N3bwVGVkXxRJK1ZgGutWVACKZR8DMEHGzhEZq2lbY4fAxm513u7fxuDeZNA/uMc+rVzcTVT+fP+fzL3c5Ht+nU0Cu5Ppz+LU/9noxhNDt3u6Z5LorPFWFWSPaPw13oj4664h7TjJO/hJ3pc3Y3PI3KjH1iqqIcNVeOh0XaXAQ1UQk5W9rqPrptF0s7HJ5HgxehkPM9mWZrCElkMzXJtdsypuUZL7k23Brb3fMHEQkqEJj7285nLmISMvnnQAAAABJRU5ErkJggg==",
                href: "https://www.npmjs.com/package/react-hook-form",
              },
            ],
          },
          {
            title: "Fetching",
            data: [
              {
                linkTitle: "React Query",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACP0lEQVQ4jU2SvYplRRSFvzo/dVvuPVXnMqBpC76MoImx+YCJDHRkJJgOYqaZ7yA+i5l2gzozzEQTeO1TVXttgzq3MaqCqrX2+tmB579+MaCXR7Xb7CUkK6yqJCucVVm8km0jeyW3RlYh2ear14fF2l0Ynv/yx9Hbx9kKWZVVhWU/k0o/rZDNyNp24kJSY/XH++lo7TaHDs5WSKp9ilfOVlmskNXBWZXslaSuZLF2O2WVkLw8Pa5UPoywOGQFko0saqQWOF2u/7qq5CVM2bvnZff+yUcnvnrxOTFOjEEMcgKw/fWGV9/9xOmxkK2weGWexLCqkLVx9saiygflkfd/v+Xy+h3LORHjRPvzDeH1W5J3G1ewRxE+/fJHz2qs2kgqnNVYB+PZYeSzH77m8tvvvPr+Z9L2D7k8clRlngWz4GBMPe3ama03cKqVEyPBnUn2BD6pMk7Co8EsQhRTViGr9QasE61eyWoM7sxuJFVOKkyzYHaIjkeHg5iu4Gxtr6hXuGgkANGd6I1xFkSHaHDo0zuBbd2C9/5XVRYvZE0AjEEwGmEURMHB8SvBLKZshextX6RdgSqLGdO/F6gbHATj/xREh9hbmPpi7Bl47zircbo0+OZbAhtMpae++w7R4UaEWUyriie1kH1jtcqiytEr42yE9+/gsPd96JKvd48iRPMhqz2s2sitkqxx8sI8GSEKvxEe/QnAjQg3PYswC5/tYVi13SWr91mbL5S+JAf1oPbgfDbC7LsNQTQn6j7E4e4/efO0X0Ez7m0AAAAASUVORK5CYII=",
                href: "https://tanstack.com/query/v3/",
              },
            ],
          },
          {
            title: "Estados globales",
            data: [
              {
                linkTitle: "Redux Toolkit",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7UlEQVQ4jWWTTWhcZRSGn/PdezOd3tEYm5JNi4gFRShUElBBpZN0OtOKuqhTVHAnAVGpNWRSWwsfdVFqUwtKi05LN0WoGRGxkJnOpNafSCumdiEo+IOlLvyJHRKTCZPMvd9xEQdiPNv3Pc+7eM8R/jcqIDrY+25wS8+mB8UZk6owaUlHbW2lW1ZtC6CF7RMZPA4BS4I0nWpSXTw8Ws1+tTrO/DcZLTw6kcbnRKTm8NryZPpIeSCrxCfF987uzVY2rQ5eARC1Wy/5OA6pcvDNSv/HFsgz5o1WsudE+TAw3v5lr10NUAFYSEZ9AGF5svSv0ZXYHQO0XHRakfuff+i9LrCuDfAB8pRMCXXKJ/epul8s1o3kavti2Cgan4s8b6axxI1bYc+aOGiCNW2IDzDNegFR0VoKYR7AiQylEl3djcX6vb4inR0mKeiUC7tugr3WbsQAfEo6emX7hY2qugCmE0AdT/+98NdTR8uZ9OyfXRmUZ9Tpb17A+4UdFw8s16kiAIVc9XFFXka8g4g7PPvHbQPFq32tlXUN9V+8o0N03omGzpcPxOj4G+MZa4a2nu92ItbBkaPl/i9FaYbrpncBDPZOBQB7BiZ6vIRejjr0h6VGOB3NRjlVyRdy1QHjJRJPCnLtWCVzAQDnziYTqVPDudq+4tW+lsWaVuw1FAKFrxtho+P45VzdiSsi8qJRY+4U9Ns8Y97yNXg/+yZIqZC1WGOxLkxGz4rw/eKPrSeKE5nZPGOeoFdU2GDU6a8gW9p9J6v9V+aaM4/ELt5lsW44W30OeFXQF97+aefiYO9UUGJ3LLG5W1Xm5aWHP1+/JrVYReT09fH6O23QcKa6BV9eE2Sz4gavl2cm21phZ7UPlTMOc0AARrbVNmtgjivOVzE3ce52Y3Stc+az+lzj9e4wzOLpfkW+E8RT0R6nvHWsvO0jaX8gQGFH7YEYtwE1v88FzW+K5x9bABjprXXG69w9+OYuQeoaxV+MVrMNQP4BA0JWj03hPV4AAAAASUVORK5CYII=",
                href: "https://redux-toolkit.js.org/",
              },
              {
                linkTitle: "Zustand",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADIklEQVQ4jW2TzWtcZRjFz/O+92PuzUwmSZM4Q9JomiYp1qFWtNAqaaDaoEVswaYoqEtXbkXwD/AvKIi7gAshrlxl4aIQC7VUDQZiCM7QNE1mktvJxx1n5t77fjxujFjpWR1+nLP8Ac/I7CwcAPQ/LC7MXPj04sVX5p6Cx+XWjWsvXb0y8wkA/84daAAMwAXgAMDl1yoLc6PPfd3D9lsA5eOfAwAfXnujXxn1Qw56fHrq1PXS4OByGLpX2PBImqRp4/CoOeg5b89Pjero4LD4I9DPQIMASABosXf5hV7/sy8unescqawSpXoucN1JACUp5UgxDCajrla/7uy5u3H8oLodfXX25k25uLbGAgAebm7u+kSZscrrpJmyxqokzXSaZlZpY3oKBT1SHhKNRHPtSevEwEAwOr+4aACwBICxcvlVL/A+WKk/odpfSvSGnlDGiFzOpzOnn6fhQk70+S715HKmm6SDfQMnzn3+/juyKGVLAnBenB5f8HLBySNlrctM0f4RXNcVE2MlOCA61apxW7Molk9SlmW2HLoTH50/8161EXVFGIbnHSlfBjM7BKEIFIQhJBELBoiZV6hE1Y7g5XsP0FcsYKcZ6+/v/fZL3EoWnIFiMC2ldI211hWgdyun7crmDq3vxWytpaXl++hqjW6njbFyCYHrmINMe7fvri5F9fofDgwxAdAM7nckxkOPN10XidIibie4VJlC8eEa2q/PYGR4CKvrVbJsudwbdqM6SOwdxquZMokvhThINX1zf12sRDH1F3pQfVxHqi2GyyUOHAe/r9fw5+O6kES0s9v8CQATAKqcnVwqDw1dNcYow+w4gkAg1sbQfhyDHB8OGyitdT4futFe8+5G7dEsACMBwKR6ww+8j3M535OAAkiAAUcKyocB+4LgeZ7OBb633zw43NrcvqWs3QFAEgB103RbZ9kGCXrT9/08ExGDyViGtlaQIMpUJqOo+Wir3phvJ9nP/8jGx8YJABbA9Nho6ct8T/CWFLJPSiG0MVYpvd3pJt9tbe/eBlD/z/4pZf+FAAYD153wPJnvtJO2AtYAxM/Y4W8o0HkAhdrz2QAAAABJRU5ErkJggg==",
                href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
              },
            ],
          },
          {
            title: "Páginas de resources",
            data: [
              {
                linkTitle: "UI Goodies",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACEklEQVQ4jXWSPYtUSRSGn/fU/Wh76BHF2cANdmQCA0FMDMxE8CdM5j8QTDRZMTDaZNnU0FQQcxEEFWMRAz8TURPBQGZ07Om+t+rdoO/MiLQnqArqnKeec6oE8PnFg5Vjk7fvU7W75kzBDiR+CWNnTUZV2e4up41rtx49ullVAKldCcwIG+9V2iBg2IbVRBDQApwHAsC5Mwy1smUjCVlIwhKWMRb2QIfHQAWgVMuwOCyStZ/zk0GACwjKYLlvcBBCBQpgF7IKOEPpkQNZB+Ahqp9nBMYpkxCqG+QglIAOuyNHT6X2NwAPU48abxe+vvzI6Mgf5K0p9aRmdHJModsb5hKADIZgzNfXH5g//UQ12oFpZnu1UP91mnpcDzlLAPIA15zxsTFeqdH3H8yTifWjqA3oC9iUWAKwBIK551QnjrJy8Qyz5++pjk9YPXsCxQyXxStEWWaAwUKW7Z52Y6J2/bQJK2tGorcWipRlALMwkEFRKHkn942VskrKjlxbocpCxK8tOHemwQgHfaFPEeMq1WGkBqYzwJ083BAHnyFg7yfK2I5RW8XhSXRznuz2081+Ov3XKjtp3NSQA8j7HXx56X0DiZZRE97Nz0rq/mvWr94Z0u757T+3S9/fcNSb6VDT8G22aGLtlAJgttpm41dlOv1b99+dq/68cgfAdzeTfTN08vqbtHHtkiMu+Mf8oWFrz+B/fFkEi2Wq/hIAAAAASUVORK5CYII=",
                href: "https://uigoodies.com/",
              },
              {
                linkTitle: "Drive resources",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtklEQVQ4jZ1TTWhUVxT+zjn33TczeTNm8rMwMgzUhVWKjotutAGlVhRKKW0tgnEhrtwKapGALy76Q7sRXNlNq4tKbAvRnSB1U6EtSKWlUGml2FaCzSKZZJz33n33HhdJNNCsPMtzvj84fMD/h9bZAQB0nZtZh6zbvjjwei93h0PmCACqFdaLAw+u0sTDW6uY9dwIALZNv9lKotov891uwy32sQCLt+vzuDR0t/u467dvPIKHK2AFAH5GT5eVqxSfJ+HGANuszHyRZEVx1vyeifGN4SqmCNAVLJ4LpGCkCJ1v3tktRibKXuFja2KXNOyJxiO7Oe5WskV4I5jQGeymFEHTZe7zBAqKAn8EQAAEFdGkWZs9PvTPLASBgEAEKQM+Vl2bYMV959fvHeVYxn1elgDIVIW7Uj81utifQg1MBHIZSmPxmp/B0dUUBIBemt7XGOLBe0TUCoX3bCWC6s8//frKq/oopfIgfmRGp8zhTAQB8Dc77MD76DIAbfLwSYltOxQ+ACwkjCA4gzQt6RKcIXwAYSggrkDgGG0YnCRAafv0W1ti0TvqaRBBPVclKotw9e6hmSNIp8whANfSc0G/3XAFlaXDRR/OsAoM5jnoLmp9+MM4u+S74BwRASxE7UrrvuXGgkcQA0WPbNhcPKhf+O3dLcF5VQJiYTW2v1e6tz7/N+4MdIg2bs2WYt+kUW5Wk5EAbGLQWICMVdVt+iMaGRmc7aPz1+3AbkzcnF5v3Lj3KQPkOZ6bBHp5xXoeTdS7su98/qT0rl+GolfmRVY28yfuy5eP+f+GWmx4Ic/rOgmQCqC89P3g43jXmag9OrwnsZYhViSKmSPLHFmmqMIxk8zVahxV2jT+5+XP6rfvf6VYfiMAJYB0/yfuDaehCYVnXtsTjxBEQYXknMzfOU03FSBaU6oXnqcPZiRKuF2x1gAAAABJRU5ErkJggg==",
                href: "https://drive.google.com/drive/folders/10Ep2bpQNkDP4v9GdE4cnmEHmlg0PRKRW",
              },
              {
                linkTitle: "Frontend Joe",
                id: id(),
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpklEQVQ4jW2SwWvcVRSFv/ve+80kbUjJJDVSsKlx2iQtRXDTCnXhXgRx5cIuRDeKQjdCi4IrcaEIVitW/wFBUdxWlOqqgmIx1k4ik8SShmhjx6ImmXnvHhdJyFA8q/vgvns4373GlgwQwERz+uEYq2cDPCq4F2SGrTj2lXv+cHH+2hX6ZH11NTl9/A2D5y2EASQkCcDMDDPkWpd0vt366SzgOwMCNKvJ6YFPUqoec3fY+tc3f/cdYiDn3qft67NPASUCmpw68FatVjudc/6yqLxi2Fgw2+/yFUHHzCqhKyWXs0h7arX648MjY/Xba79fskPNmZMxpcsxVTH3uh+0W7MvAOnIkQfHu92/1gBKvd640WrdArqTU8ffTlX1Yim9zdwrp1KI8TkLoSYvGGQgAmVu7upyH5+b23mioezu0SzsCcGfCWY8giR3rW/08ntA2W7uB7xTl0zvAl7+RpKZnQrCDhhmoD+W29cXthu9j9wORQEstVq/CW6agWH3B8CEJBhqNJqDdznfLRsfHx8QDEtmMlIwYwmJYNYYGq1ObDul/4mQANX3jZ4MZvdIksFioPi3hADYP1VKH00cPjzDFsy7I+SDzaPHqhjPA1gwk/SNTTRnHkopfe/SO8HsvhDjE+7lcy/+2sLcz1cBDjaPHquq9LKkJ4PZXiBL8lLKibD06y8/SP5+ivGlbrf7upf8JmLo3818Z9e+u2FwOpjtlVgPMSbh7y7OX/sxAKFdNs/I/XJ9oP6xy7+T+7nVpdbORriR87JLqwAxxsGS8xftvHkOCH2gDg08MDV8MaTwtBdnbePOSGdxsQPQaDaHR9JgxywU93Kx3Zo9A3Rh6+q2KXfy7bXVz/aN7f/apFsrpXuJTicDrP/ZYGS0qpesVxfmZy+we2z8B+UDSXAnYXvkAAAAAElFTkSuQmCC",
                href: "https://github.com/frontend-joe?tab=repositories",
              },
            ],
          },
        ],
      },
    ],
  },
];
