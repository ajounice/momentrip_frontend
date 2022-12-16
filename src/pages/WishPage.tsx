import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/common/Avatar';
import Folder from '../components/Wish/Folder';
import InnerTab from '../components/common/InnerTab';
import axios from 'axios';
import { WishFolder, WishForm } from '../globalType';

interface IEFolder {
  name: string;
  id: number;
  wishlists: WishFolder[];
  thumbnail: string[];
}

interface IFolder {
  name: string;
  id: number;
  wishlists: WishForm[];
  images: string[];
}

const mockFolderListData = {
  Folders: [
    {
      name: '부산 여행들',
      id: 1,
      images: [
        'https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel',
        'https://img.hankyung.com/photo/202205/AA.30084620.1.jpg',
        'https://tubefactory.co.kr/wp-content/uploads/2021/08/%EB%B9%84%EC%88%98%EA%B8%B0%EB%B3%B4%EB%8B%A4-%ED%95%9C%EC%82%B0%ED%95%98%EB%8B%A4%EB%8A%94-%ED%95%B4%EC%9A%B4%EB%8C%80-%EC%8B%A4%EC%A0%9C%EB%AA%A8%EC%8A%B5.jpg',
        'http://tourimage.interpark.com/BBS/Tour/FckUpload/202007/6373120505517084160.jpg',
      ],
      link: '',
    },
    {
      name: '호텔 갈곳',
      id: 2,
      images: [
        'https://i0.wp.com/blog.allstay.com/wp-content/uploads/2021/07/couple-main.jpg?resize=740%2C555&ssl=1',
      ],
      link: '',
    },
    {
      name: '행궁동',
      id: 3,
      images: [
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGRgaGh0aHBoZHBoaGRkcHBgcGhwcHBwcIS4lHB4rHxwaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs2NDQ0NDQ3NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEoQAAIBAgQDBAUIBwYFAwUAAAECEQADBBIhMQVBUQYiYZETcYGh0TJCUlOSscHwBxQjYqLS4RUWM3KC8RdDc8LiJGOyRFSDk7P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEAAgIBAwQCAQMFAQAAAAAAAAECEQMhMVEEEhNBFCJhBRUycYGRocFS/9oADAMBAAIRAxEAPwANSruKbLX0B8kc0qfLSy0BY1KuiKYCgDk05TSeVdCiXD8OLndI0pSl2qy4JydIERSit3g+BWimVlB0iY73n66yXEOHPZfI4P7p5MOorOGWMnSNcmCWNJspqKRWnFOK1MLJRgmy52hQdp3PqqswqwzM5EmTsJ2o9Z4AFsuzwXg5YJgaTPrrNy7dzaEHN/VbGYilFSRXSISQOtXZmQxT5atNZ2C9NfX+Nc2rBZgsEyeW9Kw1uiDLTgVpMR2fQWs6tDASc3wFZ0rUxmpbF5IShV+wr2aso99VuDMupA8RqJ67GvTbeIRRCgAdB5fdWA7IoAzuVmAAD0ma04xBmuPqPtKj0ej+uO+Qk96TFWsPcjc0DW+Sau4fM1c7idkXqT8R4mlm2912yoilmPgOnUnYDqa8dwNz+0MW+KxLFLeoQTGRBIQAkEbkT1JPWr/6QuMnEXv1O2f2dszdYbO42X1L989BWc4gzi1lQgBVI36mTpHKiqWhXcrpg7jWGQXSls5kzNlaSWfvlczGIzEq2g2A9dFOH4bIIO536bbDwH51NV+GYPLBbWFgeZY+9iKJKOf58qIp7im1sAcczXnKkFbatETuZgn87Vav2MpRVEHMMoG+h191SuggiZYyoXadSCT0HMnxohhsNGZiczc2iJPRdIC86Fq7C2i07jTw9mg8j76iFv5RIjmI56SeR5mKkQR06ewDXmNfZXN9iNPDUnrJY8j4VRO6IDb8PfSqj+36L7CfxFPRaCg3FKKkimy16x83ZxFKK7imigVnMUstSKkkAc/bR2z2WvMoZShnlqD91TKcY7s0hjnP+KszwFFeF40puubTTqKr4nAvbYq6FSN+ngZrScF4bbdQ4EzuJ8/bWeWce22bYMc3Otmgjw7FZ1EDU/hT8R4Sl8ZXnTYzqDRXDWUtgZRp91TNdRhrvXn99O4nsLHcalqeWcW4cbD5CZ5g9RVKK2naThzXTKqSyzlgbjoTtQiz2YvMCSUHhJb3qCB512R6iCinJ0zy8nSZHNqEW0BsPZZ2VVEkmBWia4+HbJc1WAQx6fGpuDYM4d5uqoOsGQZ6wRty86tdoHW5ZZtJGoPMUpZFNpLVGuPC8cG3o+Cpe4Yl5S8CYMRpM6j8+NDLnCmYxbQyInURMcqmfFH0asvdgRE+FaXsw6ugM97TN66lylCNjUceaXb/AHBeC7NOFBPyzzHLStBw/s8iLtLbydTRhHGwprrsNa5pZZSO+GCEVoiq/CEIhhIrIdquCKhV7aROhCxG2hitk2LmqPEFBXNO2sdaeOcouwzY4zi1QF4Lh8ihCANJPUk9fZRB7dTcLwudc5+cfbpRK7hVA0onP7BCFQSQJsJrVPtlx1sHhWNlGN1wVVlUkJp3nYgQIB0nckeNFGGWgXapGu4W6gdk7ubT52TvZT4GI/MVG7KT7Ty/hlnKGBJJmSTuZVWP31bdJ0qPCn5XjlP8A+FWE9fsrRkJ27HRNPLbSpQvM7eIrkLoCfz41O45ab8idP60hlZLYDsQNWgnygctqupoNY0Hh7Oe1K2nlvuaCcU7QBSUsd5joXmVB/d5E+NJuikmw0UO351350PvtLhSdInw1OvtgVHwK62SD3mzMST1Y89DzmljR318ZH4Cn6BEmcDSP/jz16UqUJzI81/mpqVgGIpRU2SuStesfMOyOKsWXSIZMx6gkHy2qLLUuHBzCDB5GlJaDg33BLB2ranOubfYjvJp05jxrW8IxhYDeRv0I6is5ebFLl9HZt3ZWc7IzbzpIYDpSs4riQn/ANMi9IUfjcry8uaLbX/T6PpullGKe1/g3GNwq3VKuoIOnjWew+AeyxVCCs6Sdh7JNDGxfEjobSRHP0e/2zSXE8R+gi+2z/NXN5pJUqo7PjRb7nuaT0bMNd/DT8+VQ4nE2rIzXbiIP3mAP8R+6gS3OIka5PV+w195qtc4fi2M+jw5PUrhj/2zWLlJ7s2jCMdkd4/t/grfyC11v3Rp9pvwrO4r9JeJZgbVi2qA6hy7Fh0kRHso6OH46R3cOnhkwxn3Cp0wmNDLPoYkSAtgEidRtppU/VblasDYjtKuORWVTbdBDKSD8qCCCN1McwNjVew5chCxykxE6Uf/APSuz3CsO7hLhAEoqO2XZdPlQSN4HhRE4m0MxKDMtxFJKiUSVhy2WYP41vg66OJOLVr1+Dj6v9OeZqSdP3+SgOzaqnfeGJ0I1A6Cr/BcFkBOYzt4GKmxOLSLkhu4Qsa6KwAz7adaWdELlVf9mgjfvBszEmRpE7npVy66MlTZMf05wkmkgpZxUU97Elqpti0TOMrHImeSG1mTG2nydzprUr8RUEgoQBbznunTflHgdfCsn1MDddNMidjNBcfxJg+SDHjzmjP9oCVzIR+z9I/7o0I9fPyqo2NTMme2c9xYMd45dxouvIdPdVx6zHF6ozn0WSS+roIcKuHIAaJM+m9BExzINbZUAwCwIBEmACAdY6xSNx4mauEvL9ktCJx8VRbtlrFXByoPxITbeeaMPNTTpfLOVEyKuvwhXBL9DoD4Vuko7mDbktDyPDLDEfur/wBw/CrtpP6zVfBJMN1RdPUWq+o+6IpNlRWgwHn4CpkEanflOms845fmaRHt90eH3006zyHTQD1GkUkCu0odlVUMAnVZglepnXLpQzA4HLOgJUxPTQHTz3oxjXAOZ9iIB1MkGQJ5yC2lVLOGd2LTkQgcu+YnYHRd+dZSb7tDVJdpNwgd9xOghuWgObwPMGm4roARE5hr7JOm+/562rGGRDCc4k7knqTrrHOq/E0JQ8ug2+cPEfdV3oSo0zm0NB3vLb2a0qktYRgNm3PXqaVTaCjVG1VnC8Ke5MaRtOxpwtFsHxPJow8q9Kc5JfU8PHixuX2ehVbsq4AJZY8JoZjeHG00HUcj1rXJxRW+cB4GoMdctuIJHXSN6wWeV/Y6p9Fja+m5h+M9oruGJhhlVVWAonMVBiTJ66/7Vnv+IGJgE6mJJDZQd+WXwqbtxhWa5CQRqxl0WAAok5iOtU+H8FYquZROWCM1s6yx69DXDkjBybPYxymopfhB7jfajFYe76IFm7iOTmiM6BiPknaYoeO22Kmcpn/qj+WjPaHCxiXeBtbUSVGwVdietB+Eh1GUhDDtIzJIOYkg66EdKzjhjJKx5M8otpIlPbXFkbGf+qI84qM9scWeQ9t0fCil3Ao0NCQRuGXT31WweEl8vc3I3WZG43q/jRM/ly4I8f2hxKYexdBk3TclJkL6NwoIYDWd6j4X2vxNx8jPcQxK5WkGNxqNNJPnRfj+Amxh0OU5Dcnpq/v5UGw/C8txWGWQTzHQ1mscUdHfJpAXg3GLqXsQofu3BczSFMsWBmSNDOulGv7z4hx8sftMNBOVNSsQdtCMw8qGYHhcWsS7umR9NGXcOpWSdoYDT10CXg7kxmtzIWM6/KPL10nGLew7klubF+02JYNNwd/DAfJQagGOW/eHlXb9q8Swc+kAz4cDVbe4zeG/erHLwdon0lqIn5a7TE79dKlHBGMD0lqZj5ayS2wOtLsjwPulyau92pxLC5F1e/hhrFvQjPoNN+8PGosR2pxLC5N8d/Dga+jGozQNBvrtWWHBzH+NZiJ/xE2mJ361y3BTMeltEkgaPOp2Gk0+2PAm5cmm4n2jxJDH07DNat6jKJGc5thtDVsuxfDjbsB31e53yXKkwdvlzy09led9neEtdu2rRuoyEnQFj3VOdgO5tIHn4167duqgCgqDEAAHbYcqh4++SjEpZFCDlIu2MHnOaAANtF9vyQKfGYIdcp6/fSwOOGXbXwod2wxc4cBTlcvpvHdDTOWSFGh2jSu1PxqvSOBryu/bAV3GvnYJdAymIRGuOR1YIDk9RINWGxl17aOl3EKrFgYVmz5XAkAHugjb11T7P4H0aEuZcFx6spMwD+etFOFXUayjIzsCX1fc6g/jFY5JtNu+DpxKLiklW6/wYfh40GnI6ep2q8g0nz8aHWgRcj/qjyuLH31fzT+da3bOXtHzTyrrLuYJ8fzoK5C7iZH58qs2WgEcjymBHt3+IpSlSstRKd1Zg9Dp4b8z+Fd2EEidemk/fJ91Wjg80HQaidfeOZG/So8fcS2BmK2wdACfYIA39k/DNZIt0PsZwELsSNt9fLx+7+lixg1JAZZ1gIoaTpqWmBz5xtGvONLDyAiMywIZu6uuUnTmI9R/EjdxBAgETqTDczE6/navP6vq6VRd2WkluSNZQbiPUFj2d2lVb0wPI+RP40q8nvnyy7QYC13by7NXIcH5LCfWDVDs9xLE3b13DpkzW5YmAQBIXc67x7/Z9pmyqEbPE6fC8k62LxsE6jxjUdZPOnFhvv5+E/dVduM4kGGuW1PQqoMcjrSHGsRMfrFuTyy25rzvltej2vhX7Mp2nwTs7ARPo3Ud5R3muKwGp+iCfZWx4Bw9VtlwsllidSD6qucExGJv58t5WCj5QCwCCQRK89/KoVuY2YLtP+RNuXLWsJZm/R0LEkqvYbtNhi1tyFkm+p2MwjyR5CguOweeHCkEZsvccGDb1nTUyOdF8VjcTbUPcvlFJKgsEAkEgjbeQahw3E79zL6PEF805coU5oiYgeI86qOeUY1RlPBGTu9QMlmEgIxOUDVH3meSUkwDFyQrA5nPyLmsrp8ytdxazibcEXWyhZeADl6E7mNDr4UCfjxXVsXHLUgCfLwq11MntEzfRxVXIJ4DCN6CyCDIuKdVYGA7+EjbnVrimEY2zC6935pOxHQVQsYm+6q6X2ZXMKwKw2pGntVh7KK8MweJYtnusFjc5TrPhWLyyvVHSsUUkkzDYDgTtgMQpUzn2KXATmcsIBQMY02BoFguzd132YftFfW3eGgIO7IBXoV25iUVme86qsSxgAZpI1jXQHUdKHntDoW/XJUbkEEDyFT5pXsW8a7WrMla7CXSsFiO7k/w7n0887VIvYe6GDBie+jfIubKP8tbHDcQvXTlt4h2Y7BYJ9e23jRfi+FxNsIwuvEHMRrG0Tv41o88lp2mKwp6qZ5a3Ye+qgHN8kjS3dO7TySrNjsneBU5HP7QN/h3eUD6GlbNsZdBg4hwfEx+Fctj354lvtdN+VS8s2v4tFRxxv8AlYC7F9nLtp0d1YZDc+ZdWQyiIzovStW3DLjsWIIkgxB0gba1a4RgL1xHc3rkEDJmJE6NqJgxMa86FMLqtke84bTRmI3MDfeT508fUzg20tWTm6WOVKLeiD+A4dlEspLT+NUcfwx3LnISDIVToANBpB2mTQt3YR+3YyWUAPJJSc4ABklYMjlGtEOBcNa8c7NcVCCBnzLmMjUK+sQDrHqpZOonkdNFY+nhiX1ZRt2wjupAV/SPPWDLCdehU+2peFPFrISsW7jIAvIALodNxz32qCyGR3RtWW6Qf8pJg6fuwa0mOwtrD22ZbZYZgSodplgFmSegFPK634QsFNf3Z589lRfMIsBrvL9xXBn1yamVVPzR83YfSQt9/StBhUtu/dwzyczGbzncQdNvhUZu2wSP1Z9DH+M/LSj5Kr2V4HYHtWw0d0am2DpydTPvFWcLhdA2UbJy2zaH71oguORdBhm5f85uUxy8TXdvGqYAwzDUAA3WOvdjSPAVnLqU1Q1hoHOsHugCVBEaGY2JHP8AIrP3MDnuBlTYHM51ZeokqSD4tO2njpuMuqEBkyMBJXMzFhv84b6H1zQGw0zkIbMZUjYDWRyL+7auWU5JtoxmglcuAIBLEjLJYjXWJlhttt5VBdC6RBYA9TrH53qsWZRuzkj2AjkpIlhXYaADABBPMrz8RXI41qZNkS3mHzqVdXMRBP7RfYEpUV+CbBts2GbMt27m6K1s8ojUgxAitr2Otqi4hmYj0rjcZWywdO4Wn5R109VeftZVt1U+we2mXBoNQoX/ACyu+u4r6qeHuVHPjzRhLuo9gv38O6hHCMAIGYGRAjTuzQ65gsAGDlFBXobgAHPQaV5vaBGguXQukgXHjrtmj/atEOIYbUBCJnQIo3/1Vyz6eUVS1OyHUxlrsza4fjGHKZEdAsEZVVlgHfTLVlOKWojOPJvhXmPDMXbR3hHmTtGizIG9FDx2wvy2yztmKifVJ1rDxyNfKjaXr+GcAOEYAlgGViATJJgjxNd4bFWEEIqIOioV+4Vhz2nwo3uDzX410O1OE+tXzX403CWwvItzd/2hbnNmEkAbNsJj76ru+GbdLZ//AB8/KseO02E+uT7S/Guh2lwp0F1SeQDKST0Gu9JQkthuae5sPT2O6AFAUgqArACJOgGnM+dWP7ST6Q8m+FY4cXT6De740rvF0We4xienKh45AsiNVicRYdPRvldCIjvHTrpqPXQj+73DspX0SQdxnua/xUGbtHhlLBrhBTR+65iBPJdfZVcdsMGYAvHXbuXP5aSg/RTyG04b+rWEyWQiL4ZiTG0sZJ9pq5+voT8pff8ACsR/bdpBnYtkMQ0ArsSCANddPIba1G3a/CDe4fst8KfZJ6slTSVI0uK4Rg3cuwEnfLcuov2UYAeVd4Hh+EtEMiKCNRmNxiDoJh9joKyv98sH9Z7jSPbPBfW+4/Cm4zEpRWyN8cen0h76gxF2y8BwrZSGEqxggyCPbWGHbXB7B2P+h/hUuF7U2bpIshnI30ZY6fKXX2dKXjZXkNjbOHUghUBBJHdOhbc68zVn+0EJAzSegUz99YscXtT3riKealhIPMa054zYH/OT7QqHEamaO/woPda56SAxBZQFgkKFGubwq9jAroUJgEjUFeRnrWJPaHDfXL7/AIVw3aTDfXDyb4UNN7gpJbG5wws2h3Mq6yWLLJ33JMnegnaLs5g8WczMbb7l7TojN/mElW9ZE+NAW43a3zn7LfCs6cdZ9JcYO5JBC6NEnU6R1ikk09Buae56LhOGYa0iIL05UVZLpJygCT46e+rNp8Lb7wdM8RnZ0zezXT2V4w+Nc6Z28yK5XEmZBJ+PLT87Vq8F7sjzfg9I7VYy2zowYPKsCUZYju/KIPPX30GTEK0oyhQNBBkwDI5R7T5UGwnEGuAIFgBYMEAk7Tt4+O9PbOT5MGZzGYy6zJ1idPfXHlx7p7kSl3aly/bBY5LhE7AAA6CANTzmq7vlIhiZ0I5j8yNKpm6TJJJ1MDQjpy3rtHJGdQRA3mAAB5x7TFSoaamLSJ/SHoB65n26UqpfrrcoP+kH386VLsfBNFbhmKFwnXKg0LuwRFJBIBczqY2g1q8F2ea6gdHWDtO0Rp80eFTdluz5wi3VZluLcyyMsDQMCCDIIM+6ibcOQKBbzWWAADWmybdVgqw8CK9hzl6ZoseP2gEeAXxrkfL9OFyGNOTEj2imTgzkqBuSN9vvrUrefIEdy507xAUmBGoWBNNhk7y+sffU+SXI/FD0jPcM4G7u8FND1PiNNP3TWY7eYVrVxEaPkzptXpXAl710jmw69W+NYP8ASegOIQzsp+5adikktTCu1TWlBWoXWu7bgCmC2OLo1q1wtmN22q75hGlVrjAnSiPZzXE2v84/GgD1wdn3nVk38ajx/BGVHfOpAVmjWYgmK1C7+388qp8TH7C5/kb/AONS2OkeP8SQl8WR9Nh/CKzTgiOWnOtdxG0QcYSCoNx4JkaaCR12PlWPuNPXTrvUxW4z0TjXDinCrNwNOZEkRG6ToZ9VUeL8Bw6Ye3dRXzu1satIEkBufztY6eFHuPtHBsP/ANO1/wDyJrAYrtDiXVVdyVWMoKoIywRsvgKtAx+0a4dWVcPbe3lzB87ZgxBABXU6b+dB6nxOLd2zM0nU6gc99AIrkXmjl9lfhTBfkfDOQ/nWz/R3gxdvlc0DICeest8KymCv99ZAgzplXofCtt+i3FTiGH7oGyj6Z5VDYlqzI9q7GTGYhJnLcYTtQgiK0Xbm6wx2IEn5YPmims6TVDJEZcrArJMZTMZdddOcjTwpWDDAwPyPyajmnVhNID0C1blFP7o+4UONnvv7PuFbnhnZrPZRvSRKjQJPL11CnZcG86ZyIytOTfMBoddhHvqKDU8xbFeI86QxK7lh7591EG7RMGZWs29GI7oiIJ2mas4fiNm5nS8joCo71tLbvOYEAAqpCmYOp2o75Xqv9jpA7CcQKwVeB6jptvpRO5iFAZkiToSJJYDXYju6RpQW5hYKMkg5e8CHPezN8nuCBkKj1g13ZUMYnIdgO8wOx+cQdtNqicU9RBAYokR1nYx7412/O9V0xBAAzSYOkye8Y2qJFOaAdJAhm7sSN5rrE3zmIOHEy3eABBzbGQIMeHSojFeiUrLfpU8fIH3nelXFm/3RNo+wgD2DJpSqaItGwxHaNwSqW5IJG+mh31jlVW7x6+WyjKNJ2g7gePWqzr3n/wAx94B/GuCO/wD6B961fcztUUWcHxG8160rvIZjIjwOlbLBalfZXnONxAUoytGQySOWo+Jo/wBn8YbuJRgHKZQAxBCyFJNaQi2rMsklFpGo7PDRz++OX7oP40N7RdkRi3Dm5lgQAPUo1kHpRLgAhX1+cvP9xPGi6t+fya0TIaswJ/Rpb+tfzH8lc/8ADC19a/mv8legz+fya6g/n/en3CUTz9f0Y2Prbnmv8lWsD+jy1ZdLi3HLIwYBise2FFbWD1/PnT5j+Y+NLuH2jIdRrz/PKqvEB+xf/J+FXUBkf0+NVMapKEdQB5kVPch0zynHqSuNmf8AGcCZOkjb31lP1BiCTpqYG5OvQV65Z7H339Nm7ivcZhmBzQWkaD2VQ/4U82uzPRGNJSSFTH47ang9gdLdrcN9WBqF1515/Y4arrmzqpBIIIuQfEGNK9tHB0/Vkw1wFkRUUgMyZsihROXUagHflUVvsvglUgWDr/7+I/np3poXFpPVWjxXD4aysi6rEg/MuZR5NbPnNNisPZaBaVwSfn3A3sgWwffXsrdlMGf+S/8A+/Efz06dlMICCLTyNv21/wDnq+5GdOzx21w8KVLyuoAksJ0MxKa/1rXfoywGW6XEFSNCGzDZxBECN62i9lMKIARxBn/GvHX2t7qs8O4HasNmth1J0MvceR/rJqB+zJ8cwqHEXCbdpjmGrW0YnujcspJq/wBn+D2HD58PZaMsH0SDr9EDwrnjaxffxjp9EVY7PYtlLArKErJynuzIBkbD+lNukAQPZvDH/wCmtfYArkdlsN/9va+yfjRZMShMBtfURTvikUwSZG+h09dT3IYrGHCKFAAA0AE6DzqigjEv421PPkYq/wCkWJnTXUAkeO1BcXigLxZGB7gGmvM6R5UOSA8dx+GKYm4pHz3iCPpmNR7KLcLwySxadonocyknTwBrS8Y7KX7zenSzLE9/LIY8wcrQNvo660ExCC22Rw6vlzZSjgwJ128CPXWUm2tCpJJ6HRuBTMzqBEjfadqV+3ucp1jl+6I90UHs3GzHRiJn5LR0HKiN57mQkTlGXQSDMESQfXE1m4yaJUm1qViiMCWyxykS22o38fdUN7C2pPSdBJjlygxua4FyGBPQn7h8ajd5bkdpHPfkaI2tBdy2L9jhwyjuBvGfz6qVDkI+idz958aVVUh1Hg1mAwqvnd72UFyMoALmFXmZ+6r2HwltrkWrD3zljvSRM7kHQD1gCtBwLhGHTQ2xcbn84DzABPqrXYa2qjuoEB3AAXzitu2ty+5+jGDsddvlDfa3aRZhLYzNr1PyfKjWG7LJYBdLl1so0DMMnTVVAmtADSOV/l7DlrHtGx9tUtNiHTdsznBMI0PB0zab69xB1osuEfr9/wAau/rSKIHuBj3VC/E0Gyt64099KirOBg3+kvkx/wC6pUwR5t5Aj7zUNviuYwq/092lT+lc8h50UKztcCOp86c4VB/uajzv0XzPxrlrjxsv59tFBZMLaj5op0QDYAeyq6+k5haTNc5ZfdRQ7LjU6VQQ3eZHu+Fc3nugMc4AAJnp7qKCzK9uOPXVZ/1eCtpRmlSwZ3uIsQpBMDN/FWa4R2mxV69atsqBWdQSqOCBMkyzQNBzr0Ds/wAHslC1xEuMzbuoMabCfEnWig4FhfqLX2EPKOlCr2hNtbMzXEeBvddHGJa2EiVRsoaGnvAMAelFls/vr/D8aLLwzDjaza+wnwrocOsb+it/YT4U7AE/qx5Ov8PxpxhT9Me740V/UbP1dv7CfCpEwtsbIn2V+FAApMMkd4IT1IUzrUX6kE+QiZSRm0PLb5J11oy2GT6CfZHwrpLK8lHkKT1BaApcLPykjTTKHEH21PicGSCAoaTpMyNR4++iUU4FLtHYNuYPvBkRASCDI31WNRz3oe2BfPma2CIKmCSSCSdys6TvNaMillooDKtgCrMyZ0PKQRrEakaxpzGtDMLgEGJd7rS5QKGCDQFyTmgS2w3FbspQPiPBGa4byMMxEFG0GkfJI2259aaFuZvjnZJ7yOLTKwYEBkhSNNJEgR4Vg+Idn8ThkbPZcaLJUsw7p02kDT1V6a6Oh1DI3l5EaH2VZs8VddGhx+8NfOk3e4dvB4HcfvScwk8wZE+verLG2EzIxzaAhhod5IIG1e0Y/hOAxOt6yFY/OGh81oDif0aWzJw1zQ8mOYefKpohRaPI7t7U6j2GlW+vfoyxUmBbjwc/iKVXaKpnpmGxCKIE+Q+4VfR9KjtWgugAFSAUxiVjzrsPFMBSy0COzcpBh0HlXBBrpLRO9AEZtSe6QPAD4VYtYf6Rn1V13UBJIAAkkmAAOZJrz/tT28OtrBnTZr38g/7j7OtVGLk9CJ5IwVs3b3rIJUugYaEF9R4HXSmGJsfWJ9v+teRcGt3ShcyczEyx1aQJbUydedElS5yHvHxro+OuTgl17Tqj0k4yz9Yn2x8aZsXZ+sT7Y/A15v8Aq93XQbzuPj4Uwwt3p7x8afxlyT+4S/8AJ6ScVY5un2/61y1zDuIzowP78+PWvN/1e5vl8dx8ac2bkRHvHxo+MuQX6jLg9N/W7cfLSPWIrk8RsjT0iD2ivN/Q3PojlzHxpms3DyHn/Wl8Zcj/AHB8Ho54pY+uT7QpDi1j65PtCvN/Q3DyHmKc2LvQaeIo+OuRfuEuD0YcUsfWp9oU44tZ+tTzrzYYa5PLzFSJh7mkR5in8ePIL9QlweiHjFjf0qedJeMWPrU8688/Vbmm2m2opDC3OqiPH1eFL465H8+XB6L/AGxZ+tTzpv7ZsfWr5156uFudV8/6U7YVz85fM/Cj465D58uD0jC8QS4SqOrECSAdQOsVbD147jrV60yXUeCnzkJlfWI2rZdme2aXot34S5sG2R/VPyW8KieFxVx1R0YerjN1LRmxzVwxpppVgdgzoGEEAjodRQ3EcGRpKkqem6+R29honSpUBmL/AAy4nLMOq6+7eqisQdCQfDQ1sQagxGHR/lKD48/OlQ0zO/2hcHz/ALvhSooeDJyYjypUBZKBXSimBpwaoR2oqQCkopEzQIdR51U4txa1hkz3ngfNA1Zj0Uc6tOpghSAY0JGYA9YkT51iuJdgrmIc3LmMZmPNrew6AB4A8BVQUW/syJuSX1VsynaXtTdxZK/ItDUWwd/Fz84+Gw99QcL4QWhrgIG4Xr4t4eFbDA/o8VGzPeDkbDJAHjGYzRYdmT9YPsn411RyQSpHnTxZpatGZRI/OlSJp+FaP+7LfTXyNRN2UbNnLpmGgMNoKryx5MPi5V6AoPiaeT1o6nZl+br5GnPZp+Tr76XljyP4uXgBCnBHjHto7/dl/pp7/hXB7M3D89P4vhR5Y8h8bLwBXbTWo83r9/qo8ezL/TT+L4U47MP9NP4us9KfljyJ9NlfoAhqQeaP/wB2H+mvkaX92W+sH2T8aXljyHxMvAADfn8+FOGo9/dlvpr5GkvZk/WD7P8AWjzR5H8TLwAg811vvR4dmP8A3B9n/wAqkHZqNfSfwf8AlR5o8lrpcvtGbmnBrRf3bH1n8P8A5U47Nj60/Z/8qTzR5GulycGcI/PKgXEuERL2xpuU6eK/CvQT2cXncb7I+NIdnE+m3sAoWaKG+kyP0Y/s72wexCXZe3sDu6fEeFej4LGpdQPbYMp5j86Vm8V2Hw7tmL3FJ3y5QD4mVOtXOEdmbeGbNau3dd1LIVPrGWscjxy1judWCOaP1lqv6h+mpqQasTsHJpjTkmo2egB8xpVxmpqB6ECxzNSKR1FV3NRg0CCAWugKoBq6VvGgZemuSZqtmpBz1NAUW6VVPSHrTi6etAi0DTx41V9KacXD1oCi3FMBVU3TTemNAqLs1wBrVX0xroYlqB0WqRNVv1lqb07eHlQBZY0xNVvSmkb7UrCi0KeKqC8a6F1utMKLNPlqt6VutcG+3WgKLZWllqkb7daXpW6mlYUXctNlqr6Q9TSDnqaYFuK5MVUY00UAXCRXGYdarV1FA6JjcFcm4KiammgVEtKmU01AFZtq5FKlQNDiuxSpVIDjenpUqoBxTUqVAh6cU1KgDpq5pUqAHNMKVKgBGkKVKgBUjSpUmNDrXQp6VCEJqjNKlTAcUhSpVII6pUqVUBy1JaalQNHZp6VKkgGbauWpqVMZOm1KlSoEf//Z',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwscxlgyODshrS1SaPGXwNCDyGpM6NEtZ4w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKyb0HQha7qKEdxFD_Rp4E4uH4LbWGTUEvg&usqp=CAU'
      ],
      link: '',
    },
  ],
};

