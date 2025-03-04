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
    < Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя пользователя</FormLabel>
              <FormControl>
                <Input placeholder="Ваше имя пользователя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="Ваш пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Войти</Button>
      </form>
    </Form >
  )
}

