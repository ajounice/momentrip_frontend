import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../../../styles/components/Modal/Vertical/TourInfo.css';
import { RiBookmarkFill, RiBookmarkLine, RiCloseFill } from 'react-icons/ri';
import FullSF from '../../ShortForm/FullSF';
import TagList from '../../Search/TagList';
import { Link, useNavigate } from 'react-router-dom';
import { MapComponent } from '../../common/MapComponent';

export const dummyTourInfoData = {
  id: 0,
  imagePath:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgUFBUYGRgYGhsbGhgbGR0aGxkbGhgZGxgYGhkbIy0kGx0pHhgYJTclLC4wNDQ0GyM5PzkyPi0yNDABCwsLEA8QHhISHTQpIikyNTAyNTIwMjI0MjUyNTUwMjUyMjIyMjIyMjIyMjI3MjIyMjIyMjI1MjIyMjI1MjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABAEAACAQIEBAMFBgQEBQUAAAABAhEAAwQSITEFQVFhEyJxBjKBkaEUUrHB0fAjQmLhcoKS8QckM1OyFUOEk6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAsEQACAgEDAwMEAgIDAAAAAAAAAQIRAxIhMQRBURMigWFxkaGxwfDxIzLR/9oADAMBAAIRAxEAPwDikSr1FMi1OK6BCAp6QFSAoAanikBTxQA0U4FPFOBSAVNFSilFADU4p4pwKBjRSND4nHW7ZAYmT0EwOpiiEIIDDUHUenWkAgtPFSinipGRilFSiq9W20Xrzb06Dv8A70DIMSdF+LdOw6mrEQAQKmqRoKcwNTpSGQigr2GQsSRnPQ+6vftPzoqS22g68z6dP361NLYAosVHPY7DgPCrtAJAgSRMRy0A7nvUzhQxFtR5gP4j/cncD+o9OVWKjXGGQatJLHXJJmR1PIf2rUw+GVFCqNPqTzJPM1eT20jLH7rkRw+HVFCqIAqyKsimIqDYqIpiKsIpiKBlZFMRUyKYigCuKiRVpFRIoAqIqt0q8iostOwA8lKiMtKixUFBacCoiphq1oxsYCpAUpFSBooYgtPFODRVnCsyNcEZUjMZHlzaLOvM1Mmo8mmPG5ukrBctPlpw3x9KeaCGqI5afLSLU4agBZaUUswpxrSGB4vAi5roD6TRVm0FUKNgAPlVoFPFHYK3shlpNpqakzR+Q5moqmst8ByH6nvUlEAhbfbp19f0q3LU6rkt7ug+9z+A/OkMZ3jTc9B+9BURaJ1fXoBsP1Per0tAbfHqe5POpZaQyqKy+K48J5FjOwP+Ucie55Udi75nw7cFyJ12Rfvt+Q51n4/hy20zBmLZhqTuSZYn1j6CqgrkkTN1Fs18Rwn7Nce3nzkKmY5SsFkD5YJ5BxUMtLDXHuL4lxi7uSSzGSY8o19FFXZaMjtuxYo1FUUFaYirytRK1FmlFJWolauK1ErQFFOWmIq4rUStMKKSKYirStRK0CKiKiRVpWmIoApy09TilTAaKeK0b+AAbKpJJaACII7OOTbbab1Q9kCRJ0Og7azqPhW+pHNTBhUlNMlti2hKyGOwMZVzAjbpRNvCOjrN1B5Mxlc0QGM5To0ZdjpU+oi9DXJBagllWzHMxncBtspyxpuO3WrraPmGfLLJOwXmQOwmliLoSJygOWAGYBszMhzZabUZLcuMnG6dP6A+DUZYBJVWKgkRMHX5HSiCKmymQTvOvbNBk9ev+9RYirpdiJNXsRilFONdiPnH40Pgr5uAyuUqSIJGsCZB/etQ+aF2suinirVtkz2/eneo5aRQRw7L4iC5OQsA0dJp8e6C44tjTMco6CTE9BUeHpmuoo5ugn1YDTrSxaZXcbQzST6nem0tJNvV8FaJzJk9fyHQVmcUW/nTwT6jSN9S08oo/Xlp35/AVNDH73+NZuNmqlRJbc6t8uX96uApkaatAqWgshFC4q+QRbtiXbYclH337dudXYm+VIRBmdthyA5s3RR9dqsw2DFufNnZoLvr5jHcCANo2FIopwuFFsRqWJlmO7Hqf05VM4sWLlq+yllt3EcgRJGogT6/7b1eHWYnWo4rBeKhtgSzRlHcEEfUUJ07FJWminDYgXQbiiAzOY00lyYMabEVPLWHgMQcPca3dBAJ10907ZvQx9PWuhNxAAxZQp2MiDOwB505xp7cMWOVx35XJSVqJWiSV+8PmKoa6kkZlkcpHwrM0KyKiRV5g7R00MifWoMlA6KSKiRVpWokU7CisiokVaVqIWmISquQkh82kERl5zOmnLT1ocii3sjKG578v1qi5bI10+BFJNElNKlFKrAAdrqW1d2YI3ujxDqJZTCg/wBJGvbka1sM4KqrTmNsMNZ01Ak69NtDWfxDiSuqDnbARSPKSgLFSSOYnlWdhrrNcSSfeQfAMIHetd2jnumdM6eaImUua6yPI0xy+YNLCO+ZAGfW3c90wx/6mnf3R8hRpskkmDlCOW3geRgCY7mPjSADZNGaLL7xppczT1E7VhF7G81uC3AHdCsf9MbAjUFgdzPI0Vw/ha3ReLo7PbE2zkDjMyMwKqDMiF+R3qlWAyHdshAiApKu8a6ZdFMsdt60+Duyo9s3XQFQrAN4jMCjHNAAGz/hzg11xpQbZm4oy7VktGkEiYbQhR/NrspnQ1n4m6LajMPKNBEsRvMjptrvrWniHxJUqXZka3kZTqYzSJMarlMRymp4TgNi5kTxHVymZhlXLIAEIdzqfpRKSXDHKCiZ5tgakwJgd9Jgd4qNwBVNyQFBAliAdZjTflvsKL4bZtWbyXC4ugZpRkB3Rhpn0mSDPetjFY4C2luECtbAZciydTDkbswjQnaARUuT7Gair3Od8ZlnYT2FD4nxXUBXKiQdt47/AJVtW2t5DnCKSujOGLPqwJWAenbWpPw5LgQW2Y5ozEAC2p1jNz05z1NDp8iTa4A8DjSlxWUDKrKYJBgKyncRJ8vIVr/+l3bmfENbAQZ2zB0Aka6KzTJJHX3vhQbYaxaAW5cVXU65VcmPNIkCOg6QatfHkWG8PGvEQbID5QGOsyoGp7Gal7r2hFtStld1LeTOCQYmCyn+fLGijlrVCWC05eQJOo0CiSabABkuFrgVgbZUNIgTlg6e60cj8qJ4lfPne2HiVXysZVQogTB0gEVKi497Lc9XaizC+GLZ8xLdI8o1A+NPcC5WAzFyp8NVAiebO38qATJ3OwrFUXHIyLcJ95plgq/zXWAEhBrJ5aCSSK2OG8XuWRcwylXtklnfJBYAASDrlXaAdp76qavgIyaQHgLQXRjLk/xGYwWjQEdABsOVH3kyiVKsBruOuo+Q+s1dqQwS4yBzORiIIy6EmQCdANuVAHOLjZczpyJ0DQPNtIOx+VJoal2BGcBix6/j/vWthcOXUMuo11G+2vwqh+G3dGZQFAgEssCT5Z10GprkLaXcr3XxVsBSylFuDxGGbXJbjzITqD0E024tcjTkuUdbxzh9vE3GYHK2YlWESATorDYgbfDSK5X2g4WbHhzdRwzHyrnGWBrmUiNoEgmjhfUYYX2uWidAbYceLMb+HuB32rB4niBcKx6mJPIjcCOdaNRUdpfBk3JyVxr6mTtppp68p/MCkY7c+vcfmPlRr2VmZfUzoBzM9etTuYJV3Zv8uVug3Ukch9Ky1Lyi6Yd7OYpgYB8uaWE8jz11mSNuldbaZWnKZjp8xXGcMCpc0YwQRLaLptry+NaR4iBoHAkgfzaTz0Gw61emElbaTEskouqbR0LJG+3yqAUGOhnWJ2MVzOV7bEG/bZXYQEfMqkkSzyvlEAye9dHZxeS2oNtWLNCnMRsxkxEEGY+BrHTtcXZ0KdumqLjhxzJ+X96lYxLWnR0VGIkQwJ3zHYEEtEwJo7EXTYPhlVVzKMS0hpgACdBqNwaB4wwW2rhxJkGFiD7pAEkzqNhz0qYu6+o5qrJW3a7bZrjElEldSYm6Bkg7CCYA7Vn4lgoBchRtPLtRfCsLcvZLVoBCR7znzHU7JOg03YzPKo8Q4YtkFiwd1IDF4ZhMTlkQm3KPrTk1q0oUF7bZleP0t3CORynX5xSrStshE6691/Wmp7jpeTl7dsc+lWYZALqf41/8hUbnD7iKGDaFSfeGmpEHodNvTrV1jhGJaCttmBg7EgS2WCeRmum15ONX4O1QqQwBUlrbjXXYE6EbHSqMRbJyZABFtyT5vMJuSASTHzG/oBg4fG3LSgvbdWAZR5CyvnEQWJgc9hyorDcVylVvrDoHQItsyQ8ghjm1gkxHxmsI42jeWSMnzRpvhgyjMQALbNt7oDuZg8oNH22YM3iWlDZrZAzHz5baF7agGCuUBtdw3Y0VwezcfI9i25QqqtKJchSxLB51A8zDQCQB0qHF0e1jWvFFQgZbeZVhshC+UknWInmI+B3hJaWmaR0tJWZr4iA6lAFAVgQDAzamN9JWjMZZtYmwnhkl5BYqjMVhfPIUEwJrJbF3Ua7fDK3mCgKRKnN5CoYhRoR9dK6bh/Ab1i2j+MqKwzl5fMoZRoSvKBWMpaN3sg0OS2OEXCrbu+dgClwQrK6lwGHmClYgjqRXfcPtYW6UZ0KtBWVuWzvKiVJGTUx3oHHezt97xLy7OTB1JICgxmYzosamq+I4I4UqL1xbcgMuWyr5tZGY9Rr8ql5FL/ryR6enk0ML7MWy6vdzi0yghpRfNpKyTFBWLGFVsrFshJWDdtEKCR5gSRzg1iY/2jvMnhC9ddAdPKFnXSdZAqzhXDnuXrdp2AR1NwtIzBFzZyvKYRtDImnJ7UyVDe0aPFOG4ZWyoWYaEHx7UmdYiTAjWaGGAwzJmYHMJMePZEkjNqd99Nu1Q/8AUeHzmjFkwP8AsgaLA5HtUHx3Dtf4eKPq1kdf6PSmotRV3YnHfZ7FeCcXLXhLYUEnVwyBiFWdTlJHPWNapw/iWriKC4Yy2SV3XNGaSVy6Akkc9jpNtnj2Gs3bdyxaurlLZgz2yzaeWDkhQDqfhzozifHUNgXwjNiMQro1wuoAVCgK5QgGUq0AcupOtTKcrpI0jCNW2YGAxVq2Xe414vsuQhc0yGBYk5UEmAAZn5k3Hw7jxLly4HcliD5iBniWaBmJg6R01q5eO4MQfsDE764p/wAAlED2psZcowIAkkD7RciSpBMADlVS1dkTpj3M83UZCxfMiZlUkwQzq2QlYzQCvf4TqTZ40EtIBcRitskKFeUYMcsljEksD5dBGxNSb2lwxU/8gkkiAb10gxm1OusAwPWqV9pkGi4CwPV7p6f19qlxlJVX7KWlPkwOO8buXR/EOZm1OgGgWCSdyTWVb1OdjA2nUx1OmtG8UxK3cQzrlQGIgMFWFEgBize91J1BNb3BOGW0wtzFN4LsmULauBiCTqTCspkAabj3tK0WFzVJHTi6dzt+P9HLm5ayiLzhvNmlAR/SFjmdZmOVCjEa/wDUaImco3yzECeek1017j/lkYHA5ZIB8BjqNxq/ehx7TMNRg8AP/iIfxJpLGls0cs7W1mJYvDMue8wXTNlWWjMAwUHQmJOpA0qu1idDmdhAEAQZMieWmkmuqse2FxYb7NgCJ1AwtsN3jp61v8G9tHf7SHs4MeFYuOkYcAs6RlB80RrUuCXKJTb7nm5xIgnO85hA093zSZ6+786i2J8ujtmk6aRELB25nNp2FdZjPbjF3Nc1pOyWLQ+rKx+tZeI9ocU+99p5wqiRzEKoqtC8ISk/IBh8XbFpgylrhYZXznyqNSAgEGdRJPwrpuBWnxAVEtqWtge4CXdSZDFROYjYnfaua4bfdCQjZcy5W0B0nkT7ug3Gtd/waMHdw+K+063XAvoDBClhmDDpz+GlaRwSa1xpV+zsxdO5wb+f7Dj7O4tsRJsXPCzgBmLeJlzg5gVkA5Qd5361vYXgIzsWwDeaZc3rhY7ke8NBPLlNYT+0Dvi7yXcXft2gzquSGgZyBoRAEDffvUHsYJlYPjL7Aj3ntqSNeTHUbVDvvXwjilS23Nq1wFQXJwYQlYWcS0zmWIOXy6Tr+tZPF/ZF2JFu2ltmZMqtiFYmA4fVysmSgjsay7tjA5coxLyCTm8FZMkQJDDTSrGxhtvgPDuF0S8wD5cszeUuSpJ1hgCedCuLtPz2C09q/k0rXBL6DIy2yQSD57Y5nSM/Lb4Uq5H2rxxfG4h12Nxo9JgUqaT8r8I09SHhgeO4MyFgDIDFQAZ1ABjc8mGvWdTFDjhN8f8AtuP3P51uXOKm2xZcOxXSC9t1+IAaASF312NbL/8AELFkFDh7YbKAZstmgiATLVtGMoqm02ck4pPn8OzjlwGIHlyvvOUebUAwSqzynWOdF4X2exTQy2bsfeCOfqBoa0cP7W3hdzC0CxmVyCTKhTEydhPYk1s2fa7iLOUt27o0zZAiyPM0t7ugLKdOx61bb7Iz0q+TZ9mcM2DXwmV2+0KNIdH/AIWZmygjWQzAA5fd71q4rBtdW2qrbRmDumY53YklpEEFAdOusdKA4PxnE3JbFW7ieGpZT4IdiSjSZCeSARv+VP7Q8cv2FstaZBJCQ1i4p1gkoSsEaLtE5ttawabdVudME20kTx/s7jXbyrbykIChcMpyDKcwdfwO1C8Y4TjcmUW0ZgolUVmXUjdiIJAJ58u9ZHFOOcQVmEOgIVsuQAiSFgGPLmLAx3HaqLPtbjYuW2YowUloQ5pUHlGVR12rP09VJ0+5t6s4qk2uxr+z1u7dYTbKpnTOzNlCC2pWFECQZAP+EfDscZwO04BdQXV8wILZiZ8wLGSQRoQZ0rxUe0GJOnivE5gCJ82kfhRmI9rserFVv3D3KW1Pyg1L6el7dvkl5tT3L/aEjD3XtvYEk5g2e42YakMDOu55UFgOO5bguG2zFbdxAoMaOjoTMHbOTtyrM4niMY+l1nYCCMxBiZ2MmOdV8Kxt61cDqksNtqbjcfPyJSp1x8Gvna4CVtOBIGd2ARZOhZ2UBRvqSBQjm4NAjEnYQdR12270Vxv2rxL22t3LYRXUqdRqD1AFG8D4/eyFmHvR58xJIUQAR/Ko5D16kkU5Vuv2W4xvZ/o59kdSJVsx11UidCNB0E0Yzt4VtSjgAv5ijFdQnuwP6a6VOOt4gZspIB3O092Bin4hxhms5ZETsDI39KyeSTlVGqxpRuzkUFw7I/8AoNJkuSP4b6T/ACnpXbcN45GXzHTlpWtj/aNcogfRac8sk0qJjiTTdnmaWLgH/SuGNmCMAJOpIjX6U5tPuUuAQZJRwF35kQeXzrvbntOYiG26CpYbiyXk+zuSBfzoCY0PhO66juo9dqanLwGiPk8tdCzidTJ1iNsqkD5miMQzhWUBolToDEgN9da1eP4BMMzkMj/xVCgMGOUvigJAAP8AIs6UZjuM5vJ4Ytvb8rxuzAySSdzrvXVgx6pXqrsdWKUI4m7p+DjXRjyY/wCU6fSo+Ax2B+R/SurbD3Q2oA2MMQpg+v6U+HwmILQlrMYzRnU+XroJj51r6Wyd+TzJ5VqaOUtWHJAytvyFaWHwtybgt27jlkZWCpOWev6V0uB4PfZj4li43RUcKPichJ+lb9u5ctW4Nvw1iIzWxHcDQ1jPG9vsPHOLs8quYS4ujI4PQqfzplsuP5W+Vdbj8WzMHhGBkDMTE9YUgz9KAxF86EsvOMsdO9bwwurfizOeTS6ruc75laI1kad/StK1ZdtwxEc/Tegr92bgPQjpoZ5RXWezXtB9nLgWlc3BlgiYJ0Fb4cSakr/o9LpZprd1t5LOH8Axdy2l9LbsjAwwZCSVlTIYiPMpqR4PjQNbZHbyT9DXWexXHlOC8PSUuOI0GjHOP/I0W/EVM6fQEfjWPpXL6XX4OLqJKMnXY4J+CYpt7bfEr+tblvgd4pYtiyrG2xdf4gAzFlY5jO0qNK13xg10A+BH51HDY8Z11P79TUzwJq77NmUctOq7pHKcR4BifFebIEsTAvLAnXT50q6DHYxfEbzHf986VTHAq5OgxrvG4EQxA0gkwNHG0/1/U9a6DC+01srLF9UI1c6+90P9Rrz3FMM23witXBY1hbgDTKRtURitzkkjV4Zx8+K0DynPuzT5kRTyPJBW/wAK4+zXmHKImer5tj3rgsDiCH0jnvWhhsSRcJJX5A/iaaSFKG56rwTEveF7YrkKnedQYgc+dF8aLJhpKCFIEMQYEACZERPLpWX/AMPrpy3ATMwZgd+hor/iFdjBXBJ6kASSo1OkajrWEotypHRj4Rw/t1xGLgCIXd1QblQdQfxCfKuTwxL3blwAhzbysuWCCFRSc2bWYaTznvRYxaXBbuDxJVipLgRIIYBYJ2UjnzG1XYK7Fy4wIEg/UzW+BvG9LXY2ntFyXd8P+TAZSCKLgliWOs86oxLkXBzBO+1Wi4xJqZvYyxr3BvE48NdPjvNY9gwwjf6DuaPx19igXMDHbb48z2rOsLrzrDGmk0b5mnJM0L1hHGU6zueZPWr0QKgUMABylqEadxJ+M/lTFn6EfOqrYi92Xvc83vD6/nUbt0FYmaEfNO5+lRaef4ClW5TlsaGHuCRROKxI0BO3esZAegqbjqv7+VKUbYRlsHPiF5MBQ+PxUIjBtUuBvTyOAZGsgkUMXI0A+AEmpC27jKwyqdCSCY7mBy7TTSppgle3kx8fcb3pnzAzMnQvz9ZO1W4DFrnYXDOYyWnuAdwZ0mqBYL+UdzPoR9PM1Ne4Y6iSCBVrI1L288lRwTlFtK0F4nikO2WCBsQBG3SNfXnTW+O3F1WQeoMfh8ax2Q9DTZT0NV60zneOPdGyPaO9/wBy5/8AY0fKiB7V3gMud46ZzH1rnsp6Gmyml6smCilwatzjDkhpaRzzH8YqpuJMdNYO4zGD2NZ8GnC1Syz4E4phIuSWZiZJnqd53q+5iNNCZ0Ioexamtm3wC61s3VRig0zQcoPrXfh6ecoNm0ISfCDvZFzkuedl8wiOenP6VuZLhMi5Pq36GsTh9lrVoDIDn80kDntv2irBcP3F/D8DURuGz8nPli3ZrsGgyQf8OY1SqtIiD6gis1LzLsq/6mpmxpBkrr2P9qmU9vhmcY739Q667yf1pVnNxGeX1pVnrR02gfEntRWGuQu1CYhtavt3xljX61lFmDJYZzm/3o2ze85lt/UVmW2hqLtGT/v+VCZTR6L7A4vKxDMsHTeddSPwrU9vWDYcq0a89QTOmhB6FvjGlcfwfj+Ew5RWLq8BrjNnyfzDy5FYyfSKXFvaq1eXK2Js/wCnEH6G2QKIyWpSXKGrizPx2Gw9m1Z8FnZmds+YEhTlTKJOnJqAz+Zj19D9atx+Pw9tVui6t5ijLkVLqAnNAdM1tV8oIME7jnMVnWLiumcZgD1kevOhSlKeqXg3k7jX1sERCcS6sz5VzkSBplBKTpAG2o61cJJ30686HTdmzEyY1JOiwB66qPkOlXqY2qskouOyDVFvZBOIueQLIjlQVkmdqWKM5TrIPzn9z8KqUGd654KkGR20Hz3YehA/Kkzf1N8xQ6COZp2A/elUT3HcH7x+lVk9XP0pPl6D4/3pmA7UhshcxWUgASSYDEGB8taNNyQCSfTYfrQGIXyMY2Gb/Tr+VX5NBrSfI0y0XI2H0qX2gx0ocL3qQ06fMUhpmYpa3e0mGMEAxIY7ek/UCtzi3HLhsLh2gqCSDAzTA/miTp+9qy8ZcVhIbUbRuCNQRHcD61C7e8W0DzTl6GfwP0pRtZIvs9mdWHqHCLiv8+xntZ5yPlSw62w3n8wjYaayNd+k10ubA/YP5vtWb/Ll/Z+dclcGulet1HTQhFSX7/n7HHNmlZt2SJCMY0JmNYOoE/H4Cp/ZbYGqCREnPvqJjXnWbYQk7V1ePuYD7DbVFYYkMc7HYjX+31q+m6WE42/t9vq/oZJXe5hXksqRmTsQGJ101OunpQt1FZvJoIGm+samaHuCrsGwBE1xuMVPSzTHG2ky6yhXWPpXX8I9pr/gHBKR4btG2okgtB6c6H4xfwj2LS2UIugHxCdiTEEfWh+DWQvn6CF9f5m/feuqeZ4qgqffftXf/wAO6UFi4dr+zbxqkQA5ECOQ0HwrNYrzafjVl7FHlJ+NCtiyD7vzM/SsJZNTtnnZNyxSo1AP+r+9U3XE/wAw9IqD4qeRHoIoW5cflUSexC5Ls/r9KVBy3SnrMqwnEHWnRtKquNUlIjeoTMySNrRFtzNCrFEW113+tFlI9U9j8HYvYC61y0jOocZmRWIi2pEE68prG48LeQ5UT4KBWr7DMwwWKQKYykgxuWRgeXp1rn+L5SvL51fT17jZ9jOw+AuXsJdKIjIh8zPZk2tCzNbuBhEiJOUnVRsKxUJW2iFsxAJgLly5jmyzu2/oDMTvXoPsimbhmOQAmSwkd7azrH5GuAtBFuKWcKoYZmYMQonUkABo9NaMWS5OPnY3c7VVzSswb+PCkhROp30IM6jvrNavD8RaupluNkKo5GVRqcrESxIls2UAd9+Ry8ZcQu+UIqliVHmIAnQCZMetG+z2Lt22csUg22AJVm1I91YIILCVnkGPrWuPCnkpvZEwilKmAcNQNeVXfIrMAzwNJO7SRI9TRp33FQwmOAbMltFZZhvMYLNKtBMHKNBy6zUC3pUZFCMaXNkZNKVLcIzdxT5yeY+lUj4VNaxMUSLd6CxOOiQvvTGo0rW4cLZuKL05DIOWAdVIWCdB5su+lZftFYVL7Kq5MsAjOH8wUZiGGhBaSI61pHC3Bz8GtOrBvts6ORH9I3HTfStZbkgEbGI+NYCIK6jFYVUS2VVlV7asMzKxY6hmGX3VLK0A6gUQwuUXLwOMXTYOaa4JBE8iJ6SKYntTL6fjWDJTMq5gnB0aRyMx9Kvwdq4h2kEaww+epo8KOgHxq+yo7U4xTVMdtO0U28CmWWyg/d0P1MVBsInRfkKPuWx2NCOo6Vs4pqnf5YSm1/oqXDJ91fgqmr7eDQ7j/wDK1FE7D/VV0neBHrQko8X+WKM3/iB7mEQch/pFU+An3V+Qq++59PjNCsT1qdEXyv2DyMt8FeQAPUQPpGtG2GYKFldO3y2NZysetX21Y8xV0lwL1HLkKd+o3/fOhLnrU3RuZqLKe1CZnIrymoNm+8asMfGouaTJRTB6mlTfGlUlF7mmBqLGkDUIgkGq604kaUMDROHGoqkUj6B9ilH2C2B9wz8ZrkOJ8EWY1+ddX7E3f+TQTMLQfEB5qjp5VZeWVGh7L8PWzgygGhzseckj+1eHcWcLfdgoYBycsSDrsRzFe/YdwMMf8J/Cvn3i5i6/+I8+/pRjfvbLjJpJmdfsWmuhiGVGEuFVQVYySqLm1UGAJ1iicNhhbsM5SWYlfMFZApG45h5G9Cs1b2MAOEWPy0qcnUvDJUk9Tr7Hb0//ACKUqppNqjnLKxOlSpkp6tu2ef2JoKeO1MrU5oETtKGIQ7NAnpJifhQ3GcAEOa2Wa0xIR2XLnywG012PerQadoIAOoEwDMCd4HKt45FocWjaEo6WpfACvDL3ieF4b+JvkynNtPux01rS8FVAyOWBVSSVy5WjzLHODInnTLdOfPmbP9/Mc20e9M7aVBFC7TvO81DkoppWXqik0kSLGkHpi1LNWLMSc1O0/c/KqM1TtxvrVREwp7gjf6a/hQ7Xqte52+VDs5rWxSZYjnoKuQzyAodXq4MSORNJiiV3h2od17fWr3LdBpQ7E00KQwU8oq+2DzFUoD1+lF2p6/v50mESq6vrVIEUXc+FDNPT9/KkKQxbuarapMx7iqWc0mwQ8ClVPiHpSqbGEZqaaUilpUoRIGjsFuKAU0Thn8wrSLA9u9ksVFhQBpHIVZjbmtZ/sfcmyNtv3zorHGP7ClCNNiyPg0UxRFlukV4lxtgbrx941641+LTDXY9vzrxvijfxG1O569aiKqTNL9qAp1robt3/AJfLB+X965ua27lweDAA7zHzHOuTq1bj9zv6KVRl9jFJppqJNNNdaOFlq05qtWNLN2osknNNmqJao5qdlFyvSJqsNSLUrAnPemzVGaaaQFs1NXoeakGpxEy/NUGb1qGaolq0sTLVf1q5W/cUKtXqaVgh3eqGepu9UMadiZYpopG9aBU1YoobBBTtVZIPIVUx71Bj3pWJk3A7/v41WyimJ71Wz0NghR3pVTmpUiqLg9TDUqVIRNTRmDtyaVKqgI9M9mMRkthR0rRxN6TSpVpEmYJjLsWyMv1rzPiqecmBz6UqVQUuDOtnUaTWjcvgJlKif39aVKuTKraO3p21F0ZbtrUQaVKtkc0iQpE0qVBJGaU0qVBQ4NPmpUqAGmmmlSoAU1NTTUqaAky00UqVUSySmrQTSpUCRU7VUTSpUAxgasDU1KgBF6iT3pUqQMixqpzSpUxIqmlSpVJof//Z',
  locationName: 'BUSAN',
  tourName: '송도 케이블카',
  bookmark: true,
  price: 5000,
  hashtags: [
    {
      name: 'tag-busan',
      id: '부산',
      value: '부산',
    },
    {
      name: 'tag-busan',
      id: '야경',
      value: '야경',
    },
    {
      name: 'tag-busan',
      id: '케이블카',
      value: '케이블카',
    },
    {
      name: 'tag-busan',
      id: '바다',
      value: '바다',
    },

  ],
  shortForms: [
    {
      shortId: 1,
      profile:
        'img/profile2.png',
      thumbnail:
        '/img/thumbnail1.jpeg',
    },
    {
      shortId: 2,
      profile:
        'img/profile3.png',
      thumbnail:
        '/img/thumbnail2.jpeg',
    },
  ],
  kakaoLocation: {
    latitude: 35.07021105359145,
    longitude: 129.01883229743348,
  },
};