function WishPage() {
  const tabs = ['RiVideoLine', 'RiMapPinLine'];
  const [selected, setSelected] = useState(tabs[0]);
  const [params, setParams] = useState<string | null>();

  // 한번만 마운트 되게
  const [mount, setMount] = useState<number>(0);

  const [wishList, setWishList] = useState<WishFolder[]>([]);

  // useEffect(() => {
  //   if (mount === 0) {
  //     setMount(1);
  //   } else {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/wishlists`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('Token')}`,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setWishList(res.data.data);
  //         }
  //       });
  //   }
  // }, [mount]);

  /* ===== 서버 연동 ===== */
  const [accessToken, setAccessToken] = useState<string | null>();
  const [folders, setFolders] = useState<IFolder[]>();

  useEffect(() => {
    // const params = new URLSearchParams(location.search);
    // setParams(params.get('wish_id'));
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axios = require('axios');
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 3000,
  });
  useEffect(() => {
    async function getData() {
      try {
        const wishRes = await instance.get('/wishlists', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (wishRes.status === 200) {
          setFolders(wishRes.data);
        }
        return null;
      } catch (error) {
        console.error(error);
      }
    }

    getData();
    // tmpFolders.map((data) => data.wishlists);
    // console.log(formsData);
  }, [accessToken]);

  useEffect(() => {
    async function getData() {
      try {
        setParams(searchParams.get('wish_id'));
        const response = await instance.get('/wishlists/' + params, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          console.log();
        }
        return null;
      } catch (error) {
        console.error(error);
      }
    }
    const searchParams = new URLSearchParams(location.search);
    searchParams.get('wish_id') ? getData() : null;
  }, [new URLSearchParams(location.search).get('wish_id')]);

  return (
    <div className="px-4">
      <div className="my-20">
        {params ? (
          <>
            {/* wish inner page  */}
            <InnerTab
              tabs={tabs}
              selected={selected}
              onChangeButton={(e) => setSelected(e.currentTarget.textContent)}
              // onChangeButton={(e) => console.log(e.currentTarget.textContent)}
            ></InnerTab>
            {/* {selected === tabs[0] ? <>{params}</> : selected === tabs[1] ? <>{params}</> : <>aa</>}{' '} */}
            {selected === tabs[0] ? <></> : selected === tabs[1] ? <></> : <>aa</>}{' '}
          </>
        ) : (
          <>
            {/* wish main page */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                {folders !== undefined &&
                  mockFolderListData.Folders.map((data: any, i) => (
                    // <Folder label={data.name} id={data.id} thumbnail={data.wishlists}></Folder>
                    <Folder label={data.name} id={data.id} thumbnail={data.images}></Folder>
                  ))}
                {/* FIXME: 위시리스트 섬네일 받아오게 수정되면 수정*/}
                {/* {
                wishList.map((folder)=>
                <Folder label={folder.name} id={folder.id} thumbnail={""} />
                })
                } */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WishPage;
