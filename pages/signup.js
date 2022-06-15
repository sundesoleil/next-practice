import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Signup() {
  return (
      <div>
          <NavBar />
            <div className="max-w-2xl mx-auto bg-gray-100 p-16 min-h-screen">
              <form className="bg-white p-4 rounded-md shadow-sm" autoComplete="off">
                <h3 className="text-center py-4">회원가입</h3>
                <div className="grid gap-4 mb-4 lg:grid-cols-2">
                    <div>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이메일을 입력해주세요" required />
                    </div>
                    <div>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이름을 입력해주세요" required />
                    </div>
                </div>
                
                <div className="mb-4">
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="비밀번호를 입력해주세요" required />
                </div> 
                <div className="mb-4">
                    <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="비밀번호를 한번 더 입력해주세요" required />
                </div>
    
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">가입하기</button>
            </form>

            <p className="mt-5 text-center text-gray-600">이미 계정이 있으신가요?<Link href="/login"><a className="text-blue-600"> 로그인</a></Link></p>
            </div>
    </div>  
  )
}