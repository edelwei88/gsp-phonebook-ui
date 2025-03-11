'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { check_cookies, set_cookies } from './actions';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useEffect, useLayoutEffect } from 'react';


const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Минимальная длина имени пользователя 5 символов."
  }),
  password: z.string().min(5, {
    message: "Минимальная длина пароля 5 символов."
  })
})


export default function Page() {

  useLayoutEffect(() => {
    check_cookies();
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: ''
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    set_cookies();
  }

  return (
    <div className="min-h-screen rounded-xl flex items-center justify-center bg-white">
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-alice p-8 rounded-lg shadow-md w-1/3"
        >
          <h2 className="text-2xl rounded-xl font-sans mb-6 text-center text-gray-700">
            Авторизация
          </h2>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Имя пользователя</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Введите логин" 
                    {...field} 
                    className={`${form.formState.errors.username && 'border-sky-600'}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input 
                    type="password"
                    placeholder="Введите пароль" 
                    {...field} 
                    className={`${form.formState.errors.password && 'border-sky-600'}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {form.formState.errors.root && (
            <p className="text-red text-sm mb-4 text-center">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button 
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full py-2 px-4 rounded-lg text-white font-medium bg-celestial hover:bg-celestial transition-colors bg-black"
          >
            {form.formState.isSubmitting ? 'Вход...' : 'Войти'}
          </Button>
      </form>
    </Form >
    </div>
  )
}

