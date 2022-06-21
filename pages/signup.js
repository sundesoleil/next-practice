import NavBar from '../components/NavBar';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Signup() {

  const validationSchema = yup.object().shape({
    email: yup.string()
      .required('이메일은 필수입니다.')
      .email('이메일 형식에 맞지 않습니다.'),
    name: yup.string()
      .required('이름은 필수입니다.'),
    password: yup.string()
      .min(7, '비밀번호는 최소 7자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자까지만 가능합니다.')
      .required('비밀번호는 필수입니다.'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 확인은 필수입니다.'),
    });
    
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: yupResolver(validationSchema) });

  function onSubmit(data) {
    alert('SUCCESS' + JSON.stringify(data, null, 4));
    return false;
  }

  return (
      <div>
          <NavBar />
            <div className="max-w-2xl mx-auto bg-gray-100 p-16 min-h-screen">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-md shadow-sm" autoComplete="off">
                <h3 className="text-center py-4">회원가입</h3>
                <div className="mb-4">
                    <input {...register('email')} type="email" name="email" className="{`form-control ${errors.email ? 'is-invalid' : ''}` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이메일을 입력해주세요" />
                    <span className="text-red-600 text-sm">{errors.email?.message}</span>
                 </div>
                 <div className="mb-4">
                    <input {...register('name')} type="text" name="name" className="{`form-control ${errors.name ? 'is-invalid' : ''}` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이름을 입력해주세요" />
                    <span className="text-red-600 text-sm">{errors.name?.message}</span>
                </div>
                <div className="mb-4">
                    <input {...register('password')} type="password" name="password" className="{`form-control ${errors.password ? 'is-invalid' : ''}` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="비밀번호를 입력해주세요" />
                    <span className="text-red-600 text-sm">{errors.password?.message}</span>
                </div>
                <div className="mb-4">
                    <input {...register('confirmPassword')} type="password" name="confirmPassword" className="{`form-control ${errors.confirmPassword ? 'is-invalid' : ''}` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="비밀번호를 한번 더 입력해주세요" />
                    <span className="text-red-600 text-sm">{errors.confirmPassword?.message}</span>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">가입하기</button>
                <button type="button" onClick={() => reset({ email: "", name: "", password: "", confirmPassword: "" }) } className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">리셋</button>
            </form>
            <p className="mt-5 text-center text-gray-600">이미 계정이 있으신가요?<Link href="/login"><a className="text-blue-600"> 로그인</a></Link></p>
            </div>
    </div>  
  )
}