interface ITourInfo {
  setViewTourInfo: Dispatch<SetStateAction<boolean>>;
}

function TourInfo({ setViewTourInfo }: ITourInfo) {
  const navigation = useNavigate();
  return (
    <div className={'tour-info-modal-container'}>
      <div className={'tour-info-modal-top-nav'}>
        <div
          className={'tour-info-modal-close-info-container'}
          onClick={() => {
            setViewTourInfo(false);
          }}
        >
          <RiCloseFill className={'close-icon'} size={30} />
        </div>
      </div>
      <div className={'tour-info-modal-under-container'}>
        { 0 ? (
          <div>등록된 정보가 없습니다.</div>
        ) : (
          <div>
            <section className={'tour-info-section'}>
              {/* tour info */}
              <div className={'tour-info-img-n-text-container'}>
                <div className={'tour-info-img-container'}>
                  {dummyTourInfoData.bookmark ? (
                    // 나중에 서버랑 연결할때 onClick 넣어주면 될 듯
                    <RiBookmarkLine className={'book-mark-icon'} />
                  ) : (
                    <RiBookmarkFill className={'book-mark-icon'} />
                  )}
                  <img className={'tour-info-img'} src={dummyTourInfoData.imagePath} alt={'tour info image'} />
                </div>
                <div className={'tour-info-text-container'}>
                  <h3 className={'tour-info-location-name'}>{dummyTourInfoData.locationName}</h3>
                  <h2 className={'tour-info-tour-name'}>{dummyTourInfoData.tourName}</h2>
                  <span className={'tour-info-price'}>₩ {dummyTourInfoData.price}</span>
                </div>
              </div>
              {/* <div>등록된 정보가 없습니다</div> */}

              <div className={'tour-info-tag-container'}>
                {/*  hashtags*/}
                {/*  <div className="flex flex-wrap">*/}
                {/*    /!* TODO 태그 최대 갯수 설정 *!/*/}
                {/*    {dummyTourInfoData.hashtags.map((item) => (*/}
                {/*      <Link to={`/search?`}>*/}
                {/*        <TabItem  key={item.id} id={item.id} name={item.name} value={item.value} setKeyword={(prev)=>{prev}} />*/}
                {/*      </Link>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                <TagList
                  itemList={dummyTourInfoData.hashtags}
                  onHandler={(value: string) => navigation('/search?keyword=' + value)}
                />
              </div>
            </section>
            <section className={'tour-info-short-form-section'}>
              <div className={'tour-info-short-form-inner-container'}>
                {dummyTourInfoData.shortForms.map((item) => {
                  return (
                    <div className={'tour-info-full-sf-container'}>
                      <FullSF
                        src={item.thumbnail}
                        shortFormId={1}
                        innerAvatar={{ src: item.profile }}
                        href={
                          'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg'
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </section>
            <section className={'kakao-api-map-section'}>
              {/* kako api map */}
              <div className={'kakao-map-api-container'}>
                <MapComponent
                  latitude={dummyTourInfoData.kakaoLocation.latitude}
                  longitude={dummyTourInfoData.kakaoLocation.longitude}
                />
              </div>
            </section>{' '}
          </div>
        )}
      </div>
    </div>
  );
}

export default TourInfo;
