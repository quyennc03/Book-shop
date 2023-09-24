import React from 'react'
import { useGetOneUserQuery } from '../stores/toolkit/auth/auth.service'
const Reviews = (props: any) => {
    const { data: getOneUser } = useGetOneUserQuery(props?.feedBack?.userId)

    return (
        <div className="flex mt-10">
            <div className="flex flex-col w-[20%]">
                <p className='text-[14px] text-black font-bold'>{getOneUser?.fullName}</p>
                <p className='opacity-80 mt-2'>{props?.feedBack?.createdAt}</p>
            </div>
            <p className='w-[80%] leading-5 text-[14px]'>
                <p className='text-yellow-500 mt-1 font-bold'>5 sao</p>
                {props?.feedBack?.comment}
                {/* Thực sự cảm động và lôi cuốn. Sách cho trẻ em ư? Chưa đủ, tôi nghĩ đây là cuốn sách viết cho ai đã, đang là trẻ em. Đọc để quay về một chút của ngày xưa, để thả trôi những phiền muộn sau cuộc sống bộn bề, để  tìm lại nụ cười hồn haauk ngày thơ ấy. Một cuốn sách đáng được nâng niu. Tôi sẽ không thổi thêm lửa vào trong cuốn sách nữa, vì ở đó đã có lửa rồi. Một ngọn lửa trường tồn mãi mãi với thời gian, không ngọn gió nào dập tắt đi được. Tôi nghĩ rằng đây là một cuốn sách nên được đọc nhiều lần. Vì không phải đọc 1 lần là thấu suốt được hết, ý nghĩ và thông điệp trong cuốn sách quá nhiều, quá lớn, trong khi dung lượng lại ngắn. Những từ ngữ ngây ngô, giản dị, làm ta có cảm tưởng như thực sự có một đứa bé đang kể cho ta nghe. những câu chuyện nhỏ tạo thành một đong suối mát, chảy vào từng mạch rãnh trong tâm hồn ta. An yên! */}
            </p>
        </div>
    )
}

export default Reviews
