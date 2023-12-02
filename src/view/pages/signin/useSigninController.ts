import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth } from '../../../app/hooks/useAuth';
import { authService } from '../../../app/services/auth-service';
import { SignInProps } from '../../../app/services/auth-service/signin';

const schema = z.object({
  email: z.string().nonempty('Email is required').email('Email is not valid'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must contain 8 or more characters')
});

type FormData = z.infer<typeof schema>;

export function useSigninController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignInProps) => {
      return authService.signIn(data);
    }
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signIn(accessToken);
    } catch (error) {
      toast.error('Invalid Credentials!');
    }
  });

  return { handleSubmit, register, errors, isPending };
}
